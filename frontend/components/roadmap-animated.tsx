"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { cn } from '../lib/utils';

interface RoadmapPhase {
  label: string;
  title: string;
  description: string;
  status?: 'done' | 'in-progress' | 'upcoming';
}

export interface RoadmapAnimatedProps {
  phases?: RoadmapPhase[];
  className?: string;
  /** Delay before first item animates (seconds) */
  initialDelay?: number;
  /** Stagger between items (seconds) */
  stagger?: number;
  /** Whether to animate on scroll into view (true) or immediately (false) */
  onScroll?: boolean;
}

const DEFAULT_PHASES: RoadmapPhase[] = [
  {
    label: 'Alpha',
    title: 'Inspection & Blocking',
    description: 'Local prompt stream inspection & rule based blocking.',
    status: 'in-progress'
  },
  {
    label: 'Beta',
    title: 'Adaptive & Integrations',
    description: 'Adaptive ML scoring, Windows service integration, telemetry opt-in.',
    status: 'upcoming'
  },
  {
    label: 'GA',
    title: 'Enterprise Depth',
    description: 'Copilot+ deep hooks, enterprise policy packs, SOC integration.',
    status: 'upcoming'
  }
];

export default function RoadmapAnimated({
  phases = DEFAULT_PHASES,
  className,
  initialDelay = 0.15,
  stagger = 0.25,
  onScroll = true
}: RoadmapAnimatedProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-roadmap-item]");
      gsap.set(items, { opacity: 0, y: 28, rotateX: -10, transformOrigin: 'top center' });

      const tl = gsap.timeline({ delay: onScroll ? 0 : initialDelay });
      tl.to(items, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        ease: 'power3.out',
        duration: 0.9,
        stagger,
      });

      if (onScroll) {
        // Basic intersection observer to kick off timeline
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              tl.play();
              observer.disconnect();
            }
          });
        }, { threshold: 0.25 });
        observer.observe(rootRef.current!);
        tl.pause();
      }
    }, rootRef);

    return () => ctx.revert();
  }, [initialDelay, stagger, onScroll]);

  return (
    <div ref={rootRef} className={cn("grid gap-6 md:grid-cols-3", className)}>
      {phases.map((p, idx) => {
        const stateBadge = p.status === 'done'
          ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
          : p.status === 'in-progress'
            ? 'bg-amber-500/15 text-amber-400 border-amber-500/30 animate-pulse'
            : 'bg-muted/40 text-muted-foreground border-border/70 animate-pulse';
        return (
          <Card
            key={p.label}
            data-roadmap-item
            variant="clean"
            className={cn('group')} // using shadcn clean variant
          >
            <CardHeader className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono tracking-wide uppercase text-primary/90">{p.label}</span>
                <span className={cn('text-[10px] px-1.5 py-0.5 rounded-md border font-medium', stateBadge)}>
                  {p.status?.replace('-', ' ')}
                </span>
              </div>
              <CardTitle className="text-sm md:text-base">{p.title}</CardTitle>
              <CardDescription className="leading-relaxed text-xs md:text-[13px]">
                {p.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <div className="mt-3 flex items-center gap-2 text-[10px] text-muted-foreground/70">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/60 animate-ping" />
                <span>Tracking</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
