# Blog Writing Brief — Pasindu Oshadha

## About the Author

**Pasindu Oshadha** is a Senior WordPress & Next.js developer with 9+ years of experience
building high-performance, scalable web applications for international clients. He specialises
in WordPress architecture, headless CMS implementations, WooCommerce at scale, and Core Web
Vitals optimisation.

This is his **engineering journal** — not a tutorial blog. Posts are written peer-to-peer,
for developers who already know the basics and want real, hard-won insights.

---

## Voice & Tone

- **Confident and opinionated.** State positions clearly. "This is the wrong approach" not
  "you might want to consider…"
- **First-person, conversational.** Write like explaining to a senior peer over coffee — not
  a lecture, not a tutorial.
- **Honest about failure.** The "Gotchas" section must contain real pain. Avoid making
  everything sound perfect.
- **Data-driven.** Use numbers wherever possible. "Cut LCP from 4.2s to 0.8s" beats "improved
  performance significantly."
- **No fluff openers.** Never start with "In this article I will…" or "Have you ever wondered…"
  Open with a claim, a stat, or a scenario.

---

## Target Audience

Senior / mid-senior developers, tech leads, and engineering managers who work with WordPress,
WooCommerce, or headless architectures. They have strong fundamentals — skip the basics,
go deep on the nuance.

---

## Post Structure

Every post must follow this exact structure. Use these headings verbatim.

```
TITLE
A specific, outcome-driven headline. Avoid generic titles.
❌ "WordPress Performance Tips"
✅ "How I Cut LCP to 0.8s Across a 12-Site News Network"

EXCERPT
One punchy sentence (max 160 chars) that forces a click.
A bold claim, a surprising number, or a counter-intuitive take.

CATEGORY
One of: Performance & SEO / Architecture / WooCommerce /
        WordPress / Headless / Next.js / Developer Experience

READ TIME
Estimate in minutes (target: 8–12 min, ~1,500–2,500 words)

---

[HOOK — no heading]
2–3 sentences. Strong opinion, surprising stat, or a vivid scenario.
No "In this article…" openers. Drop the reader straight into the problem.

## The Problem
Real-world context. What was broken, slow, painful, or misunderstood.
Make the reader feel the pain — describe the scenario concretely.

## The Approach
Your mental model and reasoning. Why this path and not the obvious one.
This section shows senior-level thinking. Include trade-offs considered.

## The Implementation
Technical deep-dive. Code blocks, configs, architecture decisions.
Do not dumb it down. Show the actual solution in enough detail to replicate.

## The Gotchas
What went wrong. What surprised you. What not to do.
This section must be honest — it's what makes the post trustworthy and
separates it from generic "10 tips" content.

## The Results
Concrete outcomes. Numbers. Before/after comparisons.
If no numbers are available, use qualitative milestones that are specific.

## Key Takeaways
3–5 bullet points. The scannable TL;DR for people who scroll first.
Each bullet should stand alone as a useful insight.
```

---

## Code Block Rules

