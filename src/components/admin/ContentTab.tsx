"use client";

import React, { useState, useEffect, useCallback } from "react";
import { translations, Translations } from "@/lib/i18n";

interface ContentTabProps {
  authHeader: string;
  adminName: string;
}

type NestedObject = { [key: string]: string | NestedObject };

const SECTION_LABELS: Record<string, string> = {
  navbar: "Navbar",
  hero: "Hero / Header",
  services: "Services Labels",
  about: "About Section",
  servicesSection: "Services Section",
  personalized: "Personalized Section",
  financialServices: "Financial Services",
  stats: "Stats Section",
  testimonials: "Testimonials",
  faq: "FAQ",
  cta: "Call to Action",
  contact: "Contact",
  footer: "Footer",
  chat: "Chat Widget",
  common: "Common",
};

function flattenObject(
  obj: Record<string, unknown>,
  prefix = ""
): Record<string, string> {
  const result: Record<string, string> = {};
  for (const key of Object.keys(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    const val = obj[key];
    if (val && typeof val === "object" && !Array.isArray(val)) {
      Object.assign(
        result,
        flattenObject(val as Record<string, unknown>, path)
      );
    } else if (typeof val === "string") {
      result[path] = val;
    }
  }
  return result;
}

function setNestedValue(
  obj: Record<string, unknown>,
  path: string,
  value: string
): Record<string, unknown> {
  const result = { ...obj };
  const parts = path.split(".");
  let current: Record<string, unknown> = result;

  for (let i = 0; i < parts.length - 1; i++) {
    if (!current[parts[i]] || typeof current[parts[i]] !== "object") {
      current[parts[i]] = {};
    } else {
      current[parts[i]] = { ...(current[parts[i]] as Record<string, unknown>) };
    }
    current = current[parts[i]] as Record<string, unknown>;
  }

  current[parts[parts.length - 1]] = value;
  return result;
}

function removeNestedValue(
  obj: Record<string, unknown>,
  path: string
): Record<string, unknown> {
  const result = { ...obj };
  const parts = path.split(".");

  if (parts.length === 1) {
    delete result[parts[0]];
    return result;
  }

  const parentPath = parts.slice(0, -1);
  const lastKey = parts[parts.length - 1];

  let current: Record<string, unknown> = result;
  const chain: Record<string, unknown>[] = [result];

  for (let i = 0; i < parentPath.length; i++) {
    if (!current[parentPath[i]] || typeof current[parentPath[i]] !== "object") {
      return result;
    }
    current[parentPath[i]] = { ...(current[parentPath[i]] as Record<string, unknown>) };
    current = current[parentPath[i]] as Record<string, unknown>;
    chain.push(current);
  }

  delete current[lastKey];

  // Clean up empty parent objects
  for (let i = chain.length - 1; i > 0; i--) {
    if (Object.keys(chain[i]).length === 0) {
      delete chain[i - 1][parentPath[i - 1]];
    }
  }

  return result;
}

function getNestedValue(
  obj: Record<string, unknown>,
  path: string
): string | undefined {
  const parts = path.split(".");
  let current: unknown = obj;
  for (const part of parts) {
    if (!current || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[part];
  }
  return typeof current === "string" ? current : undefined;
}

export default function ContentTab({ authHeader, adminName }: ContentTabProps) {
  const [overrides, setOverrides] = useState<{
    en: Record<string, unknown>;
    de: Record<string, unknown>;
  }>({ en: {}, de: {} });
  const [activeLang, setActiveLang] = useState<"en" | "de">("en");
  const [activeSection, setActiveSection] = useState("navbar");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [showCommitModal, setShowCommitModal] = useState(false);
  const [commitMessage, setCommitMessage] = useState("");

  const loadOverrides = useCallback(async () => {
    try {
      const res = await fetch("/api/cms/content");
      if (res.ok) {
        const data = await res.json();
        setOverrides(data);
      }
    } catch {
      // ignore
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    loadOverrides();
  }, [loadOverrides]);

  const handleSaveClick = () => {
    setCommitMessage("");
    setShowCommitModal(true);
  };

  const handleSaveConfirm = async () => {
    setShowCommitModal(false);
    setSaving(true);
    setSaved(false);
    try {
      const res = await fetch("/api/cms/content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authHeader,
        },
        body: JSON.stringify({
          overrides,
          commitMessage: commitMessage.trim() || `Content updated by ${adminName}`,
        }),
      });
      if (res.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      }
    } catch {
      // ignore
    } finally {
      setSaving(false);
    }
  };

  const defaults = translations[activeLang] as unknown as NestedObject;
  const sectionKeys = Object.keys(defaults);
  const sectionData = defaults[activeSection];
  const flatDefaults = sectionData && typeof sectionData === "object"
    ? flattenObject(sectionData as Record<string, unknown>, activeSection)
    : { [activeSection]: sectionData as string };

  const handleFieldChange = (fullPath: string, value: string) => {
    setOverrides((prev) => ({
      ...prev,
      [activeLang]: setNestedValue(prev[activeLang], fullPath, value),
    }));
  };

  const handleReset = (fullPath: string) => {
    setOverrides((prev) => ({
      ...prev,
      [activeLang]: removeNestedValue(prev[activeLang], fullPath),
    }));
  };

  const getFieldValue = (fullPath: string): string => {
    const override = getNestedValue(overrides[activeLang], fullPath);
    if (override !== undefined) return override;

    // Get from defaults
    const parts = fullPath.split(".");
    let current: unknown = defaults;
    for (const part of parts) {
      if (!current || typeof current !== "object") return "";
      current = (current as Record<string, unknown>)[part];
    }
    return typeof current === "string" ? current : "";
  };

  const isOverridden = (fullPath: string): boolean => {
    return getNestedValue(overrides[activeLang], fullPath) !== undefined;
  };

  if (!loaded) {
    return (
      <div className="rounded-lg border border-border-primary bg-white p-6">
        <p className="text-sm text-text-secondary">Loading content...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="rounded-lg border border-border-primary bg-white p-6">
        <div className="flex flex-wrap items-center gap-4">
          {/* Language Toggle */}
          <div className="flex gap-1 rounded-lg border border-border-primary bg-neutral-lightest p-1">
            <button
              onClick={() => setActiveLang("en")}
              className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
                activeLang === "en"
                  ? "bg-black text-white"
                  : "text-text-primary hover:bg-white"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setActiveLang("de")}
              className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
                activeLang === "de"
                  ? "bg-black text-white"
                  : "text-text-primary hover:bg-white"
              }`}
            >
              Deutsch
            </button>
          </div>

          {/* Section Selector */}
          <select
            value={activeSection}
            onChange={(e) => setActiveSection(e.target.value)}
            className="rounded-md border border-neutral-lighter px-3 py-2 text-sm outline-none focus:border-black"
          >
            {sectionKeys.map((key) => (
              <option key={key} value={key}>
                {SECTION_LABELS[key] || key}
              </option>
            ))}
          </select>

          <div className="ml-auto flex items-center gap-3">
            <button
              onClick={handleSaveClick}
              disabled={saving}
              className="rounded-md bg-black px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-darker disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
            {saved && (
              <span className="text-sm text-green-600">Saved!</span>
            )}
          </div>
        </div>
      </div>

      {/* Content Fields */}
      <div className="rounded-lg border border-border-primary bg-white p-6">
        <h2 className="mb-6 text-lg font-semibold text-text-primary">
          {SECTION_LABELS[activeSection] || activeSection} ({activeLang.toUpperCase()})
        </h2>

        <div className="space-y-5">
          {Object.entries(flatDefaults).map(([fullPath, defaultValue]) => {
            const overridden = isOverridden(fullPath);
            const currentValue = getFieldValue(fullPath);
            // Label: last parts of the path (skip section prefix)
            const labelParts = fullPath.split(".");
            const label = labelParts.length > 1
              ? labelParts.slice(1).join(" > ")
              : labelParts[0];

            const isLong = typeof defaultValue === "string" && defaultValue.length > 80;

            return (
              <div key={fullPath} className="group">
                <div className="mb-1 flex items-center justify-between">
                  <label className="text-sm font-medium text-text-primary">
                    {label}
                    {overridden && (
                      <span className="ml-2 inline-block rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-700">
                        Modified
                      </span>
                    )}
                  </label>
                  {overridden && (
                    <button
                      onClick={() => handleReset(fullPath)}
                      className="text-xs text-red-500 opacity-0 transition-opacity hover:text-red-700 group-hover:opacity-100"
                    >
                      Reset to default
                    </button>
                  )}
                </div>
                {isLong ? (
                  <textarea
                    value={currentValue}
                    onChange={(e) => handleFieldChange(fullPath, e.target.value)}
                    rows={3}
                    className={`w-full rounded-md border px-3 py-2 text-sm outline-none focus:border-black ${
                      overridden
                        ? "border-blue-300 bg-blue-50/50"
                        : "border-neutral-lighter"
                    }`}
                  />
                ) : (
                  <input
                    type="text"
                    value={currentValue}
                    onChange={(e) => handleFieldChange(fullPath, e.target.value)}
                    className={`w-full rounded-md border px-3 py-2 text-sm outline-none focus:border-black ${
                      overridden
                        ? "border-blue-300 bg-blue-50/50"
                        : "border-neutral-lighter"
                    }`}
                  />
                )}
                {overridden && typeof defaultValue === "string" && (
                  <p className="mt-1 text-xs text-text-secondary">
                    Default: {defaultValue.length > 100 ? defaultValue.slice(0, 100) + "..." : defaultValue}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Commit Message Modal */}
      {showCommitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <h3 className="mb-1 text-lg font-semibold text-text-primary">
              Save Changes
            </h3>
            <p className="mb-4 text-sm text-text-secondary">
              Describe what you changed so other admins can see it in the version history.
            </p>
            <input
              type="text"
              value={commitMessage}
              onChange={(e) => setCommitMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSaveConfirm()}
              placeholder="e.g. Updated hero title for German version"
              className="mb-4 w-full rounded-md border border-neutral-lighter px-3 py-2 text-sm outline-none focus:border-black"
              autoFocus
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowCommitModal(false)}
                className="rounded-md border border-border-primary px-4 py-2 text-sm transition-colors hover:bg-neutral-lightest"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveConfirm}
                className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-darker"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
