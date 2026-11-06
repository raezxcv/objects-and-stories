import { DesignObject } from '../types';

export const DESIGN_OBJECTS: DesignObject[] = [
  {
    id: 'kanso-iron-kettle',
    code: 'OBJ. 01 / 12',
    title: 'Kanso Nambu Tetsubin Kettle',
    subtitle: 'Sand-cast raw iron boiling vessel with turned walnut lid finial',
    category: 'tools',
    categoryLabel: 'Home Tools',
    year: 2024,
    maker: {
      name: 'Kenzo Omi',
      studio: 'Studio Omi Works',
      location: 'Morioka, Iwate Prefecture, Japan',
      yearEstablished: 1978,
      discipline: 'Cast Iron Metallurgist & Craftsman',
      philosophy: 'The kettle does not decorate the hearth; it anchors the room in geological gravity.',
      bio: 'Trained under third-generation master casters in Iwate, Kenzo Omi blends four-hundred-year-old Nambu sand-mold techniques with reductive geometric silhouettes inspired by modern industrial minimalism.'
    },
    origin: 'Morioka, Iwate Prefecture, Japan',
    dimensions: {
      metric: '185 × 160 × 210 mm',
      imperial: '7.3 × 6.3 × 8.25 in',
      weight: '2.14 kg (empty)'
    },
    materials: [
      {
        name: 'Sand-Cast Grey Iron',
        detail: 'High-purity domestic pig iron poured into dry river-sand molds',
        sourcing: 'Smelted and recycled in Iwate foundries',
        tactility: 'Dense, subtly dimpled wabi-sabi tooth with heat-retaining heft'
      },
      {
        name: 'Urushi & Tea Tannin Glaze',
        detail: 'Natural baked sap coating bonded at 350°C to inhibit oxidation',
        sourcing: 'Harvested from Japanese poison sumac trees',
        tactility: 'Matte, dry, satin eggshell finish'
      },
      {
        name: 'Turned American Black Walnut',
        detail: 'Cold-touch isolated lid finial turned from kiln-dried timber heartwood',
        sourcing: 'Responsibly managed forestry cooperatives',
        tactility: 'Smooth oil-rubbed grain that warms gently under vapor'
      }
    ],
    productionMethod: 'Hand-packed river sand casting, open-hearth baking, hand-chiseled mold seams.',
    edition: 'Numbered batch production, 48 kettles per quarter (Fictional Concept)',
    imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80',
    isAiGenerated: false,
    imageCredit: 'Studio Still Life / Curated Archival Selection',
    summary: 'A study in the physics of thermal retention and auditory clarity. When water reaches a simmer within the Kanso kettle, iron nodules tuned inside the vessel produce a low harmonic resonance known in classical tea ceremony as wind in the pines.',
    designHistory: 'Originating in 17th-century Tohoku, the tetsubin was born when the portable chagama kettle acquired a pouring spout and overhead bail. Studio Omi stripped away decorative dragon-tail spouts and embossed cloud patterns, leaving only a pure tapered cone that channels boiling water in a continuous laminar stream.',
    narrative: {
      chapter1Title: 'I. The Mold in the Sand',
      chapter1Text: 'Before iron is poured, it exists as an absence in moistened river sediment. Kenzo Omi packs a composite of fine volcanic silica and clay dust around a hand-turned wooden plug. When the plug is lifted, the air inside smells of damp cellar floor and iron dust. The iron itself—smelted from scrap railway couplings and high-purity ingots—arrives at 1,380 degrees Celsius, blindingly orange and flowing like liquid honey.',
      chapter2Title: 'II. The Acoustic Core',
      chapter2Text: 'Most modern electric kettles roar with turbulent boiling bubbles against thin stamped stainless steel. The Kanso kettle, by contrast, relies on a three-millimeter wall thickness that dampens violent cavitation. Inside the base, two small iron resonance flaps (hibiki-gane) vibrate gently as micro-bubbles form, turning the boiling water into a muted, musical hum that signals readiness without screeching.',
      chapter3Title: 'III. Patina as Biography',
      chapter3Text: 'Cast iron is not inert; it remembers its environment. Each boil deposits a minuscule mineral skin of calcium and silica on the interior walls, softening the pH of subsequent infusions. On the exterior, the natural urushi sap finish absorbs hand oils, deepening from charcoal grey toward a lustrous mineral bronze over decades of daily ritual.',
      pullQuote: {
        text: 'True utility does not scream for attention. It simply settles into the palm with the reassuring certainty of stone.',
        attribution: 'Kenzo Omi',
        title: 'Master Caster, Studio Omi'
      }
    },
    specifications: [
      { label: 'Volume Capacity', value: '1.2 Litres (Safe boil: 0.95L)' },
      { label: 'Heat Source Compatibility', value: 'Induction (IH), Gas, Radiant, Charcoal Brazier' },
      { label: 'Pour Rate', value: 'Laminar gravity stream, 18ml / second' },
      { label: 'Lid Fit Tolerance', value: '±0.15 mm air-seal vapor rim' },
      { label: 'Finish Preservation', value: 'Natural water-rinsed air dry; no detergents' }
    ],
    relatedIds: ['grogg-stoneware', 'strata-glass-vessel', 'tenon-cypress-caddy'],
    acousticResonance: {
      label: 'Hibiki-Gane Thermal Cavitation',
      note: 'A4 / 432 Hz',
      hz: 432,
      description: 'Subtle harmonic hum generated by the base iron flaps as boiling bubbles form.'
    },
    patinaTimeline: [
      {
        year: 'Year 0 (Foundry)',
        stageName: 'Matte Ash Urushi',
        description: 'Charcoal grey mineral surface with dry baked urushi sap and fine silica grain.',
        tactileShift: 'Crisp, chalk-like mineral tooth'
      },
      {
        year: 'Year 5 (Domestic Use)',
        stageName: 'Tannin Bronze Luster',
        description: 'Repeated contact with boiling steam and tea tannins deepens the exterior toward graphite bronze.',
        tactileShift: 'Silky, warm eggshell sheen'
      },
      {
        year: 'Year 25 (Heirloom)',
        stageName: 'Mineral Yobitsugi Crust',
        description: 'Interior develops an impervious white calcium-carbonate protective skin; exterior shines like oiled basalt.',
        tactileShift: 'Honed river-stone smoothness'
      }
    ]
  },
  {
    id: 'orix-bench',
    code: 'OBJ. 02 / 12',
    title: 'Orix Smoked Oak & Basalt Bench',
    subtitle: 'Monolithic seating architecture with exposed wedge joinery',
    category: 'furniture',
    categoryLabel: 'Furniture',
    year: 2023,
    maker: {
      name: 'Freja & Johan Lindqvist',
      studio: 'Atelier Vesterbro',
      location: 'Copenhagen, Denmark',
      yearEstablished: 2011,
      discipline: 'Architectural Woodworking & Joinery',
      philosophy: 'A bench should feel less like a purchased consumer object and more like a permanent threshold between rooms.',
      bio: 'Operating out of an old maritime warehouse in Copenhagen’s South Harbour, Atelier Vesterbro interrogates monumental scale through traditional timber mortise joinery and untreated quarried stone.'
    },
    origin: 'Copenhagen, Denmark',
    dimensions: {
      metric: '2200 × 380 × 440 mm',
      imperial: '86.6 × 15.0 × 17.3 in',
      weight: '68 kg'
    },
    materials: [
      {
        name: 'Smoked European Quercus Oak',
        detail: 'Fumed with natural ammonia vapor for 72 hours to darken wood tannins throughout the core',
        sourcing: 'FSC-certified managed forests in Jutland',
        tactility: 'Deep, open-pore grain with soft matte beeswax protection'
      },
      {
        name: 'Flamed Swedish Basalt',
        detail: 'Quarried volcanic basalt pillars, hand-split and flame-textured for slip resistance',
        sourcing: 'Skåne quarry, southern Sweden',
        tactility: 'Rough-hewn mineral tooth, cool to touch, absorbing floor vibrations'
      }
    ],
    productionMethod: 'Seven-axis waterjet stone profiling, hand-chiseled mortise through-tenons with bog-oak lock wedges.',
    edition: 'Commissioned studio edition, 12 pieces per annum (Fictional Concept)',
    imageUrl: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
    isAiGenerated: false,
    imageCredit: 'Studio Still Life / Curated Archival Selection',
    summary: 'Conceived as an architectural anchor for entrance halls and gallery corridors. The massive smoked oak beam hovers five millimeters above the basalt pedestals on hidden neoprene dampeners, creating a visual tension between crushing gravity and buoyant cantilever.',
    designHistory: 'Influenced by the elemental monastic furniture of Dom Hans van der Laan and the primitive strength of Nordic church pews, the Orix Bench discards all metal hardware. Every load-bearing point relies purely on the compression of oak against flamed stone.',
    narrative: {
      chapter1Title: 'I. Fuming the Grain',
      chapter1Text: 'Unlike stains or surface varnishes that choke wood pores under a plastic skin, fuming relies on a biochemical reaction. The solid European oak planks are sealed inside an airtight chamber where natural vapor reacts with the tree’s natural gallic acid tannins. The color darkens from the core outward, producing a luminous grey-black that cannot wear off or chip away.',
      chapter2Title: 'II. The Gravity of Stone',
      chapter2Text: 'The twin pedestal blocks are quarried from basalt formed three hundred million years ago during tectonic upheavals in southern Sweden. Their mass acts as an acoustic sink: sitting down produces no creaks or flex, only an immediate sense of spatial rootedness.',
      chapter3Title: 'III. Tolerances of Living Matter',
      chapter3Text: 'Wood continues to expand and contract across seasonal humidity shifts, while basalt remains resolutely stationary. The Lindqvists engineered elongated through-mortises that permit four millimeters of longitudinal expansion without binding the joinery wedges.',
      pullQuote: {
        text: 'When you take away brackets, screws, and adhesives, you are forced to tell the absolute truth with the chisel.',
        attribution: 'Johan Lindqvist',
        title: 'Joinery Director, Atelier Vesterbro'
      }
    },
    specifications: [
      { label: 'Seating Capacity', value: '3 to 4 adults' },
      { label: 'Load Rating', value: '450 kg distributed load' },
      { label: 'Joinery Type', value: 'Wedged through-tenon (Bog Oak keys)' },
      { label: 'Maintenance', value: 'Semi-annual cold-pressed walnut oil rub' }
    ],
    relatedIds: ['torsion-lounge-chair', 'resona-felt-screen', 'kanso-iron-kettle']
  },
  {
    id: 'vesper-lamp',
    code: 'OBJ. 03 / 12',
    title: 'Vesper Bronze & Spanish Alabaster Lamp',
    subtitle: 'Sculptural table luminaire with turned translucent dome',
    category: 'lighting',
    categoryLabel: 'Lighting',
    year: 2024,
    maker: {
      name: 'Camilla Marenco',
      studio: 'Studio Marenco Luce',
      location: 'Milan, Italy',
      yearEstablished: 2016,
      discipline: 'Architectural Lighting & Bronze Casting',
      philosophy: 'Light should not strike the eye directly; it should filter through stone as morning mist filters through alpine ridges.',
      bio: 'Trained at the Politecnico di Milano, Camilla Marenco designs luminaires that exist as solemn abstract sculptures by daylight and intimate, atmospheric hearths by night.'
    },
    origin: 'Milan & Zaragoza, Italy / Spain',
    dimensions: {
      metric: '240 × 240 × 310 mm',
      imperial: '9.4 × 9.4 × 12.2 in',
      weight: '4.8 kg'
    },
    materials: [
      {
        name: 'Cast Statuary Bronze',
        detail: 'Lost-wax cast bronze base with hand-rubbed hepatic liver-of-sulphur patina',
        sourcing: 'Artisanal foundry in Brianza, Lombardy',
        tactility: 'Velvety cold metal with subtle cast pitting and warm olive undertones'
      },
      {
        name: 'Aragon Spanish Alabaster',
        detail: 'Turned on a precision lathe from single mineral boulders',
        sourcing: 'Historic quarries in Fuentes de Ebro, Aragon',
        tactility: 'Silky, cool, satin-honed stone surface showing natural amber veining'
      }
    ],
    productionMethod: 'Lost-wax centrifugal bronze casting, diamond-tooled stone turning, custom discrete 2200K warm LED core.',
    edition: 'Numbered studio release, 60 pieces worldwide (Fictional Concept)',
    imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80',
    isAiGenerated: false,
    imageCredit: 'Studio Still Life / Curated Archival Selection',
    summary: 'A study in mineral translucency. Alabaster, unlike glass, possesses a crystalline gypsum lattice that refracts light internally, producing a soft, non-directional amber illumination that completely eliminates eye fatigue.',
    designHistory: 'Alabaster was the primary glazing material of Mediterranean basilicas before the widespread manufacture of float glass. Studio Marenco reclaimed this liturgical material, pairing it with the muscular density of a patinated bronze plinth.',
    narrative: {
      chapter1Title: 'I. Turning the Gypsum Boulder',
      chapter1Text: 'Alabaster is paradoxical: it is a rock, yet soft enough to score with a fingernail. Turning a 240mm hemisphere requires gentle lathe spindle speeds and diamond-coated scrapers. As the stone wall approaches six millimeters, it suddenly transitions from opaque chalk to a glowing parchment-like translucency.',
      chapter2Title: 'II. The Thermal Sink of Bronze',
      chapter2Text: 'High-CRI LED emitters generate concentrated heat that degrades stone over time if improperly dissipated. The lost-wax bronze pedestal acts as a monumental passive heatsink, drawing thermal energy downward away from the alabaster dome and warming the desk surface imperceptibly.',
      chapter3Title: 'III. Dialing Twilight',
      chapter3Text: 'A rotary potentiometer machined from solid knurled bronze allows stepless dimming from 3 lumens (an embers-like glow) up to 450 lumens, calibrated precisely along the Planckian black-body locus from 1800K to 2400K.',
      pullQuote: {
        text: 'The best light does not reveal everything at once. It invites the room to hold its quiet secrets.',
        attribution: 'Camilla Marenco',
        title: 'Creative Director, Studio Marenco Luce'
      }
    },
    specifications: [
      { label: 'Luminous Flux', value: '3 to 450 Lumens (Continuous rotary dimmer)' },
      { label: 'Color Temperature', value: '1800K – 2400K (Warm candlelight spectrum)' },
      { label: 'Color Rendering Index', value: 'CRI 98+ (R9 > 95)' },
      { label: 'Power Consumption', value: '7.5W Max (Integrated USB-C braided cable)' }
    ],
    relatedIds: ['nocturne-pendant', 'scribe-brass-tool', 'grogg-stoneware']
  },
  {
    id: 'grogg-stoneware',
    code: 'OBJ. 04 / 12',
    title: 'Grogg Slip-Cast Stoneware Vessel',
    subtitle: 'High-grogged raw ceramic carafe with tactile reactive glaze',
    category: 'ceramics',
    categoryLabel: 'Ceramics & Glass',
    year: 2024,
    maker: {
      name: 'Astrid Hällström',
      studio: 'Hällström Keramik',
      location: 'Gotland, Sweden',
      yearEstablished: 2018,
      discipline: 'Ceramicist & Clay Formulator',
      philosophy: 'Clay is crushed geology. When you hold a ceramic cup, you are touching decomposed granite and thirty thousand years of volcanic sedimentation.',
      bio: 'Working from an isolated timber workshop on the Baltic island of Gotland, Astrid Hällström harvests wild clay seams and local beach sand, blending rough mineral grog into slip-cast vessels of pure sculptural poise.'
    },
    origin: 'Gotland, Sweden',
    dimensions: {
      metric: '140 × 140 × 260 mm',
      imperial: '5.5 × 5.5 × 10.2 in',
      weight: '1.38 kg'
    },
    materials: [
      {
        name: 'Grogged Baltic Stoneware',
        detail: 'Wild clay slip blended with 25% coarse crushed chamotte / grog for structural tooth',
        sourcing: 'Coastal clay pits and recycled bisque scrap, Gotland',
        tactility: 'Rough, sandpaper-fine tactile tooth that provides secure grip even when wet'
      },
      {
        name: 'Feldspathic Matte Glaze',
        detail: 'High-fire wood-ash and potassium feldspar glaze applied only to the interior pour lip',
        sourcing: 'Locally fired birch wood ash and feldspar quarry dust',
        tactility: 'Smooth, glass-like interior slip for direct cleaning and hygienic beverage storage'
      }
    ],
    productionMethod: 'Plaster mold slip-casting, hand-carved pour rim, wood-gas reduction firing at 1,280°C.',
    edition: 'Original AI-generated Studio Monograph Asset / Limited Craft Batch',
    imageUrl: '/images/ceramic-vessel.jpg',
    isAiGenerated: true,
    imageCredit: 'Antigravity Studio Image-Generator (Original Bespoke Asset)',
    summary: 'A tactile vessel designed for decanting water, wine, or wild infusions. The exterior remains completely unglazed, leaving the raw mineral clay exposed to the user’s fingertips, while the interior is lined with a smooth, hygienic wood-ash slip.',
    designHistory: 'Rooted in the functional earthenware of Nordic coastal settlements, where ceramics had to endure salt air and woodfire stoves. Hällström removed decorative painted slips and applied relief, allowing the vessel’s dramatic stepped silhouette to become its sole ornamental gesture.',
    narrative: {
      chapter1Title: 'I. The Grog and the Slurry',
      chapter1Text: 'Grog is pre-fired ceramic ground into coarse granules like sea sand. When added to liquid clay slurry, it prevents shrinkage fractures during the intense 1,280-degree firing. Astrid mixes the slurry by hand, testing its viscosity with a wooden paddle until it flows like thick buttermilk into three-part plaster molds.',
      chapter2Title: 'II. The Architecture of the Lip',
      chapter2Text: 'Nothing frustrates an everyday ritual like a dripping spout. Astrid bevels each vessel’s pouring lip with a dampened boxwood tool while the clay is leather-hard. The resulting 45-degree knife edge shears water cleanly, dropping the final droplet back into the carafe rather than running down the exterior body.',
      chapter3Title: 'III. The Scent of Warm Stone',
      chapter3Text: 'Because the exterior ceramic remains porous and unglazed, filling the vessel with chilled spring water triggers subtle evaporative cooling, lowering the water temperature by two to three degrees while releasing the faint, comforting aroma of rain on dry summer shale.',
      pullQuote: {
        text: 'The hand is hungry for texture in a world flattened by Gorilla Glass. Clay feeds that hunger.',
        attribution: 'Astrid Hällström',
        title: 'Master Potter, Hällström Keramik'
      }
    },
    specifications: [
      { label: 'Volume Capacity', value: '1.15 Litres' },
      { label: 'Firing Temperature', value: 'Cone 10 Reduction (1,280°C)' },
      { label: 'Water Absorption Rate', value: '< 0.5% (Vitrified stoneware body)' },
      { label: 'Food Safety', value: 'Lead-free, cadmium-free certified glaze interior' }
    ],
    relatedIds: ['strata-glass-vessel', 'kanso-iron-kettle', 'terracotta-mortar']
  },
  {
    id: 'scribe-brass-tool',
    code: 'OBJ. 05 / 12',
    title: 'Scribe Solid Brass Measuring & Pen Tool',
    subtitle: 'Precision-machined naval brass drafting instrument with micro-knurling',
    category: 'accessories',
    categoryLabel: 'Accessories',
    year: 2024,
    maker: {
      name: 'Felix Braun & Clara Eichler',
      studio: 'Werkstatt Braun-Eichler',
      location: 'Munich, Germany',
      yearEstablished: 2014,
      discipline: 'Precision Instruments & Horological Tooling',
      philosophy: 'A tool should be balanced like a surgical scalpel and constructed with the durability of a bridge truss.',
      bio: 'Combining aerospace-grade CNC tolerances with hand-applied horological satin brushing, Braun-Eichler produces instruments that hone the everyday act of thinking, sketching, and noting.'
    },
    origin: 'Munich, Bavaria, Germany',
    dimensions: {
      metric: '142 × 11.5 mm diameter',
      imperial: '5.6 × 0.45 in diameter',
      weight: '62 grams'
    },
    materials: [
      {
        name: 'CZ112 Naval Brass Alloy',
        detail: 'Copper-zinc-tin alloy engineered for marine environment corrosion resistance',
        sourcing: 'Precision metallurgical extrusions from Baden-Württemberg',
        tactility: 'Substantial, balanced density with natural antibacterial copper ionization'
      },
      {
        name: 'Black PVD Hardened Stainless Clip',
        detail: 'Titanium-carbon vapor deposition on spring-tempered surgical steel',
        sourcing: 'Solingen blade steel suppliers',
        tactility: 'Snappy, resolute tension that grips heavy cardstock and leather journals'
      }
    ],
    productionMethod: 'Swiss-style lathe turning from single billet bar, diamond micro-knurling, dry tumbling in walnut shells.',
    edition: 'Standard production with unique laser-engraved serial code (Fictional Concept)',
    imageUrl: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=1200&q=80',
    isAiGenerated: false,
    imageCredit: 'Studio Still Life / Curated Archival Selection',
    summary: 'A writing and drafting instrument turned from a single rod of solid naval brass. Weighted precisely at a 42% forward ratio, the pen uses gravity rather than muscular pressure to deposit pigment, eliminating hand cramping during extended drafting sessions.',
    designHistory: 'Inspired by 1930s surveyor instruments and naval navigational dividers, the Scribe pen features no threaded plastic internal couplings. The cap snaps into place using a hidden neodymium magnetic detent that produces a crisp, haptic mechanical confirmation.',
    narrative: {
      chapter1Title: 'I. Turning from Billet',
      chapter1Text: 'A Swiss-type sliding-head lathe spins naval brass bar stock at 4,000 RPM while micro-carbide cutters shave away ribbon-thin spirals of golden swarf. The exterior knurling is pressed, not cut, displacing the metal to create a microscopic diamond texture that prevents slippage without biting into the finger pads.',
      chapter2Title: 'II. The Center of Gravity',
      chapter2Text: 'Most disposable pens are back-heavy, forcing the index and middle fingers to continuously squeeze the barrel to maintain paper contact. Braun-Eichler engineered a stepped internal bore that concentrates the mass immediately forward of the knurled section.',
      chapter3Title: 'III. Patina as Personal Topography',
      chapter3Text: 'Naval brass contains approximately 1% tin, which retards tarnishing without preventing the natural formation of a rich amber-brown oxide. Within three months of daily use, the pen records the owner’s specific grip pattern in subtle tonal variations.',
      pullQuote: {
        text: 'The best tools don’t distract with clever mechanisms. They disappear into the flow of thought.',
        attribution: 'Felix Braun',
        title: 'Co-Founder, Werkstatt Braun-Eichler'
      }
    },
    specifications: [
      { label: 'Refill Standard', value: 'Parker-style G2 refill (Schmidt / Fisher Space Pen compatible)' },
      { label: 'Weight Balance Point', value: '42% from tip (Forward bias)' },
      { label: 'Closure Mechanism', value: 'Neodymium magnetic ring seal (3.2 N pull force)' },
      { label: 'Surface Finish', value: 'Raw unlacquered satin; self-oxidizing' }
    ],
    relatedIds: ['curva-aluminum-tray', 'vesper-lamp', 'resona-felt-screen']
  },
  {
    id: 'strata-glass-vessel',
    code: 'OBJ. 06 / 12',
    title: 'Strata Borosilicate & Charcoal Vessel',
    subtitle: 'Hand-blown laboratory glass carafe with immersed binchotan carbon core',
    category: 'everyday',
    categoryLabel: 'Everyday Products',
    year: 2023,
    maker: {
      name: 'Ren & Saki Nami',
      studio: 'Atelier Nami',
      location: 'Kyoto, Japan',
      yearEstablished: 2017,
      discipline: 'Glassblowing & Functional Wares',
      philosophy: 'Water is the most humble element in our homes. The vessel that serves it should match its quiet purity.',
      bio: 'Atelier Nami combines Kyoto cold-working glass traditions with precision borosilicate laboratory glassblowing, creating everyday objects that turn mundane hydration into a quiet visual meditation.'
    },
    origin: 'Kyoto, Japan',
    dimensions: {
      metric: '95 × 95 × 290 mm',
      imperial: '3.75 × 3.75 × 11.4 in',
      weight: '620 grams'
    },
    materials: [
      {
        name: '3.3 Thermal Shock Borosilicate Glass',
        detail: 'Low-expansion laboratory-grade glass resistant to thermal shocks up to 150°C',
        sourcing: 'Precision tube formulations from Germany and Japan',
        tactility: 'Ultralight, razor-crisp acoustic ping, chemically inert clarity'
      },
      {
        name: 'Kishu Binchotan Oak Charcoal',
        detail: 'Whole ubame oak branch carbonized at 1,000°C with mineral white ash coat',
        sourcing: 'Wakayama Prefecture certified master kilns',
        tactility: 'Dense, metallic ring when tapped, porous microscopic filtration lattice'
      },
      {
        name: 'Turned Alentejo Raw Cork',
        detail: 'Acoustic seal stopper hand-turned from sustainably harvested cork bark',
        sourcing: 'Alentejo oak groves, Portugal',
        tactility: 'Elastic, velvety organic warmth, natural antimicrobial barrier'
      }
    ],
    productionMethod: 'Lampwork torch manipulation, oxygen-hydrogen flame annealing, water-bath diamond flat grinding.',
    edition: 'Continuous production (Fictional Concept)',
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
    isAiGenerated: false,
    imageCredit: 'Studio Still Life / Curated Archival Selection',
    summary: 'A minimalist hydration pillar that displays the ancient Japanese practice of Binchotan charcoal water purification. Suspended inside the transparent cylinder, the dark carbon branch absorbs chlorine and heavy metals while remineralizing tap water with calcium and potassium.',
    designHistory: 'While modern consumer water filters hide their plastic cartridges behind bulky opaque pitchers, the Strata vessel celebrates filtration as an open, sculptural process. The dark carbon branch floats like an ink brush stroke within liquid glass.',
    narrative: {
      chapter1Title: 'I. The Flame and the Tube',
      chapter1Text: 'Working with borosilicate glass requires an intense gas-oxygen torch that burns at 1,600 degrees Celsius. Ren rotates the heavy-walled hollow cylinder in the flame, using graphite paddles to form the sharp, drip-free rim and flat stable base without creating internal stress lines.',
      chapter2Title: 'II. The Million Pores of Ubame Oak',
      chapter2Text: 'Binchotan charcoal is not ordinary briquette charcoal; it is made from dense Japanese Holm oak fired in sealed earthen kilns for two weeks. When cut in cross-section, one gram of Binchotan possesses a microscopic surface area equivalent to three tennis courts, actively adsorbing volatile organic compounds.',
      chapter3Title: 'III. Domestic Stillness',
      chapter3Text: 'Watching the Strata vessel sit on a dining table or bedside console reminds the inhabitant of the slow passage of time. Fine micro-bubbles cling to the charcoal bark, rising lazily through the column like effervescent pearls.',
      pullQuote: {
        text: 'When design is transparent, the object stops demanding praise and simply serves life.',
        attribution: 'Saki Nami',
        title: 'Glassblower, Atelier Nami'
      }
    },
    specifications: [
      { label: 'Capacity', value: '1.4 Litres' },
      { label: 'Thermal Range', value: '-20°C to +150°C (Dishwasher safe)' },
      { label: 'Filter Lifespan', value: '3 months per Binchotan branch (Rechargeable via boiling)' },
      { label: 'Weight Balance', value: 'Ultra-low center of gravity to prevent tipping' }
    ],
    relatedIds: ['grogg-stoneware', 'kanso-iron-kettle', 'tenon-cypress-caddy']
  },
  {
    id: 'torsion-lounge-chair',
    code: 'OBJ. 07 / 12',
    title: 'Torsion Steam-Bent Ash & Bridle Leather Chair',
    subtitle: 'Low-slung reading chair with tensioned vegetable-tanned saddle sling',
    category: 'furniture',
    categoryLabel: 'Furniture',
    year: 2024,
    maker: {
      name: 'Elin Torp & Mårten Linden',
      studio: 'Studio Torp & Linden',
      location: 'Stockholm, Sweden',
      yearEstablished: 2015,
      discipline: 'Timber Steam-Bending & Leathercraft',
      philosophy: 'A chair is not an upholstered mountain; it is a structural skeleton designed to suspend the human spine in gentle decompression.',
      bio: 'Known for their minimalist timber experiments, Torp & Linden utilize steam chambers to push solid northern European hardwoods to their structural yield limits.'
    },
    origin: 'Stockholm & Småland, Sweden',
    dimensions: {
      metric: '760 × 840 × 710 mm',
      imperial: '29.9 × 33.1 × 27.9 in',
      weight: '11.2 kg'
    },
    materials: [
      {
        name: 'Steam-Bent Swedish White Ash',
        detail: 'High-flexibility continuous timber arcs formed over custom aluminum jigs',
        sourcing: 'Småland sustainable forests',
        tactility: 'Silky soap-finished blonde wood with sweeping grain lines'
      },
      {
        name: 'Full-Grain Vegetable-Tanned Bridle Leather',
        detail: '3.8mm thick un-split steerhide soaked in mimosa and chestnut bark liquors for six weeks',
        sourcing: 'Tärnsjö Garveri, Sweden',
        tactility: 'Firm, supportive leather sling that softens and patinas to deep amber with use'
      },
      {
        name: 'Solid Brass Saddle Rivets',
        detail: 'Hand-peened copper-backed brass burrs holding tension points',
        sourcing: 'Eskilstuna hardware smiths',
        tactility: 'Flush-polished metallic accents'
      }
    ],
    productionMethod: 'High-pressure steam bending, CNC mortise indexing, hand-stitched saddle leatherwork.',
    edition: 'Small-batch workshop production, 24 chairs / year (Fictional Concept)',
    imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80',
    isAiGenerated: false,
    imageCredit: 'Studio Still Life / Curated Archival Selection',
    summary: 'A lounge chair designed around the principle of structural torsion. Two continuous steam-bent ash loops form the entire legs, armrests, and backrest framework, eliminating bulky cushions in favor of a self-tensioning bridle leather sling.',
    designHistory: 'Drawing from Bruno Mathsson’s 1930s bentwood studies and traditional equestrian harness craftsmanship, the Torsion chair replaces petrochemical foams and composite boards with completely biodegradable, circular materials.',
    narrative: {
      chapter1Title: 'I. The Memory of Steam',
      chapter1Text: 'Freshly cut ash timber contains up to 30% moisture. Placed inside a 100°C steam chamber for ninety minutes, the lignin binding the wood fibers softens into pliable jelly. Elin and Mårten have exactly four minutes to pull the steaming timber from the chamber and clamp it around curved aluminum mandrels before the lignin re-solidifies.',
      chapter2Title: 'II. The Vegetable Tannery',
      chapter2Text: 'Most commercial leather is tanned in twenty-four hours using toxic chromium salts, leaving leather that feels synthetic and never ages gracefully. The bridle leather used here spends two months in wooden vats filled with bark liquor from Swedish chestnut and spruce trees, yielding an organic hide that breathes and yields gracefully.',
      chapter3Title: 'III. Ergonomic Suspension',
      chapter3Text: 'When an adult sits into the sling, the weight draws the front and rear ash rails toward one another by two millimeters, creating an active spring tension that supports the lumbar spine without requiring mechanical hinges.',
      pullQuote: {
        text: 'A good chair does not swallow you whole. It supports you so that your mind can wander elsewhere.',
        attribution: 'Elin Torp',
        title: 'Architect & Designer, Studio Torp & Linden'
      }
    },
    specifications: [
      { label: 'Seat Incline Angle', value: '18 degrees (Optimal reading recline)' },
      { label: 'Leather Thickness', value: '3.8 mm to 4.2 mm heavy bridle sling' },
      { label: 'Frame Weight Capacity', value: '220 kg structural load test' },
      { label: 'Disassembly Factor', value: '100% mechanical (No adhesives in leather mounts)' }
    ],
    relatedIds: ['orix-bench', 'resona-felt-screen', 'nocturne-pendant']
  },
  {
    id: 'nocturne-pendant',
    code: 'OBJ. 08 / 12',
    title: 'Nocturne Fluted Opal Glass Pendant',
    subtitle: 'Mouth-blown three-layer cased glass pendant with brushed brass collar',
    category: 'lighting',
    categoryLabel: 'Lighting',
    year: 2023,
    maker: {
      name: 'Kari Lindqvist & Ilona Saarinen',
      studio: 'Lumina Nordica',
      location: 'Helsinki, Finland',
      yearEstablished: 2012,
      discipline: 'Architectural Lighting & Studio Glass',
      philosophy: 'Darkness in the Nordic winter is not the enemy of light; it is the velvet canvas against which light reveals its delicate colors.',
      bio: 'Lumina Nordica operates in the Finnish glassmaking region of Nuutajärvi, pushing historical mouth-blown cased glass techniques to create modern architectural luminaires.'
    },
    origin: 'Nuutajärvi & Helsinki, Finland',
    dimensions: {
      metric: '280 × 280 × 360 mm',
      imperial: '11.0 × 11.0 × 14.2 in',
      weight: '2.85 kg'
    },
    materials: [
      {
        name: 'Triplex Opal Cased Glass',
        detail: 'Three-layer blown glass with crystal core, translucent opal middle, and satin matte exterior',
        sourcing: 'Traditional Finnish batch glass furnaces',
        tactility: 'Velvety acid-etched glass tooth, completely glare-free'
      },
      {
        name: 'Spun Raw Naval Brass',
        detail: 'Turned overhead suspension housing with custom slotted ventilation gills',
        sourcing: 'Turku metallurgical metal spinners',
        tactility: 'Directional spun satin brush lines, unlacquered aging patina'
      },
      {
        name: 'Braided Mineral Grey Linen Cable',
        detail: 'Class 2 insulated double-sleeved electrical suspension cord',
        sourcing: 'Historic textile mills in Tampere',
        tactility: 'Dry, tactile woven natural linen weave'
      }
    ],
    productionMethod: 'Hand pipe gathering, wooden mold mouth-blowing, hydrofluoric acid matte etching.',
    edition: 'Standard studio production (Fictional Concept)',
    imageUrl: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=1200&q=80',
    isAiGenerated: false,
    imageCredit: 'Studio Still Life / Curated Archival Selection',
    summary: 'A pendant designed for dining tables and reading nooks that requires zero glare from any vantage point. The vertical flute ridges diffuse direct light horizontally across the room while casting a clean, warm pool of downward task illumination.',
    designHistory: 'Influenced by early 20th-century Viennese Werkstätte lighting and the poetic simplicity of Alvar Aalto’s golden bell pendants, the Nocturne strips away ornate fixtures to let pure blown glass geometry dominate.',
    narrative: {
      chapter1Title: 'I. Gathering at 1,200 Degrees',
      chapter1Text: 'A glassblower plunges a stainless steel blowpipe into a crucible of molten clear glass, pulls a precise gather, and rolls it over a marver plate before dipping it into an adjacent crucible of opaque bone-white opal glass. Blowing this double-gather into a hand-carved cherrywood mold creates the fluted vertical ribs.',
      chapter2Title: 'II. The Acoustic Tone of Glass',
      chapter2Text: 'When the hot glass is cracked off the blowpipe, it must spend eighteen hours cooling in an annealing lehr to release internal crystallization stress. Tapping the finished shade with a wooden pencil produces a clean, bell-like musical tone lasting over four seconds.',
      chapter3Title: 'III. Illumination Without Shadow Glare',
      chapter3Text: 'The triplex opal glass layer works as a microscopic optical diffuser, transforming harsh LED point sources into a homogeneous field of warm light that softens facial shadows around a dining table.',
      pullQuote: {
        text: 'A pendant should make the people sitting beneath it look beautiful and feel at ease.',
        attribution: 'Ilona Saarinen',
        title: 'Design Director, Lumina Nordica'
      }
    },
    specifications: [
      { label: 'Socket Type', value: 'E27 / Porcelain base (Max 60W equivalent LED)' },
      { label: 'Cable Length', value: '3.0 meters braided linen suspension' },
      { label: 'Diffuser Efficiency', value: '88% light transmission with 100% glare diffusion' },
      { label: 'Suspension Method', value: 'Internal steel strain relief wire tested to 45 kg' }
    ],
    relatedIds: ['vesper-lamp', 'orix-bench', 'grogg-stoneware']
  },
  {
    id: 'tenon-cypress-caddy',
    code: 'OBJ. 09 / 12',
    title: 'Tenon Yoshino Hinoki Cypress Bath Caddy',
    subtitle: 'Planed alpine cypress tray with blind dovetail joinery and soap well',
    category: 'tools',
    categoryLabel: 'Home Tools',
    year: 2024,
    maker: {
      name: 'Tatsuo Kiso',
      studio: 'Kiso Woodcraft Workshop',
      location: 'Nagano Prefecture, Japan',
      yearEstablished: 1964,
      discipline: 'Joinery & Hinoki Woodwork',
      philosophy: 'Wood is not dead when it is cut down. In the presence of steam, Hinoki remembers the mountain mist of its youth.',
      bio: 'Tatsuo Kiso is a master of joinery in the Kiso Valley of Nagano, where three-hundred-year-old Hinoki cypress trees have supplied timber for Shinto shrines for centuries.'
    },
    origin: 'Kiso Valley, Nagano Prefecture, Japan',
    dimensions: {
      metric: '820 × 200 × 38 mm',
      imperial: '32.3 × 7.8 × 1.5 in',
      weight: '890 grams'
    },
    materials: [
      {
        name: 'Aged Yoshino Hinoki Cypress',
        detail: 'Slow-grown alpine cypress harvested from controlled forest thinning',
        sourcing: 'Kiso Valley forest estates, Nagano',
        tactility: 'Silk-planed smooth surface, velvety, highly aromatic natural phytoncide scent'
      },
      {
        name: 'Natural Beeswax & Hinoki Oil Sealer',
        detail: 'Cold-pressed timber rub applied with cotton rags',
        sourcing: 'Nagano apicultural cooperatives',
        tactility: 'Breathable, water-repellent satin finish'
      }
    ],
    productionMethod: 'Japanese hand-planing (kanna), blind dovetail joinery, hand-chiseled drainage slots.',
    edition: 'Craft workshop production, 80 pieces / year (Fictional Concept)',
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    isAiGenerated: false,
    imageCredit: 'Studio Still Life / Curated Archival Selection',
    summary: 'A minimalist wooden caddy engineered to span across freestanding tubs. Constructed without nails, screws, or polyurethane seals, the tray relies on traditional blind dovetail joints and the natural rot-resistant essential oils of mountain Hinoki cypress.',
    designHistory: 'For over a millennium, Hinoki cypress has been the timber of choice for imperial bathhouses and Shinto temples due to its natural resistance to mold, fungi, and moisture rot. The Tenon caddy adapts this lineage into a quiet companion for the modern ablution ritual.',
    narrative: {
      chapter1Title: 'I. The Kanna Plane',
      chapter1Text: 'Unlike Western sanders that tear wood cells and leave a fuzzy dust layer, Japanese kanna planes slice timber cleanly at an atomic level with high-carbon blue steel blades. A single shaving peeled by Tatsuo Kiso is thin enough to read newspaper print through, sealing the wood pores naturally against water infiltration.',
      chapter2Title: 'II. Aromatherapy of the Mist',
      chapter2Text: 'When warm bath steam fills the bathroom, the heat activates natural terpenes and hinokitiol oils locked in the timber grain. The air fills with a crisp, citrus-pine fragrance proven to lower salivary cortisol levels and steady heart rates.',
      chapter3Title: 'III. Blind Interlocking Dovetails',
      chapter3Text: 'The side stop cleats that keep the tray from sliding off tub rims are joined with blind dovetails. As the wood absorbs ambient moisture during bathing, the joint expands slightly, locking the assembly even tighter together.',
      pullQuote: {
        text: 'The best bath is not about luxury fixtures; it is about washing away the frantic speed of the outside world.',
        attribution: 'Tatsuo Kiso',
        title: 'Master Woodwright, Kiso Workshop'
      }
    },
    specifications: [
      { label: 'Tub Span Range', value: 'Suitable for tub interior widths 650 mm to 780 mm' },
      { label: 'Rot Resistance', value: 'Natural fungal resistance (Class 1 Hinokitiol concentration)' },
      { label: 'Weight Capacity', value: '14 kg (Book, teapot, and ceramic candle)' },
      { label: 'Drying Recommendation', value: 'Stand upright in shaded airflow after bath' }
    ],
    relatedIds: ['kanso-iron-kettle', 'strata-glass-vessel', 'grogg-stoneware']
  },
  {
    id: 'curva-aluminum-tray',
    code: 'OBJ. 10 / 12',
    title: 'Curva Bead-Blasted Aluminum Desk Organiser',
    subtitle: 'Monolithic extruded aluminum desktop tray with champagne anodized finish',
    category: 'accessories',
    categoryLabel: 'Accessories',
    year: 2024,
    maker: {
      name: 'Lukas & Simone Weber',
      studio: 'Formverk Studio',
      location: 'Zurich, Switzerland',
      yearEstablished: 2017,
      discipline: 'Industrial Design & Precision Extrusions',
      philosophy: 'Desktop chaos is cognitive friction. Good industrial design brings the calm order of an architectural blueprint to your fingertips.',
      bio: 'Formverk operates at the intersection of Swiss typography, architectural detailing, and high-precision CNC metal fabrication in Zurich-West.'
    },
    origin: 'Zurich, Switzerland',
    dimensions: {
      metric: '320 × 120 × 22 mm',
      imperial: '12.6 × 4.7 × 0.86 in',
      weight: '740 grams'
    },
    materials: [
      {
        name: '6063-T6 Aerospace Aluminum Alloy',
        detail: 'High-strength structural aluminum extruded through custom steel dies',
        sourcing: 'Recycled Swiss hydro-powered aluminum smelters',
        tactility: 'Cool, monolithic, solid metal heft that never shifts on desks'
      },
      {
        name: '20-Micron Champagne Hard Anodizing',
        detail: 'Electrochemical oxidation layer sealed with micro-bead glass peening',
        sourcing: 'Specialist surface treatment facility in Winterthur',
        tactility: 'Velvety matte powder-soft metal feel, impervious to scratch marks'
      },
      {
        name: 'Natural Merino Wool Underside Inlay',
        detail: 'Laser-cut 2mm acoustic wool felt base preventing desk scratches',
        sourcing: 'Alpine wool mills in Appenzell',
        tactility: 'Soft, silent glide across walnut or linoleum surfaces'
      }
    ],
    productionMethod: 'Hydraulic profile extrusion, 5-axis CNC radius chamfering, glass-bead blast texturing.',
    edition: 'Numbered studio production (Fictional Concept)',
    imageUrl: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=1200&q=80',
    isAiGenerated: false,
    imageCredit: 'Studio Still Life / Curated Archival Selection',
    summary: 'An architectural desk tray formed from an unbroken extrusion of aircraft-grade aluminum. Featuring a continuous gentle parabolic valley that cups pens, paper clips, and drafting tools with satisfying mechanical elegance.',
    designHistory: 'Influenced by the utilitarian modularity of Dieter Rams’ desk accessories for Braun and the typographic clarity of Josef Müller-Brockmann, the Curva tray discards complex compartments in favor of a single continuous sculpted curve.',
    narrative: {
      chapter1Title: 'I. The Steel Die',
      chapter1Text: 'Extrusion is the process of forcing pre-heated aluminum billets through a hardened steel die under 3,000 tons of hydraulic pressure. The metal emerges like toothpaste, maintaining a razor-precise cross-sectional profile accurate to fifty microns across its entire three-meter cooling table.',
      chapter2Title: 'II. The Micro-Glass Bead Blast',
      chapter2Text: 'Directly off the mill, extruded aluminum has an aggressive metallic gleam. Formverk passes each trimmed section through an automated blasting cabinet where millions of microscopic soda-lime glass beads peen the surface, creating a velvety diffused texture that reflects light without specular hot spots.',
      chapter3Title: 'III. The Acoustic Landing',
      chapter3Text: 'Dropping a heavy brass pen or key into a generic steel tray makes a harsh, jarring clatter. The Curva tray’s weighted mass and 2mm merino felt acoustic backing absorb the kinetic impact, turning dropping a pen into a discreet, satisfying thud.',
      pullQuote: {
        text: 'A clean desk is not about hiding your work. It is about honoring the instruments you think with.',
        attribution: 'Simone Weber',
        title: 'Industrial Designer, Formverk Studio'
      }
    },
    specifications: [
      { label: 'Surface Hardness', value: '65 Rockwell B (Scratch and corrosion resistant)' },
      { label: 'Recycled Content', value: '85% post-industrial recycled aluminum billet' },
      { label: 'Base Protection', value: 'Full-footprint 2mm grey merino wool felt pad' },
      { label: 'Cable Passthrough', value: 'Rear 8mm discrete groove for stylus charging cords' }
    ],
    relatedIds: ['scribe-brass-tool', 'resona-felt-screen', 'vesper-lamp']
  },
  {
    id: 'terracotta-mortar',
    code: 'OBJ. 11 / 12',
    title: 'Volcanic Andesite & Terracotta Mortar',
    subtitle: 'Dual-material crushing bowl with rough volcanic stone pestle',
    category: 'tools',
    categoryLabel: 'Home Tools',
    year: 2023,
    maker: {
      name: 'Mateo & Valentina Cruz',
      studio: 'Taller Oaxaqueño de Barro',
      location: 'Oaxaca, Mexico',
      yearEstablished: 2008,
      discipline: 'Stone Masonry & Terracotta Sculpting',
      philosophy: 'The kitchen is humanity’s oldest laboratory. Grinding herbs between stones releases aromatic oils that steel blades only bruise.',
      bio: 'Taller Oaxaqueño unites ancient Zapotec molcajete stone carving traditions with refined contemporary ceramic geometries, creating functional culinary tools of sculptural dignity.'
    },
    origin: 'San Bartolo Coyotepec & Oaxaca City, Mexico',
    dimensions: {
      metric: '210 × 210 × 140 mm',
      imperial: '8.25 × 8.25 × 5.5 in',
      weight: '4.2 kg (Mortar & Pestle combined)'
    },
    materials: [
      {
        name: 'Vesicular Black Volcanic Andesite',
        detail: 'Heavy porous basaltic rock formed during volcanic lava cooling',
        sourcing: 'Quarried slopes of Popocatépetl and Puebla',
        tactility: 'Coarse, jagged microscopic mineral vesicles that grind peppercorns with minimal exertion'
      },
      {
        name: 'Oaxacan Terracotta Outer Cradle',
        detail: 'High-iron terracotta clay wheel-thrown and wood-fired in traditional brick kilns',
        sourcing: 'Valley of Oaxaca clay deposits',
        tactility: 'Warm, earthy orange-rust hue with natural kiln soot gradations'
      }
    ],
    productionMethod: 'Hand-chiseled volcanic stone carving, wheel-thrown terracotta casing, organic beeswax seal.',
    edition: 'Craft workshop production, 50 pieces per season (Fictional Concept)',
    imageUrl: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1200&q=80',
    isAiGenerated: false,
    imageCredit: 'Studio Still Life / Curated Archival Selection',
    summary: 'A hybrid culinary tool combining the raw abrasive power of volcanic basalt with the warm, protective embrace of terracotta earthenware. The heavy volcanic core provides the crushing friction required for spices, while the terracotta rim catches stray peppercorns and seeds.',
    designHistory: 'For over four thousand years, Mesoamerican culinary traditions relied on the molcajete for grinding maize, chilies, and herbs. The Cruz workshop refined the bulky silhouette into a pure inverted cone that sits proudly on contemporary kitchen counters.',
    narrative: {
      chapter1Title: 'I. The Vesicles of the Volcano',
      chapter1Text: 'Volcanic andesite is peppered with millions of tiny trapped gas bubbles (vesicles) formed as molten lava cooled rapidly. When fractured with a steel chisel, these bubbles create razor-sharp microscopic rims. Unlike smooth marble mortars that cause peppercorns to slide away, andesite grips seeds firmly beneath the pestle.',
      chapter2Title: 'II. The Terracotta Outer Ring',
      chapter2Text: 'Traditional stone mortars are heavy, coarse, and prone to scratching wooden dining tables or stone countertops. Mateo throws a terracotta ceramic collar that cradles the basalt core, providing a warm, smooth exterior that feels comfortable when gripped by two hands during vigorous crushing.',
      chapter3Title: 'III. Curing with Salt and Rice',
      chapter3Text: 'Before its first use, the owner seasons the mortar by grinding dry white rice and coarse sea salt until the pulverized powder emerges completely white and free of volcanic grit, bonding mineral oils into the stone’s pores.',
      pullQuote: {
        text: 'Food prepared with electric blades is hurried. Food crushed between stones holds the soul of the cook.',
        attribution: 'Valentina Cruz',
        title: 'Master Sculptor, Taller Oaxaqueño'
      }
    },
    specifications: [
      { label: 'Mortar Bowl Depth', value: '85 mm deep parabolic well' },
      { label: 'Pestle Weight', value: '850 grams (Ergonomic contoured grip)' },
      { label: 'Stone Porosity', value: 'Natural volcanic vesicles (Seasoned with olive oil)' },
      { label: 'Care Instructions', value: 'Rinse with warm water and stiff brush; avoid synthetic detergents' }
    ],
    relatedIds: ['grogg-stoneware', 'kanso-iron-kettle', 'strata-glass-vessel']
  },
  {
    id: 'resona-felt-screen',
    code: 'OBJ. 12 / 12',
    title: 'Resona Acoustic Felt & Walnut Desk Screen',
    subtitle: 'Desk privacy partition from compressed sheep wool with steam-bent walnut spine',
    category: 'everyday',
    categoryLabel: 'Everyday Products',
    year: 2024,
    maker: {
      name: 'Henrik Klint & Sunniva Berg',
      studio: 'Studio Klint Design',
      location: 'Oslo, Norway',
      yearEstablished: 2016,
      discipline: 'Acoustic Architecture & Workspace Furniture',
      philosophy: 'Acoustic comfort is the invisible architecture of concentration. When noise is softened, the mind expands.',
      bio: 'Studio Klint engineers acoustic furnishings for studios, architectural practices, and home libraries, utilizing renewable Scandinavian wool fibers and local timber mill surplus.'
    },
    origin: 'Oslo & Gudbrandsdalen, Norway',
    dimensions: {
      metric: '680 × 160 × 420 mm',
      imperial: '26.8 × 6.3 × 16.5 in',
      weight: '3.4 kg'
    },
    materials: [
      {
        name: '12mm Pressed Norwegian Wool Felt',
        detail: '100% natural un-dyed sheep wool needle-punched and steam-compressed into rigid self-supporting panels',
        sourcing: 'Gudbrandsdalen sheep farming cooperatives, Norway',
        tactility: 'Dense, fibrous, organic heather-grey texture with sound-absorbing micro-cavities'
      },
      {
        name: 'Steam-Bent Solid American Walnut',
        detail: 'Continuous curved wood clamping spine with solid brass knurled thumb screws',
        sourcing: 'FSC-certified timber importers',
        tactility: 'Satin oil-finished dark chocolate timber grain'
      },
      {
        name: 'Turned Solid Brass Tension Clamps',
        detail: 'Knurled thumbscrews providing clamping pressure without marking desk veneers',
        sourcing: 'Precision turners in Kongsberg',
        tactility: 'Hefty, knurled tactile adjustments'
      }
    ],
    productionMethod: 'Acoustic needle-felting, hydraulic hot-press molding, CNC-contoured walnut joinery.',
    edition: 'Workshop production (Fictional Concept)',
    imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
    isAiGenerated: false,
    imageCredit: 'Studio Still Life / Curated Archival Selection',
    summary: 'A freestanding desk partition designed to create an acoustic sanctuary in open studios and home work spaces. Natural pressed wool absorbs high-frequency keyboard clatter and speech reflections, while the sculptural walnut base adds warmth and stability.',
    designHistory: 'As contemporary work transitioned from isolated offices into open-plan studios, acoustic fatigue reached record levels. Studio Klint re-imagined the partition not as a cubicle divider, but as a tactile piece of micro-architecture that softens sightlines and soundscapes.',
    narrative: {
      chapter1Title: 'I. The Sound-Absorbing Fiber',
      chapter1Text: 'Synthetic foam sound panels off-gas VOCs and deteriorate into crumbly dust within a decade. Norwegian sheep wool, by comparison, contains natural crimped fibers that trap sound waves in microscopic air pockets, achieving a Noise Reduction Coefficient (NRC) of 0.75 without synthetic additives.',
      chapter2Title: 'II. The Walnut Spine',
      chapter2Text: 'The partition requires no drilling or permanent desk brackets. A continuous steam-bent walnut spine hugs the felt panel, weighted with concealed steel ballast plates so the screen stands firmly on any desk surface or can be clamped securely with brass thumbscrews.',
      chapter3Title: 'III. Visual & Acoustic Calm',
      chapter3Text: 'Beyond sound attenuation, the muted heather-grey wool and dark walnut timber provide a restful backdrop for the human eye, reducing peripheral movement distractions and fostering uninterrupted creative concentration.',
      pullQuote: {
        text: 'Silence is not the complete absence of sound. It is the absence of unwanted noise.',
        attribution: 'Sunniva Berg',
        title: 'Acoustic Engineer, Studio Klint'
      }
    },
    specifications: [
      { label: 'Acoustic Rating', value: 'NRC 0.75 (Noise Reduction Coefficient)' },
      { label: 'Wool Origin', value: '100% Norwegian sheep wool (Un-dyed naturally heathered)' },
      { label: 'Fire Retardancy', value: 'Natural wool self-extinguishing rating (EN 13501 Class B)' },
      { label: 'Clamp Capacity', value: 'Accommodates tabletops up to 48 mm thickness' }
    ],
    relatedIds: ['curva-aluminum-tray', 'scribe-brass-tool', 'orix-bench']
  }
];

