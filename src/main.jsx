import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail,
  Menu, X, Code2, Database, Layers3, Rocket, ShieldCheck, Globe2,
  BriefcaseBusiness, FileText, ExternalLink, Download, CheckCircle2
} from 'lucide-react'
import { projects, references } from './data/projects.js'
import './styles.css'

const copy = {
  fr: {
    nav: ['À propos', 'Expertises', 'Projets', 'Parcours', 'Contact'],
    eyebrow: 'Portfolio professionnel · Bénin',
    titleA: 'Je conçois des',
    titleB: 'solutions numériques',
    titleC: 'qui répondent à des problèmes réels.',
    intro: 'Gestionnaire de projets de développement social et développeur web, je combine suivi-évaluation, gestion des données et conception de solutions numériques. Je suis également promoteur de Shalom Digital Solutions.',
    ctaProjects: 'Découvrir mes projets',
    ctaContact: 'Me contacter',
    availability: 'Ouvert aux collaborations professionnelles',
    aboutKicker: '01 — À PROPOS',
    aboutTitle: 'De l’analyse du besoin à la mise en production.',
    aboutText: 'Mon parcours associe coordination de projets sociaux, supervision communautaire, suivi-évaluation et conception d’outils numériques. J’interviens aussi dans la formation des équipes à la collecte digitale et dans le développement de plateformes web adaptées aux besoins des organisations.',
    aboutNote: 'Depuis juil 2021 à Shalom Digital Solutions · Basé au Bénin · Ouvert aux collaborations internationales',
    figures: [['3+', 'ans de suivi de projets à l’ONG E-Vie'], ['6', 'départements couverts : Alibori, Borgou, Plateau, Ouémé, Couffo, Zou'], ['7', 'projets et plateformes présentés ci-dessous'], ['15', 'attestations et certificats']],
    figuresNote: 'Chiffres issus de mon CV (16 mai 2026), du dossier de preuves et du contenu de ce portfolio.',
    expertiseKicker: '02 — EXPERTISES',
    expertiseTitle: 'Des compétences au service de solutions concrètes.',
    expertise: [
      ['Développement logiciel', 'Applications web, interfaces réactives, API REST et logiciels de gestion.', 'React · TypeScript · PHP · Laravel'],
      ['Architecture & données', 'Conception de bases de données, structuration des données et architectures frontend/backend.', 'MySQL · MariaDB · PostgreSQL'],
      ['DevOps & déploiement', 'Automatisation des contrôles, intégration continue, déploiement et suivi technique.', 'Git · GitHub Actions · Docker'],
      ['Digitalisation', 'Transformation de processus, collecte de données et accompagnement des organisations.', 'KoboToolbox · ODK · SurveyCTO'],
      ['Gestion de projets', 'Analyse des besoins, planification, documentation et coordination de réalisations numériques.', 'Cadrage · Suivi · Documentation'],
      ['Innovation à impact', 'Conception de produits numériques répondant à des enjeux sociaux et organisationnels.', 'FinTech · FemTech · Santé numérique']
    ],
    stackTitle: 'Environnement technique',
    projectsKicker: '03 — PROJETS SÉLECTIONNÉS',
    projectsTitle: 'Produits numériques, plateformes et réalisations documentées.',
    projectStatus: { developed: 'Produit développé', development: 'En développement', company: 'Entreprise / activité', live: 'En ligne', tocheck: 'Contribution à confirmer' },
    projectDetails: 'Voir le projet',
    noDemo: 'Démo publique non disponible',
    openApp: 'Ouvrir l’application',
    referencesLabel: 'Références visibles sur le site SDS : ',
    journeyKicker: '04 — PARCOURS',
    experienceTitle: 'Expériences professionnelles',
    experiences: [
      ['juil 2021 – aujourd’hui', 'Shalom Digital Solutions', 'Fondateur & Président Directeur Général (6+ ans) : accompagnement, suivi-conseil, conception de bases de données, structuration des données et architectures frontend/backend, applications web, interfaces réactives, API REST et logiciels de gestion, transformation de processus, collecte de données et accompagnement des organisations.'],
      ['Avr. 2023 – juin 2026', 'ONG Espoir d’une Vie (E-Vie)', 'Assistant gestionnaire des données et du suivi des activités (attestation du 11 juil. 2024) ; la responsabilité du suivi des activités du projet. Planification, supervision communautaire, santé sexuelle et reproductive des adolescent(e)s et jeunes, espaces sûrs, formations ODK, KoboToolbox, Survey Solutions et Excel, rapports techniques et financiers. Zones sanitaires de l’Alibori, du Borgou, du Plateau, de l’Ouémé, du Couffo et du Zou.'],
      ['Avr. 2025 & avr.–mai 2026', 'Université d’Abomey-Calavi – Passation des marchés', 'Responsable agent de saisie : formulaire KoboToolbox pour constituer le répertoire des prestataires et fournisseurs 2025, formation des agents de saisie, extraction et finalisation sous Excel avancé.'],
      ['Juil. 2025', 'Cabinet FUTURE PLANÈTE – Projet EQUITE 2', 'Agent enquêteur (8 jours) : formation aux outils et au consentement éclairé, collecte auprès de filles, femmes, garçons et hommes, entretiens avec leaders communautaires, agents de santé et autorités locales.'],
      ['Mai–juin 2024', 'BCC-Center', 'Formateur : sessions sur la conception et la gestion d’outils numériques de collecte (ODK, KoboCollect) et Excel avancé, les 25–26 mai, 1–2 et 15–16 juin 2024 (attestation du 17 juin 2024).'],
      ['Juil.–oct. 2023', 'CRA-Agonkanmey / INRAB', 'Technicien de recherche occasionnel (Bantè et Glazoué) : essais d’efficacité biologique de pesticides en vue d’homologation, collecte, saisie et analyse des données. Trois attestations de bonne fin d’exécution (août, septembre et octobre 2023).'],
      ['Janv.–avr. & juin–sept. 2021', 'CRA-Agonkanmey / INRAB – LADC', 'Deux stages professionnels de trois mois (attestations) : phytopathologie, milieux de culture, isolement de pathogènes, inoculum et collecte de données sur sites expérimentaux.'],
      ['Mai 2018 – oct. 2019', 'ONG CODIB Bénin', 'Facilitateur du projet de renforcement des compétences des jeunes entrepreneurs (18 mois, attestation de travail du 23 oct. 2019) : accompagnement, suivi-conseil et suivi des subventions d’installation.'],
      ['Janv.–juin 2017', 'ONG CODIB Bénin', 'Stage professionnel : appui à la formation des jeunes entrepreneurs et à l’élaboration de leurs fiches de financement.']
    ],
    trainingTitle: 'Formations professionnelles sélectionnées',
    trainings: ['Campus AFD / FERDI (nov. 2024 – janv. 2025), 3 certificats : instruction de projet, de l’idée au cadre logique, suivi et évaluation d’un projet de développement.', 'D-CLIC – OIF (juil.2025 –fev. 2026) : développement web, React, HTML, CSS, JavaScript, PHP, MySQL et Git/GitHub (indiqué dans le CV).', 'BCC-Center, E-Vie ONG et IMARDOS ONG (13 janv.–17 févr. 2024) : gestion de projets sensibles au genre et à l’inclusion sociale (attestation du 22 févr. 2024).', 'IFDD / Université Senghor : droit et protection de l’environnement (2021 et 2023) ; technologies de l’environnement, 93 heures (2023).'],
    journeyTitle: 'Un profil à l’intersection de la technologie et des opérations.',
    journeyText: 'Mon parcours associe des expériences et intérêts en développement web, gestion de projets, gestion des données et accompagnement de structures. Je construis progressivement des solutions logicielles et des outils numériques orientés vers les besoins des organisations.',
    educationTitle: 'Formation',
    educationText: 'Licence 3 en Sciences de la Vie et de la Terre, Faculté des Sciences et Techniques (FAST), Université d’Abomey-Calavi. Baccalauréat série D, CEG 1 de Glazoué.',
    collaborationsTitle: 'Collaborations & ouverture',
    collaborationsText: 'Intérêt pour les collaborations techniques, les évaluations logicielles, les projets à impact et les partenariats internationaux. Les échanges exploratoires ne sont pas présentés comme des partenariats conclus.',
    languageSummary: 'Langues : français (5/5) ; anglais (3/5) ; mahi et fon (5/5 à l’oral, 3/5 en lecture et écriture) ; idaatcha (3/5 à l’oral).',
    approachKicker: '05 — MÉTHODE',
    approachTitle: 'Une démarche structurée, de bout en bout.',
    steps: [
      ['Comprendre', 'Clarifier le problème, les utilisateurs et les contraintes.'],
      ['Concevoir', 'Définir l’architecture, les données et les parcours.'],
      ['Développer', 'Construire des fonctionnalités maintenables et testables.'],
      ['Livrer', 'Tester, documenter, déployer et améliorer.']
    ],
    contactKicker: '06 — CONTACT',
    contactTitle: 'Parlons de votre prochain projet.',
    contactText: 'Pour une collaboration, une mission de développement, un projet de digitalisation ou un échange technique, vous pouvez me contacter via mes profils professionnels.',
    linkedin: 'Profil LinkedIn',
    github: 'Profil GitHub',
    email: 'romainakpo86@gmail.com',
    footer: 'Portfolio personnel de Romain AKPO. Les informations de projet sont présentées selon leur état réel et peuvent être actualisées.',
    backTop: 'Retour en haut',
    language: 'EN'
  },
  en: {
    nav: ['About', 'Expertise', 'Projects', 'Background', 'Contact'],
    eyebrow: 'Professional portfolio · Benin',
    titleA: 'I build',
    titleB: 'digital solutions',
    titleC: 'that address real-world problems.',
    intro: 'Social development project manager and web developer, combining project monitoring and evaluation, data management and digital solution design. I also lead Shalom Digital Solutions.',
    ctaProjects: 'Explore my projects',
    ctaContact: 'Get in touch',
    availability: 'Open to professional collaborations',
    aboutKicker: '01 — ABOUT',
    aboutTitle: 'From understanding the need to deployment.',
    aboutText: 'My background combines social project coordination, community supervision, monitoring and evaluation, and digital tool design. I also support teams in digital data collection and develop web platforms tailored to organizational needs.',
    aboutNote: 'With E-Vie NGO since April 2023 · Based in Benin · Open to international collaboration',
    figures: [['3+', 'years of project monitoring at E-Vie NGO (since April 2023)'], ['6', 'departments covered: Alibori, Borgou, Plateau, Ouémé, Couffo, Zou'], ['7', 'projects and platforms presented below'], ['15', 'attestations and certificates in the evidence file']],
    figuresNote: 'Figures taken from the CV (16 May 2026), the evidence file and this portfolio’s content.',
    expertiseKicker: '02 — EXPERTISE',
    expertiseTitle: 'Skills applied to practical solutions.',
    expertise: [
      ['Software development', 'Web applications, responsive interfaces, REST APIs and management software.', 'React · TypeScript · PHP · Laravel'],
      ['Architecture & data', 'Database design, data structuring and frontend/backend architectures.', 'MySQL · MariaDB · PostgreSQL'],
      ['DevOps & deployment', 'Automated checks, continuous integration, deployment and technical monitoring.', 'Git · GitHub Actions · Docker'],
      ['Digital transformation', 'Process digitization, data collection and organizational support.', 'KoboToolbox · ODK · SurveyCTO'],
      ['Project management', 'Requirements analysis, planning, documentation and coordination of digital projects.', 'Scoping · Delivery · Documentation'],
      ['Impact-driven innovation', 'Digital products designed to address social and organizational challenges.', 'FinTech · FemTech · Digital health']
    ],
    stackTitle: 'Technical environment',
    projectsKicker: '03 — SELECTED PROJECTS',
    projectsTitle: 'Digital products, platforms and documented work.',
    projectStatus: { developed: 'Developed product', development: 'In development', company: 'Company / activity', live: 'Live', tocheck: 'Contribution to confirm' },
    projectDetails: 'View project',
    noDemo: 'No public demo yet',
    openApp: 'Open the app',
    referencesLabel: 'References shown on the SDS website: ',
    journeyKicker: '04 — BACKGROUND',
    experienceTitle: 'Professional experience',
    experiences: [
      ['Apr 2023 – Present', 'Espoir d’une Vie NGO (E-Vie)', 'Data and activity monitoring assistant (certificate of 11 Jul 2024); the CV also describes responsibility for project activity monitoring. Planning, community supervision, adolescent and youth sexual and reproductive health, safe spaces, ODK, KoboToolbox, Survey Solutions and Excel training, technical and financial reports. Health zones of Alibori, Borgou, Plateau, Ouémé, Couffo and Zou.'],
      ['Apr 2025 & Apr–May 2026', 'University of Abomey-Calavi – Procurement Unit', 'Data-entry team lead: KoboToolbox form to build the 2025 directory of suppliers and service providers, training of data-entry agents, extraction and finalization with advanced Excel.'],
      ['Jul 2025', 'FUTURE PLANÈTE – EQUITE 2 project', 'Field enumerator (8 days): training on tools and informed consent, data collection with girls, women, boys and men, interviews with community leaders, health workers and local authorities.'],
      ['May–Jun 2024', 'BCC-Center', 'Trainer: sessions on designing and managing digital data-collection tools (ODK, KoboCollect) and advanced Excel, on 25–26 May, 1–2 and 15–16 June 2024 (certificate of 17 Jun 2024).'],
      ['Jul–Oct 2023', 'CRA-Agonkanmey / INRAB', 'Occasional research technician (Bantè and Glazoué): biological efficacy trials of pesticides for registration, data collection, entry and analysis. Three completion certificates (August, September and October 2023).'],
      ['Jan–Apr & Jun–Sep 2021', 'CRA-Agonkanmey / INRAB – LADC', 'Two three-month professional internships (certificates): phytopathology, culture media, pathogen isolation, inoculum and field data collection.'],
      ['May 2018 – Oct 2019', 'CODIB Benin NGO', 'Project facilitator for the young entrepreneurs skills program (18 months, work certificate of 23 Oct 2019): support, coaching and follow-up of start-up grants.'],
      ['Jan–Jun 2017', 'CODIB Benin NGO', 'Professional internship: support to young entrepreneurs training and preparation of their financing plans.']
    ],
    trainingTitle: 'Selected professional training',
    trainings: ['AFD Campus / FERDI (Nov 2024 – Jan 2025), 3 certificates: project appraisal, from idea to logical framework, monitoring and evaluation of a development project.', 'OIF D-CLIC (Jul–Sep 2025): web development, React, HTML, CSS, JavaScript, PHP, MySQL and Git/GitHub (stated in the CV).', 'BCC-Center, E-Vie NGO and IMARDOS NGO (13 Jan–17 Feb 2024): gender-sensitive and socially inclusive project management (certificate of 22 Feb 2024).', 'IFDD / Senghor University: environmental law and protection (2021 and 2023); environmental technologies, 93 hours (2023).'],
    journeyTitle: 'A profile at the intersection of technology and operations.',
    journeyText: 'My background brings together web development, project management, data management and organizational support. I progressively build software solutions and digital tools around real organizational needs.',
    educationTitle: 'Education',
    educationText: "Bachelor's-level studies (Licence 3) in Life and Earth Sciences, Faculty of Sciences and Technology (FAST), University of Abomey-Calavi (2019–2020). Baccalaureate, Science track D, CEG 1 Glazoué (2014–2015).",
    collaborationsTitle: 'Collaboration & openness',
    collaborationsText: 'Interested in technical collaboration, software evaluation, impact-driven projects and international partnerships. Exploratory discussions are not presented as completed partnerships.',
    languageSummary: 'Languages: French (5/5); English (3/5); Mahi and Fon (5/5 speaking, 3/5 reading and writing); Idaatcha (3/5 speaking). Self-reported scale in the CV, from 1 to 5.',
    approachKicker: '05 — APPROACH',
    approachTitle: 'A structured end-to-end process.',
    steps: [
      ['Understand', 'Clarify the problem, users and constraints.'],
      ['Design', 'Define architecture, data and user journeys.'],
      ['Build', 'Develop maintainable and testable features.'],
      ['Deliver', 'Test, document, deploy and improve.']
    ],
    contactKicker: '06 — CONTACT',
    contactTitle: 'Let’s discuss your next project.',
    contactText: 'For collaboration, software development, digital transformation or a technical discussion, feel free to reach out through my professional profiles.',
    linkedin: 'LinkedIn profile',
    github: 'GitHub profile',
    email: 'romainakpo86@gmail.com',
    footer: 'Personal portfolio of Romain AKPO. Project information reflects the current status and may be updated.',
    backTop: 'Back to top',
    language: 'FR'
  }
}

