"use client";

import React from 'react';

/**
 * AdSection
 * Full viewport (100vh) promotional section to sit between Hero and Testimonials.
 * Includes a background placeholder layer reserved for a future interactive Unicorn.Studio element.
 */
export default function AdSection() {
  return (
    <section
      id="ad"
      data-snap-section
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      aria-labelledby="ad-heading"
    >
      {/* Background placeholder (future unicorn.studio interactive canvas) */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        data-role="unicorn-background-placeholder"
        aria-hidden="true"
      >
        {/* Reserved for future interactive background */}
      </div>

      <div className="container max-w-5xl mx-auto px-6 md:px-10 xl:px-16">
        <h2
          id="ad-heading"
          className="text-pretty font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight whitespace-pre-line"
        >
{`AI is the future.
But every future has threats.

MCPShield runs where others can’t - on the NPU inside your Copilot+ PC.

Seamless in every MCP client,
built to catch the invisible,
stopping attacks before they stop you.

This is the AI firewall for the agent era.`}
        </h2>
      </div>
    </section>
  );
}
