export type Language = 'en' | 'de';

export interface Translations {
    // Navbar
    navbar: {
        home: string;
        about: string;
        services: string;
        more: string;
        financial: string;
        career: string;
        contact: string;
        deutsch: string;
        english: string;
    };

    // Header/Hero
    hero: {
        title: string;
        subtitle: string;
        bookConsultation: string;
        learnMore: string;
    };

    // Services
    services: {
        financialPlanning: string;
        investmentEtfs: string;
        retirementPlanning: string;
        insuranceAnalysis: string;
        careerCoaching: string;
        taxOptimization: string;
        salaryNegotiation: string;
        internationalsInGermany: string;
        sustainableInvesting: string;
    };

    // About section
    about: {
        tagline: string;
        heading: string;
        description: string;
        aboutMe: string;
        explore: string;
    };

    // Services sections
    servicesSection: {
        tagline: string;
        heading: string;
        subtitle: string;
        finance: {
            title: string;
            heading: string;
            description: string;
        };
        career: {
            title: string;
            heading: string;
            description: string;
        };
        explore: string;
        learn: string;
    };

    // Personalized section
    personalized: {
        tagline: string;
        heading: string;
        description: string;
        students: string;
        entrepreneurs: string;
        internationals: string;
        discover: string;
        explore: string;
    };

    // Financial services
    financialServices: {
        banking: {
            title: string;
            description: string;
        };
        investment: {
            title: string;
            description: string;
        };
        financing: {
            title: string;
            description: string;
        };
        insurance: {
            title: string;
            description: string;
        };
        explore: string;
        learn: string;
    };

    // Stats section
    stats: {
        heading: string;
        description: string;
        yearsConsulting: string;
        yearsDescription: string;
        clientsServed: string;
        clientsDescription: string;
        successRate: string;
        successDescription: string;
    };

    // Testimonials
    testimonials: {
        heading: string;
        subtitle: string;
        testimonial1: string;
        testimonial2: string;
        testimonial3: string;
        client1Name: string;
        client1Role: string;
        client2Name: string;
        client2Role: string;
        client3Name: string;
        client3Role: string;
    };

    // FAQ
    faq: {
        heading: string;
        subtitle: string;
        question1: string;
        answer1: string;
        question2: string;
        answer2: string;
        question3: string;
        answer3: string;
        question4: string;
        answer4: string;
        question5: string;
        answer5: string;
        readyHeading: string;
        readySubtitle: string;
        contact: string;
    };

    // CTA
    cta: {
        heading1: string;
        heading2: string;
        subtitle: string;
        bookNow: string;
        schedule: string;
    };

    // Contact
    contact: {
        tagline: string;
        heading: string;
        subtitle: string;
        email: string;
        emailDescription: string;
        phone: string;
        phoneDescription: string;
        office: string;
        officeAddress: string;
        planRoute: string;
    };

    // Footer
    footer: {
        address: string;
        contact: string;
        aboutConstantin: string;
        services: string;
        focusAreas: string;
        qualifications: string;
        contactLink: string;
        home: string;
        consulting: string;
        careerGuidance: string;
        financialPlanning: string;
        investmentStrategy: string;
        copyright: string;
        privacyPolicy: string;
        termsOfService: string;
        cookieSettings: string;
    };

    // Chat widget
    chat: {
        toggleChat: string;
        assistantName: string;
        onlineStatus: string;
        welcomeMessage: string;
        typing: string;
        placeholder: string;
        errorMessage: string;
    };

    // Common
    common: {
        readMore: string;
        getStarted: string;
        contactUs: string;
        bookNow: string;
    };
}

