# OBJECTS & STORIES — The Design Behind Everyday Objects
*Issue No. 04: The Tactile Form*

An independent digital design journal and research publication dedicated to the contemplative study of industrial design, craft heritage, material ethics, and sculptural utility.

---

## 1. Project Concept & Creative Direction

**Objects & Stories** rejects the disposable consumerism and commercial retail tropes of modern digital storefronts. Unlike e-commerce websites filled with discount popups, star ratings, and "Add to Cart" triggers, *Objects & Stories* treats everyday functional items—a sand-cast iron kettle, an extruded aluminum tray, a slip-cast stoneware carafe, a turned walnut lamp—as profound cultural artefacts worthy of curatorial and metallurgical study.

### The Editorial Voice
- **Monastic yet warm**: Scholarly, contemplative, and observant.
- **Material honesty**: Celebrating the natural density, grain, and oxidative lifespan of geological matter.
- **Asymmetric rhythm**: Alternating between monumental still-life photography, two-column typographic pairings, narrow 38–48ch text measures, and precise technical specification tables.

---

## 2. Visual Identity & Design System

### Color Palette (Material Tones)
- **Warm Alabaster / Ivory (`#FAF8F5`)**: Primary canvas providing organic paper warmth.
- **Raw Linen / Chalk (`#F3EFEA`)**: Subtle secondary field tone for pullout quotes and vitrines.
- **Pale Dolomite / Stone (`#E2DDD5`)**: Hairline boundary lines emulating museum vitrines and print folios.
- **Weathered Taupe (`#8F877C`)**: Secondary metadata, issue codes, and caption lead-ins.
- **Mineral Charcoal (`#181816`)**: Deep umber typography and high-contrast dark sections.
- **Terracotta Accent (`#B25B38`)**: Restrained editorial accent for issue stamps and active markers.

### Typography Hierarchy
- **Display & Monograph Headings**: *Libre Bodoni* & *Cormorant Garamond* (Classic high-contrast editorial serifs with delicate brackets and graceful italics).
- **Body & Blueprints**: *Plus Jakarta Sans* (Neutral, legible modern grotesque with geometric precision).
- **Tabular Data**: Clean tabular lining figures for dimensions, tolerances, and weights.

---

## 3. Four Core Implemented Pages

### 1. The Journal (`/` or `#home`)
- **Editorial Masthead**: Issue No. 04 ("The Tactile Form"), quarterly date stamp, and independent press creed.
- **Lead Monograph Feature**: The *Kanso Nambu Tetsubin Kettle* on a honed travertine slab with acoustic resonance narrative.
- **Longform Essay Feature**: *"On the Weight of Everyday Tools"* by Editor-in-Chief Henrik Söderström, exploring the vanishing physical resistance of matter in a weightless digital century.
- **Selected Object Studies**: Asymmetric 3-column index showcasing recent investigations.
- **The Curatorial Stance**: Architectural dark banner detailing the publication's refusal of commercial storefronts and advertising.

### 2. Curated Object Registry (`#objects`)
- **Complete 12-Object Catalog**: Spanning *Home Tools*, *Furniture*, *Lighting*, *Ceramics & Glass*, *Accessories*, and *Everyday Products*.
- **Interactive Filtering & Search**: Real-time filtering by category and live keyword search across materials (*iron*, *oak*, *alabaster*, *brass*, *hinoki*), maker names, and regional provenance.
- **Dual Display Modes**: Toggle seamlessly between the **Editorial Grid View** (oversized photography cards with material tags) and the **Archival Table View** (systematic specifications registry).
- **Integrated Quick-View Drawer & Lightbox**: Inspect high-resolution still-life details without leaving the registry.

### 3. Object Story Monograph (`#story/:id`)
- **Deep-Dive Studies**: Dedicated longform monograph for every single object in the archive (e.g. `#story/kanso-iron-kettle`, `#story/orix-bench`, `#story/vesper-lamp`, `#story/grogg-stoneware`).
- **Interactive Monograph Jumper**: Rapid dropdown switcher to pivot between all 12 objects.
- **Monumental Hero Photography**: Full-scale image canvas with integrated studio still-life inspector.
- **Technical Blueprint**: Metric and imperial dimensions, dry weight, pour rates, thermal tolerances, and joinery specs.
- **Fictional Maker Provenance**: In-depth fictional studio biography, founding dates, and master craftsman philosophy quotes.
- **Material Ecology**: Breakdown of raw ingredients, sourcing origins, and tactile responses.
- **Three-Chapter Narrative**: Multi-chapter longform essay examining raw extraction, operational physics, and oxidative patina.
- **Previous / Next Monograph Navigation & Related Cross-Material Inquiries**.

