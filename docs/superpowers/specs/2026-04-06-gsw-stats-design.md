# Golden State Warriors Stats Website — Design Spec

## Overview

A dark-themed, premium multi-page website showcasing Golden State Warriors players (current roster + legends) with all-time career stats. Built with vanilla HTML/CSS/JS — no frameworks, no API dependencies.

**Purpose:** Fan showcase + stats reference tool — visually impressive and genuinely useful.

## Pages

### 1. Home / Landing (`index.html`)

- Full-width hero section with Warriors branding on dark background
- Gold (#FFC72C) accents throughout
- Featured player spotlight with key stat highlights
- Team history quick facts: 7 championships, notable records
- Navigation bar linking to Roster, Legends, and Compare pages

### 2. Current Roster (`roster.html`)

- **Sidebar (left):** Scrollable list of current roster players. Active player highlighted with gold left border. Clicking a name loads their profile in the main panel.
- **Main panel (right):**
  - Player photo (placeholder silhouette), name, jersey number, position, height/weight
  - Career stat cards in a grid: PPG, RPG, APG, SPG, BPG, FG%, 3P%, FT%
  - Season-by-season stats breakdown table below the cards
  - Stat values displayed in gold, labels in muted gray

### 3. Legends (`legends.html`)

- Same sidebar + detail panel layout as Roster page
- Features retired/historic Warriors greats:
  - Wilt Chamberlain, Rick Barry, Nate Thurmond, Chris Mullin, Tim Hardaway, Mitch Richmond, Baron Davis
  - Dynasty era: Stephen Curry, Klay Thompson, Kevin Durant, Draymond Green, Andre Iguodala
- Includes accolades section: MVP awards, All-Star selections, championships, jersey retirements

### 4. Compare (`compare.html`)

- Two dropdown selectors at the top — pick any 2 players from the full roster (current + legends)
- Side-by-side stat comparison layout
- Visual bar charts showing relative performance per category
- Category leader highlighted in gold
- Stats compared: PPG, RPG, APG, SPG, BPG, FG%, 3P%, FT%, games played

## Visual Design

### Colors
- **Background:** #0a0a0a (near-black)
- **Surface/Cards:** #111111
- **Borders:** #1a1a1a
- **Gold accent:** #FFC72C (primary highlights, stat values, active states)
- **Blue accent:** #1D428A (secondary, hover states, subtle touches)
- **Text primary:** #ffffff
- **Text secondary:** #999999
- **Text muted/labels:** #666666

### Typography
- System sans-serif font stack
- Thin font weights (200-300) for large stat numbers
- Wide letter-spacing on labels and section headers
- Uppercase treatment for category labels

### Interactions
- Smooth fade transitions on player selection
- Subtle hover effects on cards and sidebar items
- Gold left-border indicator for active sidebar selection
- Radial gradient glows as subtle background decoration

## Data Architecture

### `data.js`
A single JavaScript file exporting a `players` object containing all player data. No external API calls.

```javascript
const players = {
  current: [
    {
      id: "curry",
      name: "Stephen Curry",
      number: 30,
      position: "PG",
      height: "6'2\"",
      weight: "185 lbs",
      seasons: 15,
      gamesPlayed: 956,
      career: { ppg: 24.8, rpg: 4.7, apg: 6.4, spg: 1.4, bpg: 0.2, fgPct: 47.3, threePct: 42.6, ftPct: 91.0 },
      seasonStats: [
        { season: "2009-10", team: "GSW", gp: 80, ppg: 17.5, rpg: 4.5, apg: 5.9 },
        // ... more seasons
      ],
      accolades: ["2x MVP", "4x NBA Champion", "10x All-Star"]
    },
    // ... more current players
  ],
  legends: [
    // ... legend players with same structure
  ]
};
```

### Player count
- ~12-15 current roster players
- ~10-12 legends
- Total: ~22-27 players

### Stats per player
- Career averages: PPG, RPG, APG, SPG, BPG, FG%, 3P%, FT%
- Games played, seasons played
- Season-by-season breakdown (season, team, GP, PPG, RPG, APG)
- Accolades array (MVP, All-Star, Champion, etc.)

## File Structure

```
gsw-stats/
  index.html          — landing/home page
  roster.html         — current roster with sidebar
  legends.html        — all-time greats with sidebar
  compare.html        — player comparison tool
  css/
    style.css         — all styles (single file)
  js/
    data.js           — player data (JSON object)
    app.js            — navigation, player selection, comparison, transitions
  img/                — player photos (placeholder silhouettes initially)
```

## Responsive Behavior

- **Desktop (>1024px):** Sidebar + main panel side by side
- **Tablet (768-1024px):** Sidebar collapses to horizontal player selector above main panel
- **Mobile (<768px):** Full-width stacked layout, player selector as dropdown or horizontal scroll

## Out of Scope

- No backend / API integration
- No user accounts or authentication
- No live game data or real-time updates
- No search functionality (player list is small enough to browse)
