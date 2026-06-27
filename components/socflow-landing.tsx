"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, ExternalLink, Github, ShieldCheck, Workflow } from "lucide-react";
import { Automation, automations } from "@/lib/automations";

const githubUrl =
  process.env.NEXT_PUBLIC_GITHUB_URL ||
  "https://github.com/Mosec2525/socflow-automation-portfolio";

function Brand() {
  return <Link href="/" className="brand"><span className="brand-mark"><ShieldCheck size={18} /></span><span>SOCFLOW</span></Link>;
}

export function Navigation() {
  return <header className="nav"><Brand /><nav aria-label="Main navigation"><Link href="/">Overview</Link><Link href="/automations">Automations</Link><a href={githubUrl} target="_blank" rel="noreferrer">GitHub <Github size={15} /></a></nav></header>;
}

function Footer() {
  return <footer><Brand /><p>Designed and built as a cybersecurity automation portfolio project.</p><a href={githubUrl} target="_blank" rel="noreferrer">View source <ExternalLink size={14} /></a></footer>;
}

function NetworkVisual() {
  return <div className="network" aria-hidden="true"><div className="scan-line" />{[0,1,2,3,4,5].map((i)=><span key={i} style={{"--i": i} as React.CSSProperties} />)}<div className="network-core"><ShieldCheck size={32}/><small>TRIAGE ENGINE</small><strong>ACTIVE</strong></div></div>;
}

function AutomationRow({ automation, index }: { automation: Automation; index: number }) {
  return <motion.article className={`automation-row ${automation.accent}`} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.08}}>
    <div className="row-index">0{index + 1}</div>
    <div><p className="mono">{automation.platform}</p><h3>{automation.name}</h3><p>{automation.summary}</p></div>
    <div className="row-meta"><span><i /> {automation.status}</span><Link href={`/automations/${automation.slug}`} aria-label={`Open ${automation.name}`}><ArrowRight /></Link></div>
  </motion.article>;
}

export function SocflowLanding() {
  return <main><Navigation />
    <section className="hero"><div className="hero-copy"><h1>Security automation that makes every alert explainable.</h1><p>Two production-shaped n8n systems for SOC L1 triage, built around Wazuh and Microsoft Sentinel.</p><div className="actions"><Link className="button primary" href="/automations">Explore automations <ArrowRight size={17}/></Link><a className="button secondary" href={githubUrl} target="_blank" rel="noreferrer"><Github size={17}/> Source code</a></div></div><NetworkVisual /></section>
    <section className="proof"><span>02 AUTOMATIONS</span><span>06 LIVE WORKFLOWS</span><span>08 SENTINEL TABLES</span><span>END-TO-END TESTED</span></section>
    <section className="work"><div className="section-head"><p>SELECTED WORK</p><h2>Built for the first decisions that shape an incident.</h2></div>{automations.map((item,index)=><AutomationRow key={item.slug} automation={item} index={index}/>)}</section>
    <section className="principles"><div><p className="mono">DESIGN PRINCIPLE</p><h2>Automation assists the analyst. It does not hide the evidence.</h2></div><div className="principle-list">{["Normalize before scoring","Explain every risk decision","Record analyst outcomes","Measure false positives"].map((x,i)=><p key={x}><span>0{i+1}</span>{x}<Check size={17}/></p>)}</div></section>
    <Footer /></main>;
}

export function AutomationsPage() {
  return <main><Navigation /><section className="page-intro"><p className="mono">AUTOMATION LIBRARY / 02</p><h1>Two SIEMs. One consistent triage standard.</h1><p>Open either project to inspect its architecture, capabilities, sample decision, and live n8n workflow.</p></section><section className="work library">{automations.map((item,index)=><AutomationRow key={item.slug} automation={item} index={index}/>)}</section><Footer /></main>;
}

export function AutomationDetail({ automation }: { automation: Automation }) {
  return <main className={`detail ${automation.accent}`}><Navigation /><section className="detail-hero"><Link className="back" href="/automations"><ArrowLeft size={16}/> All automations</Link><p className="mono">{automation.platform}</p><h1>{automation.name}</h1><p className="lede">{automation.description}</p><div className="actions"><a className="button primary" href={automation.workflowUrl} target="_blank" rel="noreferrer">Open main workflow <ExternalLink size={16}/></a><a className="button secondary" href={automation.decisionUrl} target="_blank" rel="noreferrer">Decision API <ExternalLink size={16}/></a></div></section>
    <section className="metrics">{automation.results.map(item=><div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</section>
    <section className="detail-grid"><div><p className="mono">SYSTEM ARCHITECTURE</p><h2>From raw signal to accountable decision.</h2></div><div className="architecture">{automation.architecture.map(item=><article key={item.label}><span>{item.label}</span><p>{item.detail}</p></article>)}</div></section>
    <section className="pipeline"><p className="mono">PROCESS</p><div>{automation.phases.map((phase,index)=><span key={phase}><b>{String(index+1).padStart(2,"0")}</b>{phase}{index<automation.phases.length-1?<ArrowRight size={15}/>:null}</span>)}</div></section>
    <section className="capabilities"><div><p className="mono">CAPABILITIES</p><h2>What the automation delivers.</h2></div><div>{automation.capabilities.map(item=><p key={item}><Check size={17}/>{item}</p>)}</div></section>
    <section className="sample"><div><p className="mono">SAMPLE OUTPUT</p><h2>{automation.sample.title}</h2></div><div className="sample-console"><p><span>SEVERITY</span><strong>{automation.sample.severity}</strong></p><p><span>RISK SCORE</span><strong>{automation.sample.score}</strong></p><p><span>RECOMMENDATION</span><strong>{automation.sample.verdict}</strong></p><small>Webhook endpoint: {automation.webhookPath}</small></div></section><Footer /></main>;
}
