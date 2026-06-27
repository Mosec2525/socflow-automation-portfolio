export type Automation = {
  slug: string;
  shortName: string;
  name: string;
  platform: string;
  summary: string;
  description: string;
  accent: "cyan" | "green";
  status: string;
  workflowUrl: string;
  decisionUrl: string;
  webhookPath: string;
  phases: string[];
  capabilities: string[];
  architecture: { label: string; detail: string }[];
  results: { value: string; label: string }[];
  sample: { title: string; severity: string; score: string; verdict: string };
};

export const automations: Automation[] = [
  {
    slug: "wazuh",
    shortName: "Wazuh",
    name: "Wazuh SOC L1 Alert Triage",
    platform: "Wazuh + n8n",
    summary: "Normalizes Wazuh alerts, calculates risk, produces an analyst-ready report, and records every decision.",
    description: "A production-shaped SOC L1 pipeline that turns raw Wazuh events into consistent, explainable triage packages. Analysts receive the evidence, severity, score, and next action without manually rebuilding context for every alert.",
    accent: "green",
    status: "Tested live",
    workflowUrl: "https://mosec2525.app.n8n.cloud/workflow/EImac4ESa4QNjzSX",
    decisionUrl: "https://mosec2525.app.n8n.cloud/workflow/T5mpAH7KcJe4n6P9",
    webhookPath: "/webhook/wazuh-alert",
    phases: ["Ingest", "Normalize", "Score", "Report", "Decide", "Measure"],
    capabilities: ["Wazuh JSON normalization", "Explainable risk scoring", "Entity extraction", "Decision API", "False-positive tracking", "Daily SOC metrics"],
    architecture: [
      { label: "01 / Ingest", detail: "Wazuh forwards an alert to a protected n8n webhook." },
      { label: "02 / Analyze", detail: "Rules normalize fields, extract entities, and calculate risk." },
      { label: "03 / Report", detail: "A structured L1 report is generated and stored for review." },
      { label: "04 / Learn", detail: "Analyst decisions feed false-positive and metrics tables." },
    ],
    results: [{ value: "3", label: "Connected workflows" }, { value: "100", label: "Max risk score" }, { value: "L1", label: "Analyst ready" }],
    sample: { title: "Suspicious PowerShell execution", severity: "Critical", score: "100 / 100", verdict: "Escalate to L2" },
  },
  {
    slug: "microsoft-sentinel",
    shortName: "Sentinel",
    name: "Microsoft Sentinel Incident Triage",
    platform: "Microsoft Sentinel + n8n",
    summary: "Receives Sentinel incidents, builds entity context, scores risk, tracks analyst decisions, and reports daily performance.",
    description: "An end-to-end incident triage system designed for Microsoft Sentinel. It combines webhook ingestion, normalized incident records, entity tables, decision tracking, false-positive learning, daily metrics, and an Azure Logic App integration path.",
    accent: "cyan",
    status: "Tested live",
    workflowUrl: "https://mosec2525.app.n8n.cloud/workflow/rRW6HvsFzZaNRQ57",
    decisionUrl: "https://mosec2525.app.n8n.cloud/workflow/ogAR8lFRuj2FGhAl",
    webhookPath: "/webhook/sentinel-incident",
    phases: ["Webhook", "Normalize", "Entities", "Risk", "Decision", "Metrics"],
    capabilities: ["Sentinel incident webhook", "Eight structured data tables", "Entity correlation", "Decision API", "False-positive tracker", "Logic App connection guide"],
    architecture: [
      { label: "01 / Receive", detail: "An Azure Logic App sends the Sentinel incident to n8n." },
      { label: "02 / Context", detail: "Incident and entity fields are normalized into dedicated tables." },
      { label: "03 / Decide", detail: "Risk logic builds an explainable L1 recommendation." },
      { label: "04 / Improve", detail: "Decisions and daily metrics make triage quality measurable." },
    ],
    results: [{ value: "8", label: "Data tables" }, { value: "3", label: "Live workflows" }, { value: "100", label: "Test risk score" }],
    sample: { title: "Multi-stage identity compromise", severity: "Critical", score: "100 / 100", verdict: "Immediate escalation" },
  },
];

export function getAutomation(slug: string) {
  return automations.find((automation) => automation.slug === slug);
}