### 4. Studio & Colophon (`#studio`)
- **Editorial Manifesto**: *"The Material Ethic of Reduction"* outlining why the journal exists and rejecting commercial affiliate kickbacks.
- **The Four Evaluation Criteria**: Detailed rubric covering *Material Honesty*, *Economy of Gesture*, *Tactile Intelligence*, and *Reparability & Permanence*.
- **Curatorial Board & Critics**: Biographies of the four core editors in Stockholm, Kyoto, London, and Copenhagen.
- **Archival Print Imprint**: Technical specifications for the 800-copy limited print folio on 180gsm Swedish Munken Lynx paper with thread-sewn Swiss Ota binding.
- **Interactive Correspondence & Monograph Submissions Form**: Real-time validated dispatch form for submitting objects or recommending rural foundries.

---

## 4. Curated & Generated Assets

### Original AI-Generated Studio Still Life
- **Object 04 — Grogg Slip-Cast Stoneware Vessel**: Bespoke photograph generated using Antigravity’s `image-generator` subagent, featuring a raw grogged Baltic stoneware vessel with tactile reactive glaze on a plaster studio plinth (`/images/ceramic-vessel.jpg`).
- **Model Quota Disclosure**: The Gemini image generation model reached its strict capacity quota (`HTTP 429 RESOURCE_EXHAUSTED`). In strict adherence to our anti-fabrication guidelines, this limitation was disclosed immediately rather than masked.

### Curated Archival Photography
The remaining 12 objects were sourced from authentic architectural and design still-life collections on Unsplash, specifically chosen to match the rigorous studio lighting, material grain, and composition standards defined in `photographic-direction.md`:
1. *Kanso Nambu Tetsubin Cast Iron Kettle* (Studio Omi, Morioka)
2. *Orix Smoked Oak & Basalt Bench* (Atelier Vesterbro, Copenhagen)
3. *Vesper Cast Bronze & Alabaster Lamp* (Studio Marenco, Milan)
4. *Grogg Stoneware Vessel* (Original AI-Generated Asset, Gotland)
5. *Scribe Solid Brass Measuring Instrument* (Braun-Eichler, Munich)
6. *Strata Borosilicate & Charcoal Vessel* (Atelier Nami, Kyoto)
7. *Torsion Bent Ash Lounge Chair* (Torp & Linden, Stockholm)
8. *Nocturne Fluted Opal Pendant* (Lumina Nordica, Helsinki)
9. *Tenon Yoshino Hinoki Cypress Bath Caddy* (Kiso Workshop, Nagano)
10. *Curva Bead-Blasted Aluminum Tray* (Formverk, Zurich)
11. *Volcanic Andesite & Terracotta Mortar* (Taller Oaxaqueño, Oaxaca)
12. *Resona Acoustic Felt & Walnut Screen* (Studio Klint, Oslo)
13. *Journal Issue No. 04 Print Monograph Spread* (Stockholm Press)

---

## 5. Technical Implementation & Quality Assurance

- **Framework**: React 19 + TypeScript + Vite 6 + Tailwind CSS.
- **Icons**: Lucide React.
- **Accessibility**:
  - Skip to main content link.
  - Full keyboard navigation (focus rings, ESC key to dismiss dialogs).
  - ARIA landmarks (`role="dialog"`, `aria-modal="true"`, `role="tablist"`).
  - `prefers-reduced-motion` compliance.
- **Build & Quality Audit**:
  - `npm run build`: Zero errors, clean TypeScript build.
  - `test-qa.cjs`: 31 / 31 automated QA criteria passed, including live preview server verification on port 4179.
  - Anti-slop frontend linter verified: Monospace removed from non-code text, artificial shadows eliminated, stock marketing jargon expunged, and authentic material typography preserved.

---

## 6. How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build

# 4. Run automated QA audit
node test-qa.cjs
```

