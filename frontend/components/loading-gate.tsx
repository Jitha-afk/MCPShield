"use client";
import { useEffect, useState, useCallback } from 'react';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import Banner from '../public/MCPShield-Banner-Dark.png';

/**
 * LoadingGate shows a full-screen video (mp4) until `ready` turns true OR a timeout elapses.
 * It fades out smoothly and then unmounts the overlay.
 */
export interface LoadingGateProps {
  /** True once the underlying experience (shader, assets) is ready */
  ready: boolean;
  /** ms before we force-hide the loader (safety net) */
  timeoutMs?: number;
  /** Minimum ms to keep the loader visible even if ready earlier */
  minDisplayMs?: number;
  /** Optional className for root overlay */
  className?: string;
  /** Optional callback after fade out completes */
  onHide?: () => void;
}

export default function LoadingGate({
  ready,
  timeoutMs = 10000,
  // Minimum display time now 0.5s for snappier entry
  minDisplayMs = 950,
  className = "",
  onHide
}: LoadingGateProps) {
  const [forceTimeout, setForceTimeout] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [minElapsed, setMinElapsed] = useState(false);

  // Track minimum display time
  useEffect(() => {
    const id = setTimeout(() => setMinElapsed(true), minDisplayMs);
    return () => clearTimeout(id);
  }, [minDisplayMs]);

  // Trigger timeout safety
  useEffect(() => {
    const id = setTimeout(() => setForceTimeout(true), timeoutMs);
    return () => clearTimeout(id);
  }, [timeoutMs]);

  // Loader stays while NOT hidden AND ( (not ready yet) OR (min not elapsed yet) ) and not forced timeout
  // Once timeout triggers, we allow it to hide regardless.
  const shouldRemain = (!ready || !minElapsed) && !forceTimeout;
  const show = shouldRemain && !hidden;

  const handleTransitionEnd = useCallback(() => {
    if (!show) {
      setHidden(true);
      onHide?.();
    }
  }, [show, onHide]);

  if (hidden) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[999] bg-black transition-opacity duration-700 ${show ? 'opacity-100' : 'opacity-0'} ${className}`}
      onTransitionEnd={handleTransitionEnd}
      aria-hidden={!show}
      role="status"
    >
      {/* Centered Banner Image (using next/image for basePath compatibility) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[720px] max-w-[85vw] select-none opacity-95">
          <Image
            src={Banner}
            alt="MCPShield Banner"
            priority
            className="h-auto w-full object-contain"
            sizes="(max-width: 800px) 85vw, 720px"
          />
        </div>
      </div>

      {/* Bottom Center Spinner + Text */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 select-none">
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 animate-pulse rounded-full bg-primary/10" />
            <Loader2 className="h-10 w-10 text-primary animate-spin-slow" strokeWidth={1.75} />
        </div>
        <div className="text-[11px] font-medium tracking-wide text-muted-foreground/70 animate-fade-in-up" aria-live="polite">
          [Loading Experience...]
        </div>
      </div>
    </div>
  );
}
