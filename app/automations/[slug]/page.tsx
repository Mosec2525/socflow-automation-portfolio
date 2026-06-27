import { notFound } from "next/navigation";
import { AutomationDetail } from "@/components/socflow-landing";
import { automations, getAutomation } from "@/lib/automations";

export function generateStaticParams() { return automations.map(({ slug }) => ({ slug })); }

export default async function AutomationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const automation = getAutomation(slug);
  if (!automation) notFound();
  return <AutomationDetail automation={automation} />;
}
