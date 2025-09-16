
<!-- Banner image placeholder: add assets/mcp-shield-banner.png before publishing -->
![MCP Shield banner](assets/mcp-shield-banner.gif)

<div align="center" style="margin-bottom: 2em;">
  
  <img src="assets/mcp-shield-banner.gif" alt="MCP Shield" width="600" />
  
  <h1 align="center" style="font-size:2.5rem; font-weight:800; margin: 1.5em 0 0.5em 0; letter-spacing: -1px; color: #0ea5e9; text-shadow: 0 2px 16px #0ea5e9aa;">🚨 MCP Shield: Experience the Future of AI Security 🚨</h1>
  
  <p align="center" style="font-size:1.25rem; color:#444; margin-bottom:1.5em;">
    <strong>Ready to see agent-aware firewalls in action? Dive in below!</strong>
  </p>
  
  <a href="https://jitha-afk.github.io/MCPShield/" target="_blank" style="text-decoration:none;">
    <img src="https://img.shields.io/badge/🌐%20Explore%20Landing%20Page-0ea5e9?style=for-the-badge&logo=vercel&logoColor=white" alt="Landing Page" style="margin:0.5em;"/>
  </a>
  <a href="https://innovationstudio.microsoft.com/hackathons/hackathon2025/project/95945" target="_blank" style="text-decoration:none;">
    <img src="https://img.shields.io/badge/💬%20Like%20the%20Idea%3F%20Leave%20a%20Comment-0ea5e9?style=for-the-badge&logo=microsoft&logoColor=white" alt="Leave a Comment" style="margin:0.5em;"/>
  </a>
  
  <br/>
  <br/>
  <sub style="color:#888;">✨ <b>Scroll down for the story, demo, and how to get involved!</b> ✨</sub>
</div>


# MCP Shield

**Microsoft Global Hackathon 2025 – An agent-aware firewall for the Model Context Protocol era**

