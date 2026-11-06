# Finance Pro — Project case study

**Category:** SaaS · Financial management  
**Organization:** Shalom Digital Solutions  
**Status:** Product developed; confirm current production status and publicly demonstrable features before publication.  
**Public page:** https://www.shalomdigitalsolutions.com/finance-pro

## Problem

NGOs and organizations need reliable ways to manage project budgets, income, expenses, supporting documents and financial reporting. Finance Pro is designed to centralize these activities and improve traceability.

## Product scope

The product has been described as covering:
- Organization and user management, with a multi-organization / multi-tenant approach.
- Projects and budget tracking.
- Income and expense management.
- Financial documents and reporting.
- SYSCOHADA-oriented accounting requirements.
- XOF and XAF currency support.
- Offline-first product direction.
- Web and desktop delivery.

**Publication note:** Only list features that are implemented and testable in the public product. Mark planned capabilities as roadmap items.

## Technical architecture

Reported stack and components:
- Frontend: React.
- Backend: Laravel API.
- Desktop client: Electron.
- Data: MySQL in local development; PostgreSQL has also been explored for hosted environments.
- Storage: Cloudflare R2 and/or Supabase, depending on the environment and feature.
- CI/CD: GitHub Actions.
- Hosting: Render and Vercel have been used in deployment experiments.

Confirm the current production topology before presenting it as the definitive architecture.

## Engineering work to document

- Frontend/backend repository separation.
- API authentication and authorization.
- Database design and tenant isolation.
- Automated backend and frontend checks.
- Desktop packaging and update distribution.
- Storage configuration and deployment workflows.
- Performance profiling and optimization.

## Metrics — evidence required

Previous project notes mention more than 86 deployments and 256 backend commits plus 256 frontend commits. These figures must be checked against GitHub and deployment history, with a date and clear definition, before appearing as public metrics.

Do not publish performance figures without a reproducible test method, environment and date.

## Evidence to add

- [ ] Product screenshots with test or anonymized data.
- [ ] Architecture diagram.
- [ ] Public demo URL, if available.
- [ ] Redacted API documentation.
- [ ] CI workflow screenshot or public workflow link.
- [ ] Release history or deployment evidence.
- [ ] Short product demonstration video.
- [ ] Feature list reviewed against the current production version.

## Confidentiality

Do not expose customer financial data, private repositories, API credentials, database dumps, internal URLs or proprietary implementation details that are not approved for publication.
