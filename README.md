# Experiment Garden

A digital garden for running communication experiments from my studio. Each experiment gets its own sandbox to grow from seedling to harvest.

## Philosophy

**Experiments based.** Experiments give permission to play, fail, and learn.

**Process in public.** Show the work, not just the results. Document what doesn't work as much as what does.

**Bounded exploration.** Max 4 active experiments. Clear containers for messy creative work.

## Structure

```
src/content/experiments/
  musings/
    index.md          # Main experiment
    logs/             # Weekly reflections
    artifacts/        # Discoveries, sketches
    resources/        # Research, inspiration
```

Each experiment is a self-contained sandbox. Everything related lives together.

## Workflow

**Saturday mornings:** Cafe sessions for tending experiments

1. Review week's scattered notes from other apps
2. Sort insights by experiment
3. Write markdown files in Obsidian
4. Update experiment status as needed

**Content flows:** Notes app → LLM sessions → Obsidian → Astro site

**Experiment lifecycle:** seedling → growing → mature → harvested → dormant

## Setup

1. **Clone and install:**

   ```bash
   npm install
   ```

2. **Point Obsidian to content:**

   - Open Obsidian
   - "Open folder as vault"
   - Select `src/content/`

3. **Create experiment templates in Obsidian:**

   ```markdown
   ---
   title: '{{title}}'
   status: 'seedling'
   startDate: { { date:YYYY-MM-DD } }
   description: ''
   ---

   # {{title}}

   ## Hypothesis

   ## Approach

   ## Learnings
   ```

## Run

```bash
npm run dev          # Development
npm run build        # Production build
```

Visit `/experiments` to see all experiments. Each gets its own page.

## Tech

- **Astro** - Static site generation
- **Content Collections** - Type-safe content management
- **Obsidian** - WYSIWYG editing and organization