- Always specify the language for syntax highlighting (` ```php `, ` ```js `, ` ```bash `, etc.)
- Include only the relevant snippet — not entire files
- Add a one-line comment above complex blocks explaining *what* it does
- Prefer real-world variable names over `foo` / `bar`

---

## Posts Queue

Status legend:
- `[ ]` — Not started
- `[→]` — Write this next (priority)
- `[✓]` — Written & published

| # | Status | Topic | Working Title | Category | Read Time |
|---|--------|-------|---------------|----------|-----------|
| 1 | `[✓]` | Scaling search | How I Indexed 1M+ Pages for Sub-100ms Search Without Elasticsearch | Architecture | 10 min |
| 2 | `[ ]` | Core Web Vitals fix | How I Fixed Core Web Vitals on a 12-Site News Network: From 45 to 98 | Performance & SEO | 12 min |
| 3 | `[ ]` | Performance stack (Redis + Cloudflare) | The WordPress Performance Stack That Handles 500k Monthly Visitors | Performance & SEO | 10 min |
| 4 | `[ ]` | Custom API | Building a Type-Safe REST API Layer in WordPress Without a Plugin | Architecture | 8 min |
| 5 | `[ ]` | Headless WP | Headless WordPress in Production: What Nobody Tells You | Headless / Next.js | 12 min |
| 6 | `[ ]` | Debugging guide | My WordPress Debugging Toolkit: 10 Techniques That Save Me Hours Every Week | Developer Experience | 9 min |
| 7 | `[ ]` | WooCommerce customization | WooCommerce Custom Order Flows: Beyond the Default Checkout | WooCommerce | 10 min |
| 8 | `[ ]` | WP-CLI automation | WP-CLI Scripts I Run on Every New Project | Developer Experience | 8 min |
| 9 | `[ ]` | When not to use WP | When to Walk Away from WordPress: An Honest Decision Framework | Architecture | 9 min |

---

## Primary Source Material — Sanidumps Firebase Sync Plugin

Several posts (especially #1, #3, #4, #8) draw directly from a real plugin built for
production. Use this section as the factual source of truth when writing those posts.

### What the plugin is

**Sanidumps Core for Firebase Sync** (v1.1.1) — a custom WordPress data platform plugin
built for a live RV parks & dump stations directory (sanidumps.com). It syncs listing and
location data from Firebase into WordPress and serves it through multiple frontend channels.

Not a generic plugin. Not a tutorial project. Production-grade, handling real traffic.

### Architecture overview

```
External Sources                WordPress Core          Custom Tables
──────────────                  ──────────────          ─────────────
Firebase / Cloud Fns  ──────►  Posts (listing,         wp_custom_search
Google Places API     ──────►  shop_products)          (FULLTEXT index)
GraphQL Shop API      ──────►  Taxonomies              wp_location_lookup
                               (rv_park_locations,     (country/state/city)
                               rv_dump_locations)      wp_firebase_list_api_logs
                               Post/Term Meta
                                    │
              ┌─────────────────────┼──────────────────────┐
              ▼                     ▼                       ▼
        REST API             Elementor Widgets        WP-CLI Commands
        (12+ routes)         (listing details,        (15+ commands,
        AJAX Search          location selector,        batch import,
        Admin Dashboard      shop loop)                index rebuild)
```

### Key technical decisions (use these as blog source material)

**1. Hybrid data strategy — WP + custom SQL tables**
Standard `WP_Query` / `get_terms` would not scale to the volume of locations and listings.
Solution: keep canonical data in WP posts/terms, denormalize into two custom read tables:
- `wp_custom_search` — FULLTEXT-indexed for keyword search on listing titles
- `wp_location_lookup` — precomputed country/state/city hierarchy for location selector APIs
- `wp_firebase_list_api_logs` — full API observability with indexed endpoint/status/timestamp

Cache layer: `wp_cache_get/set` wraps all location lookup reads (12-hour TTL).

**2. FULLTEXT search without Elasticsearch**
Query pattern used in production:
```php
$rows = $wpdb->get_results($wpdb->prepare(
    "SELECT * FROM $table
     WHERE MATCH(post_title) AGAINST(%s IN BOOLEAN MODE)
     LIMIT 50",
    '+' . esc_sql($keyword) . '*'
));
```
The search table is rebuilt by a biweekly cron job and can be manually triggered via CLI.
This is the direct source for blog post #1.

**3. Multi-channel ingestion — three ways in**
- **REST webhook** (`POST /wp-json/firebase-list/v1/update-data`) — live listing updates
- **Admin UI importer** (`Tools > Import`) — manual, selected location datasets
- **15 WP-CLI commands** — bulk backfill, batch recovery, cursor pagination
Deliberate design: when one path fails, the others still work.

**4. WP-CLI as the operations backbone**
15 active commands including: `location-importer-v3`, `firebase-import`,
`listing_search index_listings`, `term-listing-mapper`, `shop sync_products`.
Several use `START TRANSACTION / COMMIT / ROLLBACK` for integrity in bulk updates.
Batch sizing and cursor pagination built in. This is the direct source for blog post #8.

**5. REST API design — direct SQL read model**
Routes registered via `register_rest_route`. Location lookup endpoints bypass WP_Query
entirely — they query `wp_location_lookup` directly and cache results.
Example routes:
- `GET /firebase-list/v1/location-lookup/v1/countries/{taxonomy}`
- `GET /firebase-list/v1/location-lookup/v1/states/{taxonomy}/{parent_id}`
- `GET /firebase-list/v1/all-in-one-search` (AJAX search + optional Google Places merge)

**6. Observability as a first-class feature**
Most plugins skip this. This one has:
- Dedicated `wp_firebase_list_api_logs` table (indexed on endpoint, status, timestamp)
- Admin dashboard with stats (success rate, response times, per-endpoint counts)
- Log sanitization (strips authorization/cookie headers before persistence)

**7. Elementor widgets backed by REST, not embedded queries**
Widgets don't contain query logic. They consume the plugin's own REST endpoints.
Widgets implemented: location selector, location tabs, location search, listing details
(rating, contacts, costing, map, description, amenities, open hours), shop loop.

**8. Static sitemap generation via cron + direct SQL**
Sitemap generation pipeline (`sitemap_generation` hook) writes static XML files using
direct SQL pagination and `file_put_contents`. No sitemap plugin dependency.

### Security note (use in "Gotchas" sections)

Several public REST routes use `permission_callback => __return_true` — correct for
public read endpoints (location data, search results). However, the webhook update route
(`/update-data`) should have a signature or token check if not validated upstream.
This is an honest gotcha worth naming in posts #4 and #8.

### Code snippets available for posts

```php
// CPT registration
register_post_type('listing', [
    'public' => true,
    'supports' => ['title', 'editor', 'thumbnail', 'excerpt'],
    'show_in_rest' => true,
]);

// REST route registration
register_rest_route('firebase-list/v1', '/update-data', [
    'methods' => 'POST',
    'callback' => [$this, 'update_data'],
    'permission_callback' => '__return_true',
]);

// Direct SQL lookup with object cache
$data = $wpdb->get_results($wpdb->prepare(
    "SELECT term_id, name FROM {$wpdb->prefix}location_lookup
     WHERE taxonomy = %s AND location_type = 'country'",
    $taxonomy
), ARRAY_A);
wp_cache_set($cache_key, $data, 'location_lookup', 12 * HOUR_IN_SECONDS);

// FULLTEXT search
$rows = $wpdb->get_results($wpdb->prepare(
    "SELECT * FROM $table
     WHERE MATCH(post_title) AGAINST(%s IN BOOLEAN MODE)
     LIMIT 50",
    '+' . esc_sql($keyword) . '*'
));

// CLI transaction pattern
$this->wpdb->query('START TRANSACTION');
try {
    // batch inserts/updates
    $this->wpdb->query('COMMIT');
} catch (Exception $e) {
    $this->wpdb->query('ROLLBACK');
    throw $e;
}
```

### Plugin → post mapping

| Plugin feature | Post # | Section to use it in |
|---|---|---|
| FULLTEXT search on custom table | #1 | The Implementation, The Results |
| Hybrid WP + custom SQL strategy | #1, #3 | The Approach, The Implementation |
| Cron + CLI index rebuild pipeline | #3 | The Implementation |
| REST API with direct SQL read model | #4 | The Approach, The Implementation |
| `permission_callback => __return_true` risk | #4 | The Gotchas |
| Elementor widgets consuming REST | #5 | The Approach |
| 15 WP-CLI commands with transactions | #8 | The Implementation |
| Multi-channel ingestion strategy | #8 | The Approach |
| Observability / API log table | #4, #8 | The Gotchas or The Results |

---

## Writing Checklist (run before submitting each post)

- [ ] Title is specific and outcome-focused (no generic words like "tips", "guide", "intro")
- [ ] Excerpt is under 160 characters and punchy
- [ ] Hook opens with a claim, stat, or scenario — not a throat-clear
- [ ] "The Problem" section makes the reader feel the pain concretely
- [ ] "The Approach" explains *why*, not just *what*
- [ ] "The Implementation" has at least one code block
- [ ] "The Gotchas" section is honest — not just another tips list
- [ ] "The Results" has at least one specific number or measurable outcome
- [ ] "Key Takeaways" has 3–5 bullets that each stand alone
- [ ] No fluff openers, no passive voice, no "In this post I will…"
- [ ] Read time estimate is accurate (250 words ≈ 1 min)
