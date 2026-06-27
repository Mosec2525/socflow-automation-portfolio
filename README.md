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

## n8n workflow files

Workflow JSON files are stored in:

```text
public/n8n-templates/
```

## Configure webhooks

Copy `.env.example` to `.env.local` and add your n8n webhook URLs.

```bash
cp .env.example .env.local
```

Then restart the dev server.
