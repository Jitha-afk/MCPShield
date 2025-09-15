"use client";
import React from 'react';
import { cn } from '../lib/utils';
import { Card, CardContent } from './ui/card';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

const testimonialsRowA: Testimonial[] = [
  { name: 'Ava L.', role: 'Security Engineer', quote: 'Finally a guardrail that understands agent tool traffic in real time.' },
  { name: 'Marcus T.', role: 'AI Platform Lead', quote: 'Dropped prompt injection incidents to near zero in first week.' },
  { name: 'Priya N.', role: 'Head of Product', quote: 'Helps us ship faster because policy changes are declarative.' },
  { name: 'Diego R.', role: 'Dev Tools PM', quote: 'The local-first approach means zero latency hit for builders.' },
  { name: 'Chen W.', role: 'CISO', quote: 'Critical layer of defense as we scale internal agent usage.' },
  { name: 'Sarah K.', role: 'LLM Infra Engineer', quote: 'Love the transparent rule evaluation trace for debugging.' },
  { name: 'Liam P.', role: 'Red Team Analyst', quote: 'Hardest product so far to exfiltrate secrets from. Impressed.' },
  { name: 'Jules M.', role: 'Ops Engineer', quote: 'Setup took minutes, not weeks. Strong default policy pack.' },
  { name: 'Nina S.', role: 'Data Privacy Lead', quote: 'On-device inspection keeps sensitive data off third-party systems.' },
  { name: 'Owen F.', role: 'ML Engineer', quote: 'Rules + lightweight models is the pragmatic stack we needed.' },
];

// Slightly different ordering / content variation for second row
const testimonialsRowB: Testimonial[] = [
  { name: 'Elena V.', role: 'Security Architect', quote: 'Dynamic redaction saved us from multiple attempted data leaks.' },
  { name: 'Jonah C.', role: 'Founding Engineer', quote: 'Instant visibility into risky prompt patterns across services.' },
  { name: 'Ravi P.', role: 'AI Safety Lead', quote: 'Pairs nicely with our existing SOC workflows.' },
  { name: 'Grace H.', role: 'Platform Engineer', quote: 'The policy DSL is clean and expressive.' },
  { name: 'Tariq A.', role: 'Research Engineer', quote: 'Transparent scoring beats opaque black-box defenses.' },
  { name: 'Maya D.', role: 'Compliance Officer', quote: 'Helps document mitigations for audits automatically.' },
  { name: 'Felix B.', role: 'Security Analyst', quote: 'Catches jailbreak variants we purposely crafted to be subtle.' },
  { name: 'Helena S.', role: 'Agent Framework Dev', quote: 'Plugged into our tool bus with one adapter.' },
  { name: 'Iris Q.', role: 'Infra Lead', quote: 'Barely registers in our latency dashboards.' },
  { name: 'Zane Y.', role: 'Cloud Architect', quote: 'Exactly the missing runtime layer for autonomous agents.' },
];

function Row({ testimonials, direction }: { testimonials: Testimonial[]; direction: 'left' | 'right' }) {
  // Duplicate list so translateX -50% loops seamlessly
  const list = [...testimonials, ...testimonials];
  return (
    <div className="group relative overflow-hidden">
      <div
        className={cn(
          'flex w-[200%] gap-4 py-4',
          direction === 'left' ? 'animate-marquee-left-slow' : 'animate-marquee-right-slow'
        )}
        aria-hidden="true"
      >
        {list.map((t, i) => (
          <Card
            key={i}
            className="w-72 flex-shrink-0 transition-shadow hover:shadow-md hover:ring-1 hover:ring-border/60 bg-white dark:bg-[#21293c] text-card-foreground dark:text-card-foreground"
          >
            <CardContent className="p-4">
              <p className="text-sm leading-relaxed mb-3 text-muted-foreground dark:text-muted-foreground">“{t.quote}”</p>
              <div className="text-xs font-medium">
                <span>{t.name}</span>
                <span className="text-muted-foreground"> · {t.role}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* subtle gradient masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}

export default function TestimonialsMarquee() {
  return (
    <section className="relative py-24 select-none" id="testimonials">
      <div className="container mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What builders are saying</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl text-sm md:text-base">Adopters across security, platform, and AI teams use MCP Shield to safely accelerate agent-driven products.</p>
      </div>
      <div className="space-y-6">
        <Row testimonials={testimonialsRowA} direction="left" />
        <Row testimonials={testimonialsRowB} direction="right" />
      </div>
    </section>
  );
}
