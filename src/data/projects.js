// Source unique des projets (FR + EN). Les statuts sont communs aux deux langues.
// status : developed | development | company | tocheck
export const projects = [
  {
    id: 'finance-pro', name: 'Finance Pro', image: '/images/projects/finance-pro.jpg', desktop: '/images/projects/desktop/finance-pro.jpg', status: 'developed',
    url: 'https://www.shalomdigitalsolutions.com/finance-pro', app: 'https://financepro.shalomdigitalsolutions.com/login',
    fr: {
      type: 'SaaS · Gestion financière',
      description: 'Solution de gestion financière pour ONG et organisations : projets, budgets, recettes, dépenses et reporting, avec un espace par organisation.',
      highlights: ['Approche multi-organisation', 'Application web (React) et desktop (Electron)', 'Tableau de bord avec tendances mensuelles', 'Réinitialisation du mot de passe par code envoyé par e-mail'],
      stack: 'React · TypeScript · Laravel · MySQL · Electron · GitHub Actions'
    },
    en: {
      type: 'SaaS · Financial management',
      description: 'Financial management solution for NGOs and organizations: projects, budgets, income, expenses and reporting, with a dedicated space per organization.',
      highlights: ['Multi-organization approach', 'Web (React) and desktop (Electron) apps', 'Dashboard with monthly trends', 'Password reset through an e-mailed code'],
      stack: 'React · TypeScript · Laravel · MySQL · Electron · GitHub Actions'
    }
  },
  {
    id: 'menstruai', name: 'MenstruAI Bénin', image: '/images/projects/menstruai-benin.jpg', desktop: '/images/projects/desktop/menstruai.jpg', status: 'development', url: 'https://menstruai.shalomdigitalsolutions.com/',
    fr: {
      type: 'FemTech · Santé numérique',
      description: 'Prototype d’une plateforme d’information sur la santé menstruelle et reproductive pour adolescentes et jeunes femmes : suivi du cycle, informations sourcées, assistant IA et orientation vers des centres de santé. Une candidature à UNICEF Femtech Ventures est en préparation ; aucune sélection ni financement n’est revendiqué.',
      highlights: ['Modules cycle, informations, assistant IA et centres de santé', 'Contenus sourcés, sans diagnostic', 'Protection des données dès la conception'],
      stack: 'React · Laravel (envisagé) · MySQL / MariaDB'
    },
    en: {
      type: 'FemTech · Digital health',
      description: 'Prototype of a menstrual and reproductive health information platform for adolescents and young women: cycle tracking, sourced information, AI assistant and referral to health centers. A UNICEF Femtech Ventures application is being prepared; no selection or funding is claimed.',
      highlights: ['Cycle, information, AI assistant and health-center modules', 'Sourced content, no diagnosis', 'Privacy by design'],
      stack: 'React · Laravel (planned) · MySQL / MariaDB'
    }
  },
  {
    id: 'shalom', name: 'Shalom Digital Solutions', image: '/images/projects/shalom-digital-solutions.jpg', desktop: '/images/projects/desktop/shalom.jpg', status: 'company',
    url: 'https://shalomdigitalsolutions.com',
    fr: {
      type: 'Entreprise · Services numériques',
      description: 'Structure de services numériques fondée et portée par Romain AKPO : sites et applications web, données, collecte digitale, formation et informatique pour entreprises, ONG et porteurs de projets.',
      highlights: ['Sites et applications sur mesure', 'Collecte digitale de données', 'Formation aux outils numériques'],
      stack: 'React · Vite · Tailwind CSS · KoboToolbox · ODK · SurveyCTO'
    },
    en: {
      type: 'Company · Digital services',
      description: 'Digital services company founded and led by Romain AKPO: websites and web applications, data, digital data collection, training and IT for businesses, NGOs and project leaders.',
      highlights: ['Custom websites and applications', 'Digital data collection', 'Digital tools training'],
      stack: 'React · Vite · Tailwind CSS · KoboToolbox · ODK · SurveyCTO'
    }
  },
  {
    id: 'mutlog', name: 'MUTLOG', image: '/images/projects/mutlog.jpg', desktop: '/images/projects/desktop/mutlog.jpg', status: 'development', url: 'https://mutlog.shalomdigitalsolutions.com/',
    fr: {
      type: 'Plateforme web · Transport & logistique',
      description: 'Plateforme mettant en relation des clients ayant des marchandises à transporter et des transporteurs proposant un camion, avec une API Laravel et un frontend React connecté à cette API.',
      highlights: ['Profils client et transporteur', 'Frontend relié à l’API (migration en cours)', 'Intégration continue : frontend et backend'],
      stack: 'React · TypeScript · Vite · Laravel · PostgreSQL · GitHub Actions'
    },
    en: {
      type: 'Web platform · Transport & logistics',
      description: 'Platform connecting customers with goods to ship and carriers offering a truck, built with a Laravel API and a React frontend connected to it.',
      highlights: ['Customer and carrier profiles', 'Frontend wired to the API (migration in progress)', 'Continuous integration: frontend and backend'],
      stack: 'React · TypeScript · Vite · Laravel · PostgreSQL · GitHub Actions'
    }
  },
  {
    id: 'mila-logistique', name: 'Mila Logistique', image: '/images/projects/mila-logistique.jpg', desktop: '/images/projects/desktop/mila-logistique.jpg', status: 'live', url: 'https://milalogistique.vercel.app/',
    fr: {
      type: 'Plateforme web · Documents professionnels',
      description: 'Plateforme de documentation et de vente en ligne de documents spécialisés en logistique, transport et douane (Cotonou), actuellement en refonte du frontend.',
      highlights: ['Catalogue de documents', 'Application installable (PWA)', 'Accueil, FAQ, contact et espace utilisateur'],
      stack: 'React · Vite · Tailwind CSS · Vercel'
    },
    en: {
      type: 'Web platform · Professional documents',
      description: 'Platform for browsing and selling specialized documents on logistics, transport and customs (Cotonou); its frontend is currently being redesigned.',
      highlights: ['Document catalogue', 'Installable app (PWA)', 'Home, FAQ, contact and user area'],
      stack: 'React · Vite · Tailwind CSS'
    }
  },
  {
    id: 'super-garage', name: 'Super-garage', image: '', status: 'development', url: 'https://askservices.wuaze.com/',
    fr: {
      type: 'Logiciel · Gestion de garage',
      description: 'Logiciel de gestion de garage : une fiche d’entretien à imprimer, une fiche à coller et des étiquettes d’entretien pour chaque intervention, avec facturation et espace d’administration.',
      highlights: ['Fiches et étiquettes d’entretien', 'Facturation et administration', 'Deux versions : Laravel + React et PHP pur (ASK Services en ligne)'],
      stack: 'Laravel · React · PHP · MySQL'
    },
    en: {
      type: 'Software · Garage management',
      description: 'Garage management software: a printable service sheet, a sticker sheet and maintenance labels for each job, with invoicing and an admin area.',
      highlights: ['Service sheets and maintenance labels', 'Invoicing and administration', 'Two versions: Laravel + React and plain PHP (ASK Services online)'],
      stack: 'Laravel · React · PHP · MySQL'
    }
  },
  {
    id: 'expertise-a-plus', name: 'Expertise A+', image: '/images/projects/expertise-a-plus.jpg', desktop: '/images/projects/desktop/expertise-a-plus.jpg', status: 'live', url: 'https://expertisea.vercel.app/',
    fr: {
      type: 'Site web · Conseil & formation',
      description: 'Site de présentation d’une offre d’assistance technique et de conseil stratégique (Afrique et développement) : renforcement des capacités, digitalisation de la collecte de données et gestion de projets.',
      highlights: ['Présentation des services et formations', 'Recherche de formations', 'Positionnement conseil'],
      stack: 'Site déployé sur Vercel · technologies à confirmer'
    },
    en: {
      type: 'Website · Consulting & training',
      description: 'Website presenting a technical assistance and strategic consulting offer (Africa and development): capacity building, digital data collection and project management.',
      highlights: ['Services and training presentation', 'Training search', 'Consulting positioning'],
      stack: 'Site deployed on Vercel · technologies to be confirmed'
    }
  }
]

// Références visibles sur le site SDS (« Ils nous font confiance »). Ne sont pas comptées comme projets.
export const references = ['BCC-Center (formateur ODK / KoboCollect, 2024)']
