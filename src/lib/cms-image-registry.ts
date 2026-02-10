export interface ImageSlot {
  id: string;
  label: string;
  page: string;
  component: string;
  defaultSrc: string;
}

export const imageRegistry: ImageSlot[] = [
  // ===== HOME PAGE =====

  // Header83 - 9 service grid images
  {
    id: "home.header83.financialPlanning",
    label: "Header - Financial Planning",
    page: "Home",
    component: "Header83",
    defaultSrc: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  },
  {
    id: "home.header83.investmentEtfs",
    label: "Header - Investment & ETFs",
    page: "Home",
    component: "Header83",
    defaultSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
  },
  {
    id: "home.header83.retirementPlanning",
    label: "Header - Retirement Planning",
    page: "Home",
    component: "Header83",
    defaultSrc: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80",
  },
  {
    id: "home.header83.insuranceAnalysis",
    label: "Header - Insurance Analysis",
    page: "Home",
    component: "Header83",
    defaultSrc: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
  },
  {
    id: "home.header83.careerCoaching",
    label: "Header - Career Coaching",
    page: "Home",
    component: "Header83",
    defaultSrc: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
  },
  {
    id: "home.header83.taxOptimization",
    label: "Header - Tax Optimization",
    page: "Home",
    component: "Header83",
    defaultSrc: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=800&q=80",
  },
  {
    id: "home.header83.salaryNegotiation",
    label: "Header - Salary Negotiation",
    page: "Home",
    component: "Header83",
    defaultSrc: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=800&q=80",
  },
  {
    id: "home.header83.internationals",
    label: "Header - Internationals",
    page: "Home",
    component: "Header83",
    defaultSrc: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
  },
  {
    id: "home.header83.sustainableInvesting",
    label: "Header - Sustainable Investing",
    page: "Home",
    component: "Header83",
    defaultSrc: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=800&q=80",
  },

  // Layout412 - Main portrait
  {
    id: "home.layout412.main",
    label: "About Section - Main Portrait",
    page: "Home",
    component: "Layout412",
    defaultSrc: "Main.png",
  },

  // Layout361 - Service cards
  {
    id: "home.layout361.finance",
    label: "Services - Finance Card",
    page: "Home",
    component: "Layout361",
    defaultSrc: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=center&q=80",
  },
  {
    id: "home.layout361.career",
    label: "Services - Career Card",
    page: "Home",
    component: "Layout361",
    defaultSrc: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop&crop=center&q=80",
  },

  // Layout16 - Personalized consulting
  {
    id: "home.layout16.consulting",
    label: "Personalized - Consulting Image",
    page: "Home",
    component: "Layout16",
    defaultSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=center&q=80",
  },

  // Layout220 - Financial services
  {
    id: "home.layout220.financial",
    label: "Financial Services Image",
    page: "Home",
    component: "Layout220",
    defaultSrc: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=800&fit=crop&crop=center&q=80",
  },

  // Stats42 - Stats section
  {
    id: "home.stats42.consultation",
    label: "Stats - Consultation",
    page: "Home",
    component: "Stats42",
    defaultSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center&q=80",
  },
  {
    id: "home.stats42.growth",
    label: "Stats - Growth",
    page: "Home",
    component: "Stats42",
    defaultSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop&crop=center&q=80",
  },

  // Testimonial17 - Avatars
  {
    id: "home.testimonial17.avatar1",
    label: "Testimonial - Avatar 1",
    page: "Home",
    component: "Testimonial17",
    defaultSrc: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face&q=80",
  },
  {
    id: "home.testimonial17.avatar2",
    label: "Testimonial - Avatar 2",
    page: "Home",
    component: "Testimonial17",
    defaultSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&q=80",
  },
  {
    id: "home.testimonial17.avatar3",
    label: "Testimonial - Avatar 3",
    page: "Home",
    component: "Testimonial17",
    defaultSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&q=80",
  },

  // Contact13 - Location
  {
    id: "home.contact13.location",
    label: "Contact - Berlin Cityscape",
    page: "Home",
    component: "Contact13",
    defaultSrc: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop&crop=center&q=80",
  },

  // ===== ABOUT PAGE =====

  // Layout149 - Main portrait
  {
    id: "about.layout149.main",
    label: "About Header - Main Image",
    page: "About",
    component: "Layout149",
    defaultSrc: "/Main.jpg",
  },

  // Layout1 - Philosophy
  {
    id: "about.layout1.philosophy",
    label: "Philosophy Image",
    page: "About",
    component: "Layout1",
    defaultSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=face",
  },

  // Layout395 - Expertise cards
  {
    id: "about.layout395.financial",
    label: "Expertise - Financial",
    page: "About",
    component: "Layout395",
    defaultSrc: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop",
  },
  {
    id: "about.layout395.career",
    label: "Expertise - Career",
    page: "About",
    component: "Layout395",
    defaultSrc: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
  },
  {
    id: "about.layout395.specialisation",
    label: "Expertise - Specialisation",
    page: "About",
    component: "Layout395",
    defaultSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },

  // Layout359 - Integration
  {
    id: "about.layout359.integration",
    label: "Integration Image",
    page: "About",
    component: "Layout359",
    defaultSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },

  // Layout145 - Approach
  {
    id: "about.layout145.approach",
    label: "Approach Image",
    page: "About",
    component: "Layout145",
    defaultSrc: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=800&fit=crop",
  },

  // Layout141 - Credentials
  {
    id: "about.layout141.credentials",
    label: "Credentials Image",
    page: "About",
    component: "Layout141",
    defaultSrc: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop",
  },

  // ===== SERVICES PAGE =====

  // Layout385 - Service sections
  {
    id: "services.layout385.financial",
    label: "Services Header - Financial",
    page: "Services",
    component: "Layout385",
    defaultSrc: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
  },
  {
    id: "services.layout385.career",
    label: "Services Header - Career",
    page: "Services",
    component: "Layout385",
    defaultSrc: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
  },

  // Layout1 (services) - Finance detail
  {
    id: "services.layout1.finance",
    label: "Finance Detail Image",
    page: "Services",
    component: "Layout1",
    defaultSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
  },

  // Layout359 (services) - Career detail
  {
    id: "services.layout359.career",
    label: "Career Detail Image",
    page: "Services",
    component: "Layout359",
    defaultSrc: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=800&q=80",
  },

  // Cta40 - Consultation
  {
    id: "services.cta40.consultation",
    label: "CTA - Consultation",
    page: "Services",
    component: "Cta40",
    defaultSrc: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
  },

  // Layout349 - Service tabs (4 images)
  {
    id: "services.layout349.banking",
    label: "Services Tab - Banking",
    page: "Services",
    component: "Layout349",
    defaultSrc: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&h=600&q=80&fit=crop",
  },
  {
    id: "services.layout349.investment",
    label: "Services Tab - Investment",
    page: "Services",
    component: "Layout349",
    defaultSrc: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=600&q=80&fit=crop",
  },
  {
    id: "services.layout349.insurance",
    label: "Services Tab - Insurance",
    page: "Services",
    component: "Layout349",
    defaultSrc: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&q=80&fit=crop",
  },
  {
    id: "services.layout349.retirement",
    label: "Services Tab - Retirement",
    page: "Services",
    component: "Layout349",
    defaultSrc: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&h=600&q=80&fit=crop",
  },

  // Layout219 - Service tabs (3 images)
  {
    id: "services.layout219.transparency",
    label: "Services Tab - Transparency",
    page: "Services",
    component: "Layout219",
    defaultSrc: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=center&q=80",
  },
  {
    id: "services.layout219.personalized",
    label: "Services Tab - Personalized",
    page: "Services",
    component: "Layout219",
    defaultSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center&q=80",
  },
  {
    id: "services.layout219.partnership",
    label: "Services Tab - Partnership",
    page: "Services",
    component: "Layout219",
    defaultSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center&q=80",
  },

  // ===== SHARED =====

  // Navbar & Footer logos
  {
    id: "shared.logo",
    label: "Site Logo",
    page: "Shared",
    component: "Navbar2 / Footer3",
    defaultSrc: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
  },
];