export const EDITORIAL_ARTICLES: import('../types').EditorialArticle[] = [
  {
    id: 'essay-weight-of-tools',
    slug: 'the-weight-of-tools',
    issueNumber: 'ISSUE NO. 04',
    title: 'On the Weight of Everyday Tools',
    subtitle: 'Why the heft and mineral gravity of physical objects anchor human attention in a weightless digital century.',
    author: {
      name: 'Henrik Söderström',
      role: 'Editor-in-Chief',
      location: 'Stockholm, Sweden'
    },
    readTime: '6 min read',
    date: 'Autumn / Winter Issue 2024',
    heroImageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80',
    leadParagraph: 'Pick up an electric kettle stamped from ninety-gauge stainless steel, and your hand encounters almost nothing: a featherweight shell that shudders when the water begins to churn. Pick up a sand-cast Nambu tetsubin kettle, and your arm instinctively adjusts for two kilograms of geological matter. Before the water has even felt the flame, the object has commanded your presence.',
    bodySections: [
      {
        heading: 'The Vanishing Resistance of Matter',
        content: 'We live in an era characterized by the systematic removal of physical friction. Screens respond to a brush of the finger with instantaneous luminescence. Doors slide open before we touch their handles. Deliveries arrive in cardboard envelopes that collapse into recycling bins without trace. Yet the human hand remains an instrument evolved over four million years to grasp stone, test timber grain, judge tensile balance, and register thermal inertia. When every object we touch is weightless and disposable, our perception of time and consequence flattens.'
      },
      {
        heading: 'The Morality of Reparability',
        content: 'A disposable object demands no devotion. When a plastic blender gear strips, we do not call a machinist; we order another plastic blender with overnight dispatch. The objects profiled in this quarterly journal—from the wedged mortises of an oak bench in Copenhagen to the knurled naval brass of a drafting instrument in Munich—are designed under an entirely different social contract: the assumption that an object ought to outlive its original purchaser.'
      },
      {
        heading: 'The Quiet Wisdom of Wabi-Sabi',
        content: 'Perfection in industrial consumerism is brittle. A scratch on an iPhone bezel ruins its pristine retail gleam; a dent in a painted laminate desk ruins its illusion of luxury. But when an object is made of honest, un-lacquered materials—raw sand-cast iron, vegetable-tanned bridle leather, porous volcanic stone—scratches and oxidation do not constitute damage. They constitute biography. They record the living hours of the home.'
      }
    ],
    relatedObjectId: 'kanso-iron-kettle'
  },
  {
    id: 'essay-silence-of-sand-cast-iron',
    slug: 'the-silence-of-sand-cast-iron',
    issueNumber: 'ISSUE NO. 04',
    title: 'The Silence of Sand-Cast Iron',
    subtitle: 'In the foundries of Morioka, molten metal and river silica create objects that outlive their makers by centuries.',
    author: {
      name: 'Mei Takahashi',
      role: 'Material Culture Editor',
      location: 'Kyoto, Japan'
    },
    readTime: '8 min read',
    date: 'Autumn / Winter Issue 2024',
    heroImageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80',
    leadParagraph: 'In the northern Japanese prefecture of Iwate, the smell of damp river sand and glowing coke fire has hung in the autumn air since the 17th century. Sand casting is among the oldest metallurgical arts in human civilization, yet its modern relevance has never been sharper.',
    bodySections: [
      {
        heading: 'The Molecular Dance of River Sand',
        content: 'Unlike steel stamping dies that press flat sheets into uniform curvature in fractions of a second, sand casting is a deliberate, atmospheric craft. River silica, blended with clay powder and moisture, is tamped firmly around wooden forms. The tiny air passages between sand grains allow gases to escape as liquid iron rushes in, preventing air bubbles that would weaken the vessel.'
      },
      {
        heading: 'Sound and Thermal Inertia',
        content: 'Tap a stamped steel pot and it rings with a harsh, high-pitched metallic clang. Tap a sand-cast tetsubin kettle and it produces a dull, resonant thud. The difference lies in graphite flakes dispersed throughout grey cast iron, which absorb acoustic vibrations and thermal shocks alike.'
      }
    ],
    relatedObjectId: 'kanso-iron-kettle'
  },
  {
    id: 'essay-monolithic-woodcraft',
    slug: 'the-monolithic-bench',
    issueNumber: 'ISSUE NO. 04',
    title: 'Tenons, Basalt, and the Radical Patience of Joinery',
    subtitle: 'How two woodwrights in Copenhagen abandoned screws and adhesives to build furniture that yields to the physics of living trees.',
    author: {
      name: 'Arthur Vance',
      role: 'Senior Design Critic',
      location: 'London / Copenhagen'
    },
    readTime: '7 min read',
    date: 'Autumn / Winter Issue 2024',
    heroImageUrl: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
    leadParagraph: 'A tree does not stop moving when it is felled. In winter, as domestic radiators bake living rooms into Sahara-like dryness, oak shrinks across its rings. In July, as Baltic humidity surges, it drinks moisture from the air and swells. To design furniture that denies this movement is to invite structural fracture.',
    bodySections: [
      {
        heading: 'The Mortise as Living Joint',
        content: 'At Atelier Vesterbro, Freja and Johan Lindqvist build with heavy through-mortises locked with bog oak wedges. If the oak beam expands, the wedge permits longitudinal movement without splitting the timber. If it contracts, a gentle tap with a wooden mallet restores perfect structural rigidity.'
      },
      {
        heading: 'The Architecture of the Threshold',
        content: 'We place chairs around tables to speak, but a bench invites a different posture. Placed in an entryway or beside a garden window, a bench is an invitation to pause, unlace boots, or watch dust motes drift through afternoon light.'
      }
    ],
    relatedObjectId: 'orix-bench'
  }
];