const skills = ['React', 'JavaScript', 'PHP', 'Laravel', 'REST API', 'MySQL', 'MariaDB', 'PostgreSQL', 'Electron', 'TypeScript', 'Vite', 'Tailwind CSS', 'Git', 'GitHub Actions', 'Docker', 'Vercel', 'Render', 'Cloudflare R2', 'Supabase', 'WordPress', 'KoboToolbox', 'ODK', 'SurveyCTO']

function App() {
  const [lang, setLang] = useState('fr')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = copy[lang]
  useEffect(() => { document.documentElement.lang = lang }, [lang])
  const ids = ['about', 'expertise', 'projects', 'background', 'contact']
  const icons = [Code2, Database, Rocket, BriefcaseBusiness, Layers3, ShieldCheck]
  const projectStatusClass = (status) => status === 'developed' || status === 'live' ? 'status-green' : status === 'development' ? 'status-amber' : status === 'tocheck' ? 'status-grey' : 'status-blue'

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Romain AKPO home">
          <span className="brand-mark">RA</span><span>ROMAIN <b>AKPO</b></span>
        </a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {t.nav.map((label, i) => <a key={label} href={`#${ids[i]}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <div className="top-actions">
          <button className="lang-toggle" onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')} aria-label="Change language">{t.language}</button>
          <a className="nav-contact" href="#contact">{t.ctaContact}<ArrowUpRight size={15}/></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot"/>{t.eyebrow}</div>
            <h1>{t.titleA}<br/><span>{t.titleB}</span><br/>{t.titleC}</h1>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">{t.ctaProjects}<ArrowUpRight size={17}/></a>
              <a className="button button-quiet" href="#contact">{t.ctaContact}<ArrowDownRight size={17}/></a>
            </div>
            <div className="availability"><span className="availability-dot"/>{t.availability}</div>
          </div>
          <div className="hero-visual">
            <div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/>
            <div className="hero-card"><img className="profile-photo" src="/images/profile/romain-akpo-professional.png" alt="Portrait professionnel de Romain AKPO" />
              <div className="hero-card-top"><span>RA / PROFILE</span><span>BENIN · 2026</span></div>
              <div className="monogram">RA<span>.</span></div>
              <div className="hero-card-bottom"><b>SOFTWARE & DIGITAL SOLUTIONS</b><span>Build · Improve · Deliver</span></div>
            </div>
            <div className="floating-tag tag-code"><Code2 size={16}/> Software engineering</div>
            <div className="floating-tag tag-data"><Database size={16}/> Data & systems</div>
            <div className="hero-index">01 <i/> 06</div>
          </div>
        </section>

        <section id="about" className="section-wrap section-block">
          <div className="section-label">{t.aboutKicker}</div>
          <div className="about-grid">
            <h2>{t.aboutTitle}</h2>
            <div><p className="large-copy">{t.aboutText}</p><p className="muted-note"><Globe2 size={16}/>{t.aboutNote}</p></div>
          </div>
          <div className="figures">{t.figures.map(f => <div className="figure" key={f[1]}><b>{f[0]}</b><span>{f[1]}</span></div>)}</div>
          <p className="figures-note">{t.figuresNote}</p>
        </section>

        <section id="expertise" className="section-wrap section-block">
          <div className="section-label">{t.expertiseKicker}</div>
          <h2 className="section-heading">{t.expertiseTitle}</h2>
          <div className="expertise-grid">
            {t.expertise.map((item, i) => {
              const Icon = icons[i]
              return <article className="expertise-card" key={item[0]}>
                <div className="expertise-icon"><Icon size={21}/></div>
                <h3>{item[0]}</h3><p>{item[1]}</p><span className="tech-line">{item[2]}</span>
              </article>
            })}
          </div>
          <div className="stack-panel"><span>{t.stackTitle}</span><div className="stack-list">{skills.map(s => <span key={s}>{s}</span>)}</div></div>
        </section>

        <section id="projects" className="section-wrap section-block projects-section">
          <div className="section-label">{t.projectsKicker}</div>
          <h2 className="section-heading">{t.projectsTitle}</h2>
          <div className="projects-list">
            {projects.map((p, i) => { const c = p[lang]; return <article className="project-card" key={p.id}>
              <div className={`project-number ${i === 0 ? 'gold-number' : ''}`}>0{i+1}</div>
              <div className="project-main">
                {p.image ? <img className="project-evidence" src={p.desktop || p.image} alt={p.name} loading="lazy" onError={(e) => { if (e.currentTarget.src.indexOf(p.image) === -1) e.currentTarget.src = p.image }} /> : <div className="project-placeholder" aria-hidden="true">{p.name.slice(0, 2).toUpperCase()}</div>}
                <div className="project-meta"><span>{c.type}</span><span className={`status ${projectStatusClass(p.status)}`}>{t.projectStatus[p.status]}</span></div>
                <h3>{p.name}</h3><p>{c.description}</p>
                <ul>{c.highlights.map(h => <li key={h}><CheckCircle2 size={15}/>{h}</li>)}</ul>
                <div className="project-stack">{c.stack}</div>
              </div>
              <div className="project-link">{p.url ? <a href={p.url} target="_blank" rel="noopener noreferrer">{t.projectDetails}<ArrowUpRight size={17}/></a> : <span className="muted-inline">{t.noDemo}</span>}{p.app && <a href={p.app} target="_blank" rel="noopener noreferrer">{t.openApp}<ArrowUpRight size={17}/></a>}</div>
            </article> })}
          </div>
          <p className="references-note">{t.referencesLabel}{references.join(', ')}</p>
        </section>

        <section id="background" className="section-wrap section-block background-section">
          <div className="section-label">{t.journeyKicker}</div>
          <h2 className="section-heading">{t.journeyTitle}</h2>
          <p className="background-intro">{t.journeyText}</p>
          <div className="background-grid">
            <article><div className="small-icon"><BriefcaseBusiness size={19}/></div><h3>{t.educationTitle}</h3><p>{t.educationText}</p></article>
            <article><div className="small-icon"><Globe2 size={19}/></div><h3>{t.collaborationsTitle}</h3><p>{t.collaborationsText}</p></article>
          </div>
          <div className="experience-block">
            <h3>{t.experienceTitle}</h3>
            <div className="experience-list">{t.experiences.map((e,i)=><article className="experience-item" key={i}><span>{e[0]}</span><div><b>{e[1]}</b><p>{e[2]}</p></div></article>)}</div>
            <h3 className="training-heading">{t.trainingTitle}</h3>
            <ul className="training-list">{t.trainings.map((x,i)=><li key={i}>{x}</li>)}</ul><p className="language-summary">{t.languageSummary}</p>
          </div>
        </section>

        <section className="section-wrap section-block process-section">
          <div className="section-label">{t.approachKicker}</div>
          <h2 className="section-heading">{t.approachTitle}</h2>
          <div className="process-grid">{t.steps.map((s,i)=><div className="process-step" key={s[0]}><span>0{i+1}</span><h3>{s[0]}</h3><p>{s[1]}</p></div>)}</div>
        </section>

        <section id="contact" className="contact-section">
          <div className="section-wrap contact-inner">
            <div className="section-label light-label">{t.contactKicker}</div>
            <div className="contact-grid"><div><h2>{t.contactTitle}</h2><p>{t.contactText}</p></div>
              <div className="contact-links">
                <a href="https://www.linkedin.com/in/romain-akpo-2ab8802a8" target="_blank" rel="noopener noreferrer"><Linkedin/>{t.linkedin}<ArrowUpRight size={17}/></a>
                <a href="https://github.com/romaina229" target="_blank" rel="noopener noreferrer"><Github/>{t.github}<ArrowUpRight size={17}/></a>
                <a href="mailto:romainakpo86@gmail.com"><Mail/>{t.email}<ArrowUpRight size={17}/></a>
                <a href="https://shalomdigitalsolutions.com" target="_blank" rel="noopener noreferrer"><Globe2/>Shalom Digital Solutions<ArrowUpRight size={17}/></a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer section-wrap"><a className="brand footer-brand" href="#top"><span className="brand-mark">RA</span><span>ROMAIN <b>AKPO</b></span></a><p>{t.footer}</p><a href="#top" className="back-top">{t.backTop}<ArrowUpRight size={14}/></a></footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>)
