# Known Issue: Sanity CDN DNS Resolution During Build

Date: `2026-07-03`
Branch: `feat/typescript-migration`
App: `next-portfolio`

## Summary

`next build` currently fails in restricted or offline environments when the app tries to fetch static page data from the Sanity CDN host:

- `4tuomjdr.apicdn.sanity.io`

This is not a TypeScript migration defect. The app compiles successfully and finishes the TypeScript phase, but static generation fails when Next.js collects page data for Sanity-backed routes.

## Observed Failure

Example failure shape:

```text
Error: getaddrinfo ENOTFOUND 4tuomjdr.apicdn.sanity.io
Error: Failed to collect page data for /blog/[slug]
```

The same class of failure can affect other Sanity-backed dynamic routes such as:

- `/blog/[slug]`
- `/case-studies/[slug]`

## What Is Working

- `npm run lint` passes
- `npm run typecheck` passes
- `next build --webpack` compiles application code successfully
- TypeScript migration is complete from the app/code perspective

## Root Cause

The build process performs network-dependent Sanity fetches during static generation. In environments where DNS or outbound network access is blocked, the host cannot be resolved:

- `https://4tuomjdr.apicdn.sanity.io`

## Why This Matters

This means local or sandboxed verification can report a build failure even when:

- application code is valid
- TypeScript is valid
- lint is clean

So this issue should be treated as an environment/integration blocker, not as a compiler or migration regression.

## Suggested Follow-Up Options

1. Run the build in an environment with outbound access to Sanity CDN.
2. Add a mock or fallback mode for local/sandbox builds.
3. Gate static generation behavior when required environment access is unavailable.
4. Review whether some Sanity-backed routes should use runtime rendering instead of build-time generation for local verification workflows.