export const translations: Record<Language, Translations> = {
    en: {
        navbar: {
            home: 'Home',
            about: 'About',
            services: 'Services',
            more: 'More',
            financial: 'Financial',
            career: 'Career',
            contact: 'Contact',
            deutsch: 'Deutsch',
            english: 'English',
        },
        hero: {
            title: 'Build your financial future\nwith clarity and purpose',
            subtitle: 'Independent financial and career consulting tailored to your goals. Whether you\'re starting out, advancing your career, or planning for retirement, I provide transparent guidance grounded in real expertise.',
            bookConsultation: 'Book consultation',
            learnMore: 'Learn more',
        },
        services: {
            financialPlanning: 'Financial Planning',
            investmentEtfs: 'Investment & ETFs',
            retirementPlanning: 'Retirement Planning',
            insuranceAnalysis: 'Insurance Analysis',
            careerCoaching: 'Career Coaching',
            taxOptimization: 'Tax Optimization',
            salaryNegotiation: 'Salary Negotiation',
            internationalsInGermany: 'Internationals in Germany',
            sustainableInvesting: 'Sustainable Investing',
        },
        about: {
            tagline: 'Trusted',
            heading: 'Who I am and what I do',
            description: 'I work with students, professionals, and internationals to build financial stability and advance their careers. My approach combines practical expertise with straightforward communication, cutting through complexity to reveal what matters most for your future.',
            aboutMe: 'About me',
            explore: 'Explore',
        },
        servicesSection: {
            tagline: 'Services',
            heading: 'Two paths to success',
            subtitle: 'Financial guidance and career coaching, working together',
            finance: {
                title: 'Finance',
                heading: 'Financial consulting for your secure future',
                description: 'Personal planning, investment strategies, retirement guidance, insurance analysis, and tax-efficient structuring',
            },
            career: {
                title: 'Career',
                heading: 'Coaching to advance your professional path',
                description: 'Salary negotiation, CV reviews, job search strategy, and interview preparation tailored to your goals',
            },
            explore: 'Explore',
            learn: 'Learn',
        },
        personalized: {
            tagline: 'Personalised',
            heading: 'Consulting shaped around your circumstances',
            description: 'Whether you\'re a student navigating your first steps, a professional seeking advancement, or an international relocating to Germany, I craft strategies that fit your unique situation and ambitions.',
            students: 'Students and young professionals',
            entrepreneurs: 'Entrepreneurs and freelancers',
            internationals: 'Internationals relocating to Germany',
            discover: 'Discover',
            explore: 'Explore',
        },
        financialServices: {
            banking: {
                title: 'Banking and accounts',
                description: 'Guidance on accounts, cards, and banking solutions suited to your needs',
            },
            investment: {
                title: 'Investment and wealth',
                description: 'ETF strategies and ethical investing for long-term asset growth and sustainability',
            },
            financing: {
                title: 'Financing and mortgages',
                description: 'Real estate, home loans, and professional practice financing with transparent terms',
            },
            insurance: {
                title: 'Insurance and protection',
                description: 'Liability, health, and disability coverage analysis to safeguard your future',
            },
            explore: 'Explore',
            learn: 'Learn',
        },
        stats: {
            heading: 'Results built on experience and trust',
            description: 'Over a decade of independent consulting work across Germany. Helping clients navigate financial decisions and career transitions with clarity. Real outcomes from straightforward guidance.',
            yearsConsulting: 'Years consulting',
            yearsDescription: 'Independent financial and career guidance',
            clientsServed: 'Clients served',
            clientsDescription: 'Individuals and families guided',
            successRate: 'Success rate',
            successDescription: 'Client satisfaction and goal achievement',
        },
        testimonials: {
            heading: 'What clients say',
            subtitle: 'Real voices from those who\'ve worked with Constantin',
            testimonial1: 'Constantin helped me understand my finances in a way that actually made sense. No jargon, just clear strategy.',
            testimonial2: 'His career coaching got me a 15% salary increase. He knew exactly what to say in negotiations.',
            testimonial3: 'Moving to Germany felt overwhelming until Constantin mapped out my finances and job prospects. Invaluable.',
            client1Name: 'Sarah Mueller',
            client1Role: 'Student, Berlin',
            client2Name: 'Marcus Hoffmann',
            client2Role: 'Software engineer, Munich',
            client3Name: 'Elena Rossi',
            client3Role: 'International professional, Hamburg',
        },
        faq: {
            heading: 'Questions',
            subtitle: 'Answers to what matters most when starting your financial and career journey',
            question1: 'Who should seek consulting?',
            answer1: 'Students building their first financial foundation, young professionals planning their careers, internationals navigating Germany\'s financial system, and anyone seeking clarity on long-term strategy. There\'s no minimum income or complexity required--just a genuine interest in understanding your situation better.',
            question2: 'How does financial consulting work?',
            answer2: 'We start with a thorough assessment of your current position, goals, and constraints. From there, I develop a tailored strategy covering banking, investments, insurance, and tax efficiency. Regular reviews ensure your plan stays aligned with your life as it changes.',
            question3: 'What about career coaching?',
            answer3: 'Career coaching addresses salary negotiation, CV optimisation, job search strategy, and interview preparation. I work with you to identify your strengths, clarify your direction, and build confidence in professional conversations. It\'s practical, focused work.',
            question4: 'Can you help internationals?',
            answer4: 'Yes. I specialise in guiding internationals through Germany\'s financial landscape, from opening bank accounts to understanding pension schemes and tax obligations. Relocating is complex; I make it manageable.',
            question5: 'How much does consulting cost?',
            answer5: 'Fees vary based on the scope and complexity of your situation. I\'m transparent about costs upfront. Many clients find the investment pays for itself through better financial decisions and career outcomes.',
            readyHeading: 'Ready to begin?',
            readySubtitle: 'Get in touch to discuss your situation',
            contact: 'Contact',
        },
        cta: {
            heading1: 'Start your consultation today',
            heading2: 'Next steps await',
            subtitle: 'Book a time that works for you and let\'s discuss your financial and career goals',
            bookNow: 'Book now',
            schedule: 'Schedule',
        },
        contact: {
            tagline: 'Reach out',
            heading: 'Get in touch',
            subtitle: 'Based in Berlin with clients across Germany and beyond',
            email: 'Email',
            emailDescription: 'Send me a message',
            phone: 'Phone',
            phoneDescription: 'Call for a quick conversation',
            office: 'Office',
            officeAddress: 'Jean-Monnet-Straße 4, 10557 Berlin',
            planRoute: 'Plan route',
        },
        footer: {
            address: 'Address',
            contact: 'Contact',
            aboutConstantin: 'About Constantin',
            services: 'Services',
            focusAreas: 'Focus areas',
            qualifications: 'Qualifications',
            contactLink: 'Contact',
            home: 'Home',
            consulting: 'Consulting',
            careerGuidance: 'Career guidance',
            financialPlanning: 'Financial planning',
            investmentStrategy: 'Investment strategy',
            copyright: '© 2024 Constantin Nixdorff. All rights reserved.',
            privacyPolicy: 'Privacy policy',
            termsOfService: 'Terms of service',
            cookieSettings: 'Cookie settings',
        },
        chat: {
            toggleChat: 'Toggle chat',
            assistantName: 'Constantin\'s AI Assistant',
            onlineStatus: 'Online • Ready to help',
            welcomeMessage: 'Hello! I\'m Constantin\'s AI assistant. How can I help you with financial planning or career consulting today?',
            typing: 'Typing...',
            placeholder: 'Type your message...',
            errorMessage: 'Sorry, something went wrong. Please try again.',
        },
        common: {
            readMore: 'Read more',
            getStarted: 'Get started',
            contactUs: 'Contact us',
            bookNow: 'Book now',
        },
    },
    de: {
        navbar: {
            home: 'Startseite',
            about: 'Über mich',
            services: 'Leistungen',
            more: 'Mehr',
            financial: 'Finanzen',
            career: 'Karriere',
            contact: 'Kontakt',
            deutsch: 'Deutsch',
            english: 'English',
        },
        hero: {
            title: 'Bauen Sie Ihre finanzielle Zukunft\nmit Klarheit und Zielstrebigkeit auf',
            subtitle: 'Unabhängige Finanz- und Karriereberatung, die auf Ihre Ziele zugeschnitten ist. Ob Sie gerade anfangen, Ihre Karriere vorantreiben oder für den Ruhestand planen – ich biete transparente Beratung auf der Grundlage echter Expertise.',
            bookConsultation: 'Beratung buchen',
            learnMore: 'Mehr erfahren',
        },
        services: {
            financialPlanning: 'Finanzplanung',
            investmentEtfs: 'Investitionen & ETFs',
            retirementPlanning: 'Altersvorsorge',
            insuranceAnalysis: 'Versicherungsanalyse',
            careerCoaching: 'Karriere-Coaching',
            taxOptimization: 'Steueroptimierung',
            salaryNegotiation: 'Gehaltsverhandlung',
            internationalsInGermany: 'Internationale in Deutschland',
            sustainableInvesting: 'Nachhaltiges Investieren',
        },
        about: {
            tagline: 'Vertrauenswürdig',
            heading: 'Wer ich bin und was ich tue',
            description: 'Ich arbeite mit Studenten, Berufstätigen und Internationalen zusammen, um finanzielle Stabilität aufzubauen und ihre Karriere voranzutreiben. Mein Ansatz kombiniert praktische Expertise mit klarer Kommunikation und durchdringt die Komplexität, um das zu enthüllen, was für Ihre Zukunft am wichtigsten ist.',
            aboutMe: 'Über mich',
            explore: 'Entdecken',
        },
        servicesSection: {
            tagline: 'Leistungen',
            heading: 'Zwei Wege zum Erfolg',
            subtitle: 'Finanzberatung und Karriere-Coaching arbeiten zusammen',
            finance: {
                title: 'Finanzen',
                heading: 'Finanzberatung für Ihre sichere Zukunft',
                description: 'Persönliche Planung, Anlagestrategien, Altersvorsorge, Versicherungsanalyse und steuereffiziente Strukturierung',
            },
            career: {
                title: 'Karriere',
                heading: 'Coaching zur Förderung Ihres beruflichen Weges',
                description: 'Gehaltsverhandlung, Lebenslauf-Reviews, Jobsuchstrategie und Vorstellungsgesprächsvorbereitung, zugeschnitten auf Ihre Ziele',
            },
            explore: 'Entdecken',
            learn: 'Lernen',
        },
        personalized: {
            tagline: 'Personalisiert',
            heading: 'Beratung nach Ihren Umständen',
            description: 'Ob Sie Student sind und Ihre ersten Schritte machen, Berufstätiger auf der Suche nach Aufstieg oder Internationaler, der nach Deutschland umzieht – ich entwickle Strategien, die zu Ihrer einzigartigen Situation und Ihren Ambitionen passen.',
            students: 'Studenten und Berufseinsteiger',
            entrepreneurs: 'Unternehmer und Freelancer',
            internationals: 'Internationale, die nach Deutschland umziehen',
            discover: 'Entdecken',
            explore: 'Erkunden',
        },
        financialServices: {
            banking: {
                title: 'Banking und Konten',
                description: 'Beratung zu Konten, Karten und Banklösungen, die zu Ihren Bedürfnissen passen',
            },
            investment: {
                title: 'Investitionen und Vermögen',
                description: 'ETF-Strategien und ethisches Investieren für langfristiges Vermögenswachstum und Nachhaltigkeit',
            },
            financing: {
                title: 'Finanzierung und Hypotheken',
                description: 'Immobilien, Wohnungsbaudarlehen und Praxisfinanzierung mit transparenten Konditionen',
            },
            insurance: {
                title: 'Versicherung und Schutz',
                description: 'Haftpflicht-, Kranken- und Berufsunfähigkeitsversicherungsanalyse zum Schutz Ihrer Zukunft',
            },
            explore: 'Entdecken',
            learn: 'Lernen',
        },
        stats: {
            heading: 'Ergebnisse basierend auf Erfahrung und Vertrauen',
            description: 'Über ein Jahrzehnt unabhängige Beratungsarbeit in ganz Deutschland. Ich helfe Kunden dabei, finanzielle Entscheidungen und Karriereübergänge mit Klarheit zu navigieren. Echte Ergebnisse durch klare Beratung.',
            yearsConsulting: 'Jahre Beratung',
            yearsDescription: 'Unabhängige Finanz- und Karriereberatung',
            clientsServed: 'Betreute Kunden',
            clientsDescription: 'Begleitete Einzelpersonen und Familien',
            successRate: 'Erfolgsquote',
            successDescription: 'Kundenzufriedenheit und Zielerreichung',
        },
        testimonials: {
            heading: 'Was Kunden sagen',
            subtitle: 'Echte Stimmen von denen, die mit Constantin gearbeitet haben',
            testimonial1: 'Constantin half mir, meine Finanzen auf eine Weise zu verstehen, die tatsächlich Sinn machte. Kein Fachjargon, nur klare Strategie.',
            testimonial2: 'Sein Karriere-Coaching brachte mir eine 15%ige Gehaltserhöhung. Er wusste genau, was in Verhandlungen zu sagen war.',
            testimonial3: 'Der Umzug nach Deutschland fühlte sich überwältigend an, bis Constantin meine Finanzen und Jobaussichten kartierte. Unbezahlbar.',
            client1Name: 'Sarah Mueller',
            client1Role: 'Studentin, Berlin',
            client2Name: 'Marcus Hoffmann',
            client2Role: 'Software-Ingenieur, München',
            client3Name: 'Elena Rossi',
            client3Role: 'Internationale Fachkraft, Hamburg',
        },
        faq: {
            heading: 'Fragen',
            subtitle: 'Antworten auf das, was am wichtigsten ist, wenn Sie Ihre finanzielle und berufliche Reise beginnen',
            question1: 'Wer sollte eine Beratung suchen?',
            answer1: 'Studenten, die ihr erstes finanzielles Fundament aufbauen, Berufstätige, die ihre Karriere planen, Internationale, die sich in Deutschlands Finanzsystem zurechtfinden, und alle, die Klarheit über langfristige Strategien suchen. Es gibt kein Mindesteinkommen oder erforderliche Komplexität – nur ein echtes Interesse daran, Ihre Situation besser zu verstehen.',
            question2: 'Wie funktioniert Finanzberatung?',
            answer2: 'Wir beginnen mit einer gründlichen Bewertung Ihrer aktuellen Position, Ziele und Einschränkungen. Von dort aus entwickle ich eine maßgeschneiderte Strategie für Banking, Investitionen, Versicherungen und Steuereffizienz. Regelmäßige Überprüfungen stellen sicher, dass Ihr Plan mit Ihrem sich verändernden Leben im Einklang bleibt.',
            question3: 'Was ist mit Karriere-Coaching?',
            answer3: 'Karriere-Coaching behandelt Gehaltsverhandlungen, Lebenslauf-Optimierung, Jobsuchstrategie und Vorstellungsgesprächsvorbereitung. Ich arbeite mit Ihnen zusammen, um Ihre Stärken zu identifizieren, Ihre Richtung zu klären und Vertrauen in berufliche Gespräche aufzubauen. Es ist praktische, fokussierte Arbeit.',
            question4: 'Können Sie Internationalen helfen?',
            answer4: 'Ja. Ich spezialisiere mich darauf, Internationale durch Deutschlands Finanzlandschaft zu führen, vom Eröffnen von Bankkonten bis zum Verstehen von Rentensystemen und Steuerpflichten. Umziehen ist komplex; ich mache es handhabbar.',
            question5: 'Wie viel kostet die Beratung?',
            answer5: 'Die Gebühren variieren je nach Umfang und Komplexität Ihrer Situation. Ich bin transparent über die Kosten im Voraus. Viele Kunden stellen fest, dass sich die Investition durch bessere finanzielle Entscheidungen und Karriereergebnisse auszahlt.',
            readyHeading: 'Bereit anzufangen?',
            readySubtitle: 'Nehmen Sie Kontakt auf, um Ihre Situation zu besprechen',
            contact: 'Kontakt',
        },
        cta: {
            heading1: 'Beginnen Sie heute Ihre Beratung',
            heading2: 'Die nächsten Schritte warten',
            subtitle: 'Buchen Sie einen Termin, der für Sie passt, und lassen Sie uns Ihre finanziellen und beruflichen Ziele besprechen',
            bookNow: 'Jetzt buchen',
            schedule: 'Terminieren',
        },
        contact: {
            tagline: 'Kontaktaufnahme',
            heading: 'Kontakt aufnehmen',
            subtitle: 'Mit Sitz in Berlin und Kunden in ganz Deutschland und darüber hinaus',
            email: 'E-Mail',
            emailDescription: 'Senden Sie mir eine Nachricht',
            phone: 'Telefon',
            phoneDescription: 'Rufen Sie für ein kurzes Gespräch an',
            office: 'Büro',
            officeAddress: 'Jean-Monnet-Straße 4, 10557 Berlin',
            planRoute: 'Route planen',
        },
        footer: {
            address: 'Adresse',
            contact: 'Kontakt',
            aboutConstantin: 'Über Constantin',
            services: 'Leistungen',
            focusAreas: 'Schwerpunkte',
            qualifications: 'Qualifikationen',
            contactLink: 'Kontakt',
            home: 'Startseite',
            consulting: 'Beratung',
            careerGuidance: 'Karriereberatung',
            financialPlanning: 'Finanzplanung',
            investmentStrategy: 'Anlagestrategie',
            copyright: '© 2024 Constantin Nixdorff. Alle Rechte vorbehalten.',
            privacyPolicy: 'Datenschutzrichtlinie',
            termsOfService: 'Nutzungsbedingungen',
            cookieSettings: 'Cookie-Einstellungen',
        },
        chat: {
            toggleChat: 'Chat öffnen/schließen',
            assistantName: 'Constantins KI-Assistent',
            onlineStatus: 'Online • Bereit zu helfen',
            welcomeMessage: 'Hallo! Ich bin Constantins KI-Assistent. Wie kann ich Ihnen heute bei der Finanzplanung oder Karriereberatung helfen?',
            typing: 'Schreibt...',
            placeholder: 'Nachricht eingeben...',
            errorMessage: 'Entschuldigung, etwas ist schief gelaufen. Bitte versuchen Sie es erneut.',
        },
        common: {
            readMore: 'Weiterlesen',
            getStarted: 'Loslegen',
            contactUs: 'Kontaktieren Sie uns',
            bookNow: 'Jetzt buchen',
        },
    },
};