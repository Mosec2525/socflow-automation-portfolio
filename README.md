# SOCFlow Automation Portfolio

A portfolio site for two tested n8n SOC L1 projects: Wazuh Alert Triage and Microsoft Sentinel Incident Triage.

## Run locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Pages

- `/` — main landing page
- `/automations` — project index
- `/automations/wazuh` — Wazuh case study
- `/automations/microsoft-sentinel` — Microsoft Sentinel case study

## Portfolio links

Set your GitHub repository URL before deployment:

```bash
NEXT_PUBLIC_GITHUB_URL=https://github.com/Mosec2525/socflow-automation-portfolio
```

The public site links to the tested n8n workflow editors. Webhook tokens and
credentials are intentionally excluded from the client and repository.
