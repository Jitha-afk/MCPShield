# Data Model (Landing Page)

This feature is a static landing page with a client-side demo. Persisted data is intentionally minimal.

Entities

- DemoSession (ephemeral, client-side only)
  - `id`: string (UUID) — client-side session id
  - `mode`: enum {"simulation","local-inference-available"}
  - `events`: array of { `timestamp`, `type`, `severity`, `description` }
  - `createdAt`: ISO timestamp

Persistence
- Default: no persistence. Sessions exist in-memory only and are cleared on page unload. Any telemetry must be opt-in and documented.