export const CONTRIBUTORS: import('../types').Contributor[] = [
  {
    name: 'Henrik Söderström',
    role: 'Editor-in-Chief & Founder',
    location: 'Stockholm, Sweden',
    bio: 'Formerly design editor at Form and Arkitektur, Henrik founded Objects & Stories to provide a contemplative, advertising-free sanctuary for industrial craft criticism.',
    portraitInitials: 'HS'
  },
  {
    name: 'Mei Takahashi',
    role: 'Material Culture Editor',
    location: 'Kyoto, Japan',
    bio: 'Trained in cultural anthropology at Kyoto University, Mei documents surviving traditional workshops and contemporary craft revivals across East Asia.',
    portraitInitials: 'MT'
  },
  {
    name: 'Arthur Vance',
    role: 'Senior Design Critic',
    location: 'London & Berlin',
    bio: 'Architectural historian and lecturer at the Architectural Association. Author of "The Unadorned Vessel: Functionalist Ethics from Loos to Rams".',
    portraitInitials: 'AV'
  },
  {
    name: 'Elena Rostova',
    role: 'Director of Photography',
    location: 'Copenhagen & Paris',
    bio: 'Specializing in medium-format natural daylight studio still life. Her work has appeared in Cereal, Kinfolk, and Phaidon monographs.',
    portraitInitials: 'ER'
  }
];
