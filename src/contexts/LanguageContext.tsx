'use client';

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { Language, translations, Translations } from '@/lib/i18n';
import { deepMerge } from '@/lib/deep-merge';
import { CmsImageContext, CmsImageMap } from '@/hooks/useCmsImage';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const CMS_FETCH_TIMEOUT = 5000; // 5s timeout before falling back to defaults

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');
    const [cmsOverrides, setCmsOverrides] = useState<Record<string, Record<string, unknown>>>({});
    const [cmsImageMap, setCmsImageMap] = useState<CmsImageMap>({});
    const [cmsReady, setCmsReady] = useState(false);
    const fetchedRef = useRef(false);

    // Load language from localStorage on mount
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') as Language;
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'de')) {
            setLanguage(savedLanguage);
        }
    }, []);

    // Save language to localStorage when it changes
    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    // Fetch both CMS text + image overrides in parallel on mount
    useEffect(() => {
        if (fetchedRef.current) return;
        fetchedRef.current = true;

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), CMS_FETCH_TIMEOUT);

        const fetchContent = fetch('/api/cms/content', { signal: controller.signal })
            .then((r) => r.json())
            .then((data) => setCmsOverrides(data))
            .catch(() => {});

        const fetchImages = fetch('/api/cms/images', { signal: controller.signal })
            .then((r) => r.json())
            .then((data) => {
                const map: CmsImageMap = {};
                for (const override of data.overrides || []) {
                    map[override.id] = `/api/cms/images/${override.id}`;
                }
                setCmsImageMap(map);
            })
            .catch(() => {});

        Promise.allSettled([fetchContent, fetchImages]).then(() => {
            clearTimeout(timeout);
            setCmsReady(true);
        });

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    // Merge hardcoded translations with CMS overrides
    const langOverrides = (cmsOverrides[language] || {}) as Record<string, unknown>;
    const t = Object.keys(langOverrides).length > 0
        ? deepMerge(translations[language] as unknown as Record<string, unknown>, langOverrides) as unknown as Translations
        : translations[language];

    const value = {
        language,
        setLanguage,
        t,
    };

    // Show loading screen until CMS data is ready (or falls back on timeout/error)
    if (!cmsReady) {
        return (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
                <div className="flex flex-col items-center gap-4">
                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-black" />
                </div>
            </div>
        );
    }

    return (
        <LanguageContext.Provider value={value}>
            <CmsImageContext.Provider value={cmsImageMap}>
                {children}
            </CmsImageContext.Provider>
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
