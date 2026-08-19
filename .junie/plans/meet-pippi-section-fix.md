---
sessionId: session-260819-124830-pvc6
---

# Requirements

### Overview & Goals
The About section currently renders a `meet_pippi` block with a raw `<h2>Møt Pippi/Meet Pippi</h2>` and an oversized image that overflows the tidy, centered design used elsewhere on the site. The image path (`../../public/images/pippi_01.jpg`) is also wrong for a Vite app (should be served from `/images/...`).

Goal: fix the `About.tsx` markup/CSS and `translations.ts` content so the "Meet Pippi" block sits naturally below the existing Svanejenta story text, uses a proper heading hierarchy, has translated paragraph text (currently missing), and shows the image at a sensible, responsive, design-consistent size — per `prompts/refactor_02.md`.

### Scope
**In Scope**
- Fix the broken image `src` to use the correct public path `/images/pippi_01.jpg`.
- Add `meetPippiParagraphs` (NO/EN) to `translations.ts` under `about`, using the copy given in `refactor_02.md`.
- Change the Pippi heading from `<h2>` to `<h3>` (sub-heading under the `<h2>` "Historien bak Svanejenta").
- Render the new paragraphs in `About.tsx` similarly to the main `about.paragraphs`.
- Add/update `About.css` so the `meet_pippi` block: has breathing room (margin/padding), a readable text width, and a resized, responsive image (constrained max-width, correct aspect ratio, matching border-radius/visual style used elsewhere, e.g. `Gallery.css`'s `border-radius: 6px`).
- Keep mobile order: heading → text → image (already true in DOM, just needs sizing fixes so image doesn't blow up).
- Optionally give the Pippi block a text+image side-by-side layout on desktop if it fits current design cleanly (per refactor doc, this is optional/nice-to-have, not required).

**Out of Scope**
- No redesign of the rest of the page.
- No new medical claims — keep copy exactly as given in the refactor doc.
- No changes to `no`/`en` language switching mechanism.
- No commit/push (per refactor doc instructions).

### Functional Requirements
- On both NO and EN locales, the Pippi section shows: sub-heading ("Møt Pippi"/"Meet Pippi"), the 3 paragraphs from the refactor doc, then the image — all below the existing About paragraphs.
- The image never overflows the viewport, keeps aspect ratio, is capped to a reasonable max size (e.g. matching gallery item scale or a fixed max-width like 420–480px), and has the same border-radius as other imagery in the site.
- No horizontal scrolling is introduced on mobile.
- `npm run lint` and `npm run build` complete without errors after the change (per refactor doc verification step).

# Technical Design

### Current Implementation
- `src/components/About.tsx`: renders `t.heading`, `t.paragraphs` (mapped `<p>` with `dangerouslySetInnerHTML`), then a `.meet_pippi` div with a raw `<h2>{t.meetPippiHeading}</h2>` and `<img src="../../public/images/pippi_01.jpg" alt="Pippi" />` — no responsive sizing class, wrong path, no paragraph content, wrong heading level.
- `src/content/translations.ts`: `about.no/en` only has `heading` + `paragraphs`. Separately, top-level `meetPippi` and `meetPippiHeading` keys exist as `{no, en}` strings (not nested under `about`), and `About.tsx` reads `t.meetPippiHeading` where `t = translations.about[lang]` — this key does not exist on `translations.about`, so it currently renders `undefined`. There is no `meetPippiParagraphs` at all.
- `src/components/About.css`: minimal — `.about` (max-width 640px, centered), `.about__text p`, `.about__text strong`. No `.meet_pippi` styling exists at all, so the image renders at native size (too big).
- Reference patterns: `Gallery.css` shows the project's convention for images (`border-radius: 6px`, `object-fit: cover`, responsive grid with `clamp()` gaps); `globals.css` defines `img { display:block; max-width:100%; height:auto }` globally (base responsiveness already present, but nothing constrains the Pippi image's *max* real-world size, so a large source photo still renders huge) and design tokens (`--color-text-light`, `--section-padding`, etc.).

### Key Decisions
1. **Translation data shape**: Add `meetPippiHeading` and `meetPippiParagraphs` directly inside `translations.about.no` / `translations.about.en` (alongside `heading`/`paragraphs`), matching the existing `heading`/`paragraphs` pattern per the refactor doc's explicit instruction. The stray top-level `meetPippi`/`meetPippiHeading` keys are unused/misplaced legacy entries and will be left in place (out of scope to remove) but no longer relied on — `About.tsx` will read from `translations.about[lang].meetPippiHeading` instead.
2. **Heading hierarchy**: Use `<h3>` for "Møt Pippi"/"Meet Pippi" since the section's main heading (`t.heading`) is an `<h2>`, per refactor doc's explicit instruction not to double up `<h2>`.
3. **Image sizing approach**: Constrain via CSS on `.meet_pippi img` (or a dedicated class) using `max-width` (e.g. `320px`–`420px`, centered) + `width: 100%` + `height: auto` + `border-radius: 6px` to match `Gallery.css` conventions, rather than introducing a new grid/picture-set system — keeps the fix minimal and consistent with existing simple `<img>` usage in `About.tsx`.
4. **Layout**: Keep the Pippi block within the existing centered `.about` container (max-width 640px) as a vertically stacked block (heading, paragraphs, image) for both mobile and desktop — simplest option that satisfies the refactor doc (desktop side-by-side is explicitly optional/"gjerne", not mandatory) and avoids risking visual regressions.

### Proposed Changes
**`translations.ts`**
- Inside `about.no`, add:
  - `meetPippiHeading: 'Møt Pippi'`
  - `meetPippiParagraphs: [...]` — the 3 NO paragraphs from `refactor_02.md`.
- Inside `about.en`, add:
  - `meetPippiHeading: 'Meet Pippi'`
  - `meetPippiParagraphs: [...]` — the 3 EN paragraphs from `refactor_02.md`.

**`About.tsx`**
- Change `<h2>{t.meetPippiHeading}</h2>` to `<h3>{t.meetPippiHeading}</h3>`.
- Add a paragraphs block under the heading, mirroring the existing `t.paragraphs.map(...)` pattern:
  ```tsx
  <div className="meet_pippi">
    <h3>{t.meetPippiHeading}</h3>
    <div className="meet_pippi__text">
      {t.meetPippiParagraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
    <img className="meet_pippi__image" src="/images/pippi_01.jpg" alt="Pippi" />
  </div>
  ```
- Fix the image `src` from `../../public/images/pippi_01.jpg` to `/images/pippi_01.jpg` (correct Vite public asset path, matching convention seen in other components).

**`About.css`**
- Add spacing/rhythm rules for `.meet_pippi` (margin-top for separation from the story paragraphs above).
- Add `.meet_pippi__text p` color styling consistent with `.about__text p`.
- Add `.meet_pippi__image` (or `.meet_pippi img`) rules: `max-width` cap (e.g. `360px`), `width: 100%`, `height: auto`, `margin: 0 auto` (since `.about` is centered/`text-align:center`), `border-radius: 6px`, `object-fit: cover` if an aspect-ratio is set — matching `Gallery.css` visual conventions.
- Ensure no fixed large heights/widths are set, keep everything fluid to satisfy the mobile-first, no-horizontal-scroll requirement.

### File Structure
- Modify: `src/content/translations.ts` (add `meetPippiHeading` + `meetPippiParagraphs` under `about.no`/`about.en`).
- Modify: `src/components/About.tsx` (fix heading tag, add paragraphs render, fix image path/class).
- Modify: `src/components/About.css` (add `.meet_pippi` spacing + responsive image sizing rules).

### Risks
- The stray top-level `translations.meetPippi` / `translations.meetPippiHeading` keys are now unused by `About.tsx`; leaving them in place is intentional (avoids unrelated changes) but could look like dead code — acceptable per "don't change more than necessary" guidance in the refactor doc.
- Picking an exact `max-width` for the image is a judgment call since no explicit pixel value was given; will pick a size visually consistent with the `.about` container (max-width 640px) and gallery image scale.

# Testing

### Validation Approach
- Run `npm run lint` and `npm run build` (as explicitly requested in `refactor_02.md`) and confirm both exit with no errors.
- Visually reason through the rendered markup/CSS for both `lang = 'no'` and `lang = 'en'` to confirm heading, paragraphs, and image all display with the new translation keys populated (no `undefined` text).

### Key Scenarios
- NO locale: `about.no.meetPippiHeading` and `about.no.meetPippiParagraphs` render under the existing NO story text, then the image.
- EN locale: same check for `about.en.meetPippiHeading` / `meetPippiParagraphs`.
- Image loads from `/images/pippi_01.jpg` (verified file exists at `public/images/pippi_01.jpg`, so Vite serves it at root `/images/pippi_01.jpg`).

### Edge Cases
- Confirm the image CSS constrains max rendered size (no oversized image) while still respecting `img { max-width: 100%; height: auto }` from `globals.css` for narrow viewports.
- Confirm no double `<h2>` remains in the About section (only the main section heading is `<h2>`; Pippi heading is `<h3>`).

# Delivery Steps

### ✓ Step 1: Add Meet Pippi translation content
translations.ts exposes meetPippiHeading and meetPippiParagraphs for both locales under the about object.
- Add `meetPippiHeading: 'Møt Pippi'` and `meetPippiParagraphs: [...]` (3 paragraphs from refactor_02.md) inside `translations.about.no`.
- Add `meetPippiHeading: 'Meet Pippi'` and `meetPippiParagraphs: [...]` (3 paragraphs from refactor_02.md) inside `translations.about.en`.
- Keep existing `heading`/`paragraphs` fields and the unrelated top-level `meetPippi`/`meetPippiHeading` entries untouched.

### ✓ Step 2: Fix About.tsx markup: heading level, paragraphs, and image path
About.tsx renders the Pippi sub-section correctly under the existing story text with proper heading hierarchy and translated copy.
- Change the Pippi heading from `<h2>` to `<h3>` so it acts as a sub-heading of the section's `<h2>`.
- Render `t.meetPippiParagraphs` as mapped `<p>` elements (mirroring the existing `t.paragraphs.map` pattern) inside a `meet_pippi__text` wrapper.
- Fix the image `src` from `../../public/images/pippi_01.jpg` to `/images/pippi_01.jpg`, and add a `meet_pippi__image` class to the `img`.

### ✓ Step 3: Style the Meet Pippi block for spacing and responsive image sizing
The meet_pippi block has proper vertical spacing from the story text above and the Pippi image renders at a constrained, design-consistent size on both mobile and desktop.
- Add margin/spacing rules for `.meet_pippi` in `About.css` to separate it visually from the preceding paragraphs.
- Style `.meet_pippi__text p` consistent with `.about__text p` (color, spacing).
- Add `.meet_pippi__image` rules capping max-width (e.g. ~360px), `width: 100%`, `height: auto`, centered margin, and `border-radius: 6px` matching the `Gallery.css` visual convention, ensuring no horizontal overflow on mobile.

### ✓ Step 4: Verify build and lint pass
The project builds and lints cleanly with the updated About section.
- Run `npm run lint` and confirm no errors.
- Run `npm run build` and confirm it completes successfully.
- Manually trace through rendered output for both `no` and `en` locales to confirm heading, paragraphs, and image display as expected with no leftover `undefined` values.