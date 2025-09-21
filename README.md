<div align="center" style="margin-bottom: 2em;">
  
  <img src="assets/mcp-shield-banner.gif" alt="MCP Shield" loop=infinite/>
  
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

- **Agent-aware inspection.** Parse MCP envelopes and look for adversarial patterns (prompt injection, data exfiltration, jailbreak attempts) using signatures, heuristics, and on-device NPU powered LLM inference.
- **Local enforcement.** Default to Windows-side enforcement so sensitive data does not leave the machine unless a policy explicitly allows it.
- **Composable policies.** Provide a declarative rules engine and response playbooks so enterprises can adapt detection logic without rewriting code.
- **Transparent experience.** Ship with a fluid landing site, interactive demo, and threat storytelling that help stakeholders understand how MCP Shield behaves.


## Dependencies / Limitations

`{WIP}`

## Future Scope

- **Hackathon deliverable.** Ship the landing experience, interactive simulation, and storytelling collateral that describe the MCP Shield vision.
- **Alpha.** Transition the simulation into a Windows helper service capable of inspecting MCP call streams with rule-based blocking and local audit logs.
- **Beta.** Layer adaptive ML scoring, SOC integrations, and opt-in telemetry pipelines for enterprise pilots. Harden install, update, and policy distribution flows.
- **General availability.** Provide packaged policy packs, Copilot+ deep hooks, and administrative dashboards so MCP Shield fits into standard security operations.
- **Ecosystem expansion.** Publish research notes, best-practice guides, and sample policies to accelerate community contributions beyond the hackathon.

## Getting Started

### Prerequisites

`{WIP}`

### Installing

`{WIP}`

## Usage

`{WIP}`

## Built With

### Windows App

`{WIP}`

### Landing Page

- Next.js (App Router with static export)
- React 19 + TypeScript
- Tailwind CSS + tailwindcss-animate
- shadcn/ui primitives and Radix UI foundations
- GSAP for motion design flourishes
- Vanilla HTML/CSS/JS prototype under `landing/` for rapid demos
- Unicorn Studio for Shaders and 3D assets

## Team

The MCP Shield crew combines expertise across security, AI, and product storytelling:

- **Security Research & Response:** Models MCP threat surfaces, designs detection signatures, and validates policy impact.
- **AI Platform Engineering:** Bridges MCP connectors, local inference runtimes, and planned Windows service integrations.
- **Product & Experience Design:** Crafts the narrative arc, interactive demo, and Hackathon-ready landing experience.

If you would like to collaborate, open an issue or reach out during the hackathon to join testing sessions.

## Acknowledgments

- The MCP community and recent vulnerability disclosures that inspired the need for an agent-aware firewall.
- Contributors to the Model Context Protocol specification for shaping the interoperability surface MCP Shield watches.
- Open-source design systems that accelerated the landing experience.
- GitHub Pages and the Microsoft Global Hackathon organizers for the infrastructure and stage to bring MCP Shield to life.
=======
# HACKATHON25-MCPSentinel

[![Deploy MCPShield Landing to GitHub Pages](https://github.com/Jitha-afk/MCPShield/actions/workflows/deploy-pages.yml/badge.svg?branch=pages)](https://github.com/Jitha-afk/MCPShield/actions/workflows/deploy-pages.yml)

AI firewall for the agent era!
>>>>>>> dd2d90f8a72e319ba5230ab5b4c241af4dc18908

