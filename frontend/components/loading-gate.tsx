"use client";
import { useEffect, useState, useCallback } from 'react';

/**
 * LoadingGate shows a full-screen video (webm) until `ready` turns true OR a timeout elapses.
 * It fades out smoothly and then unmounts the overlay.
 */
export interface LoadingGateProps {
  /** True once the underlying experience (shader, assets) is ready */
  ready: boolean;
  /** ms before we force-hide the loader (safety net) */
  timeoutMs?: number;
  /** Minimum ms to keep the loader visible even if ready earlier */
  minDisplayMs?: number;
  /** Path to the webm video asset (served from /public) */
  videoSrc?: string;
  /** Optional className for root overlay */
  className?: string;
  /** Optional callback after fade out completes */
  onHide?: () => void;
}

export default function LoadingGate({
  ready,
  timeoutMs = 10000,
  minDisplayMs = 4000,
  videoSrc = "/loading.webm",
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
      className={`pointer-events-none fixed inset-0 z-[999] flex items-center justify-center bg-background transition-opacity duration-700 ${show ? 'opacity-100' : 'opacity-0'} ${className}`}
      onTransitionEnd={handleTransitionEnd}
      aria-hidden={!show}
    >
      <video
        className="h-full w-full object-cover"
        src={videoSrc}
        autoPlay
        playsInline
        muted
        loop
      />
      {/* Optional simple progress spinner fallback (if video fails) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-wide text-muted-foreground/70">
        Loading experience...
      </div>
    </div>
  );
}