## Table of Contents
- [MCP Shield](#mcp-shield)
  - [Table of Contents](#table-of-contents)
  - [Problem Statement](#problem-statement)
  - [Idea / Solution](#idea--solution)
  - [Dependencies / Limitations](#dependencies--limitations)
  - [Future Scope](#future-scope)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installing](#installing)
  - [Usage](#usage)
  - [Built With](#built-with)
  - [Team](#team)
  - [Acknowledgments](#acknowledgments)

## Problem Statement

Model Context Protocol (MCP) adoption is exploding across Microsoft and the wider AI ecosystem. At the same time, security teams are grappling with prompt injection, context exfiltration, and tool chaining attacks that slip past traditional guardrails. Windows and Copilot+ PCs lack an on-device signal layer that can observe and intervene in real time while still honoring user privacy. We need an approachable, agent-aware firewall that can earn the trust of security, compliance, and product teams during the hackathon window and evolve toward production readiness.

## Idea / Solution

MCP Shield is a local-first watchdog that sits alongside MCP-enabled agents and tools. It inspects prompts, tool input/output, and session context before those artifacts ever leave the device.

Key pillars of the solution include:

- **Agent-aware inspection.** Parse MCP envelopes and look for adversarial patterns (prompt injection, data exfiltration, jailbreak attempts) using signatures, heuristics, and on-device inference.
- **Local enforcement.** Default to Windows-side enforcement so sensitive data does not leave the machine unless a policy explicitly allows it.
- **Transparent experience.** Ship with a fluid landing site, interactive demo, and threat storytelling that help stakeholders understand how MCP Shield behaves.
- **Composable policies.** Provide a declarative rules engine and response playbooks so enterprises can adapt detection logic without rewriting code.

During the hackathon the focus is on the storytelling and simulation layers: a polished Next.js landing page, a static HTML demo that simulates detections, and research artifacts that map out the product direction. The architecture leaves room for future Windows services, telemetry pipelines, and dashboard surfaces.

## Dependencies / Limitations

- **Runtime stack.** The primary experience lives in the `frontend/` Next.js app (React 19, Tailwind CSS, shadcn/ui, GSAP). Static prototypes for pitch demos remain in `landing/` for quick sharing.
- **Tooling.** Node.js 22+ is required for the Next.js 15 toolchain. GitHub Pages hosts the static export from the `pages` branch using a post-export script that creates a `404.html` fallback for client-side routing.
- **Platform focus.** Messaging currently centers on Windows and Copilot+ PCs where local inference hardware is available. Support for other operating systems is on the roadmap.
- **Detection maturity.** The threat detection workflow is a scripted simulation today. Real-time MCP interception, policy enforcement, installer delivery, and opt-in telemetry are in progress.

## Future Scope

- **Hackathon deliverable.** Ship the landing experience, interactive simulation, and storytelling collateral that describe the MCP Shield vision.
- **Alpha.** Transition the simulation into a Windows helper service capable of inspecting MCP call streams with rule-based blocking and local audit logs.
- **Beta.** Layer adaptive ML scoring, SOC integrations, and opt-in telemetry pipelines for enterprise pilots. Harden install, update, and policy distribution flows.
- **General availability.** Provide packaged policy packs, Copilot+ deep hooks, and administrative dashboards so MCP Shield fits into standard security operations.
- **Ecosystem expansion.** Publish research notes, best-practice guides, and sample policies to accelerate community contributions beyond the hackathon.

## Getting Started

### Prerequisites

- Node.js 22 or later (Corepack-enabled environments work as well).
- npm (bundled with Node) or an alternative package manager such as pnpm.
- Git for cloning the repository and switching between the active development branch (`work`) and the published GitHub Pages branch (`pages`).
- A modern browser (Edge, Chrome, or Firefox) for testing the landing page experience.

### Installing

1. Clone the repository and move into the project directory:
   ```bash
   git clone https://github.com/jitha-afk/MCPShield.git
   cd MCPShield
   ```
2. Install dependencies for the Next.js experience:
   ```bash
   cd frontend
   npm install
   ```
3. (Optional) Explore the lightweight static prototype without installing dependencies by opening `landing/index.html` directly in a browser.

## Usage

- **Run the Next.js experience locally.** From the `frontend` directory run `npm run dev` and open `http://localhost:3000` to explore the hero motion, product narrative, and demo CTA.
- **Preview the interactive simulation.** Use the "Try Demo (Local)" button on the landing page or open `landing/index.html` to see simulated MCP events populate the log when "Run Simulation" is clicked.
- **Build and export for GitHub Pages.** Execute `npm run build` followed by `npm run export` (or `npm run postexport` if using the helper script) to generate the static `out/` directory. Deploy the resulting files to the `pages` branch to update https://jitha-afk.github.io/MCPShield/.
- **Customize content.** Edit copy and feature sections in `frontend/app/page.tsx`, update animations in `frontend/components`, or swap assets in `frontend/public` to tailor the narrative for new audiences.

## Built With

- Next.js (App Router with static export)
- React 19 + TypeScript
- Tailwind CSS + tailwindcss-animate
- shadcn/ui primitives and Radix UI foundations
- GSAP for motion design flourishes
- Vanilla HTML/CSS/JS prototype under `landing/` for rapid demos

## Team

The MCP Shield crew combines expertise across security, AI, and product storytelling:

- **Security Research & Response:** Models MCP threat surfaces, designs detection signatures, and validates policy impact.
- **AI Platform Engineering:** Bridges MCP connectors, local inference runtimes, and planned Windows service integrations.
- **Product & Experience Design:** Crafts the narrative arc, interactive demo, and Hackathon-ready landing experience.
- **Program & Community Partnerships:** Coordinates with Microsoft Global Hackathon mentors, compliance reviewers, and potential pilot teams.

If you would like to collaborate, open an issue or reach out during the hackathon to join testing sessions.

## Acknowledgments

- The MCP community and recent vulnerability disclosures that inspired the need for an agent-aware firewall.
- Contributors to the Model Context Protocol specification for shaping the interoperability surface MCP Shield watches.
- Unicorn Studio, shadcn/ui, Radix UI, and the open-source design systems that accelerated the landing experience.
- GitHub Pages and the Microsoft Global Hackathon organizers for the infrastructure and stage to bring MCP Shield to life.

