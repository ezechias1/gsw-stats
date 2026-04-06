// gsw-stats/js/data.js
// Single source of truth for all player data across the site.
// Current roster: 10 players | Legends: 10 players
// Career stats for current players = full NBA career.
// Career stats for legends = Warriors tenure only.

const players = {

  // ─────────────────────────────────────────────
  // CURRENT ROSTER
  // ─────────────────────────────────────────────

  current: [
  {
    id: "curry",
    name: "Stephen Curry",
    number: 30,
    position: "PG",
    height: "6'2\"",
    weight: "185 lbs",
    from: "Davidson College",
    drafted: "2009, Round 1, Pick 7",
    seasons: 16,
    gamesPlayed: 956,
    image: "img/curry.png",
    career: {
      ppg: 24.8,
      rpg: 4.7,
      apg: 6.4,
      spg: 1.4,
      bpg: 0.2,
      fgPct: 47.3,
      threePct: 42.6,
      ftPct: 91.0
    },
    seasonStats: [
      { season: "2009-10", team: "GSW", gp: 80, ppg: 17.5, rpg: 4.5, apg: 5.9, fgPct: 46.2, threePct: 43.7 },
      { season: "2012-13", team: "GSW", gp: 78, ppg: 22.9, rpg: 4.0, apg: 6.9, fgPct: 45.1, threePct: 45.3 },
      { season: "2014-15", team: "GSW", gp: 80, ppg: 23.8, rpg: 4.3, apg: 7.7, fgPct: 48.7, threePct: 44.3 },
      { season: "2015-16", team: "GSW", gp: 79, ppg: 30.1, rpg: 5.4, apg: 6.7, fgPct: 50.4, threePct: 45.4 },
      { season: "2020-21", team: "GSW", gp: 63, ppg: 32.0, rpg: 5.5, apg: 5.8, fgPct: 48.2, threePct: 42.1 },
      { season: "2021-22", team: "GSW", gp: 64, ppg: 25.5, rpg: 5.2, apg: 6.3, fgPct: 43.7, threePct: 38.0 },
      { season: "2023-24", team: "GSW", gp: 74, ppg: 26.4, rpg: 4.5, apg: 5.1, fgPct: 45.0, threePct: 40.8 }
    ],
    accolades: [
      "2x NBA MVP (2015, 2016 — unanimous)",
      "4x NBA Champion (2015, 2017, 2018, 2022)",
      "10x NBA All-Star",
      "All-Time 3-Point Leader",
      "2022 Finals MVP",
      "3x All-NBA First Team"
    ]
  },

  {
    id: "wiggins",
    name: "Andrew Wiggins",
    number: 22,
    position: "SF",
    height: "6'7\"",
    weight: "197 lbs",
    from: "Kansas",
    drafted: "2014, Round 1, Pick 1",
    seasons: 11,
    gamesPlayed: 713,
    image: "img/wiggins.png",
    career: {
      ppg: 17.4,
      rpg: 4.3,
      apg: 2.2,
      spg: 0.9,
      bpg: 0.5,
      fgPct: 44.4,
      threePct: 33.9,
      ftPct: 69.8
    },
    seasonStats: [
      { season: "2014-15", team: "MIN", gp: 82, ppg: 16.9, rpg: 4.6, apg: 2.1, fgPct: 43.5, threePct: 31.5 },
      { season: "2016-17", team: "MIN", gp: 82, ppg: 23.6, rpg: 4.0, apg: 2.3, fgPct: 45.0, threePct: 35.8 },
      { season: "2018-19", team: "MIN", gp: 73, ppg: 18.1, rpg: 4.7, apg: 2.5, fgPct: 43.4, threePct: 32.8 },
      { season: "2021-22", team: "GSW", gp: 73, ppg: 17.2, rpg: 4.5, apg: 2.2, fgPct: 47.3, threePct: 39.3 },
      { season: "2022-23", team: "GSW", gp: 37, ppg: 16.5, rpg: 4.9, apg: 2.4, fgPct: 47.6, threePct: 36.0 }
    ],
    accolades: [
      "NBA All-Star (2022)",
      "4x NBA Champion (2022)",
      "NBA Rookie of the Year (2015)",
      "#1 Overall Pick (2014)"
    ]
  },

  {
    id: "draymond",
    name: "Draymond Green",
    number: 23,
    position: "PF",
    height: "6'6\"",
    weight: "230 lbs",
    from: "Michigan State",
    drafted: "2012, Round 2, Pick 35",
    seasons: 13,
    gamesPlayed: 788,
    image: "img/draymond.png",
    career: {
      ppg: 8.8,
      rpg: 7.0,
      apg: 6.1,
      spg: 1.4,
      bpg: 0.8,
      fgPct: 44.7,
      threePct: 31.6,
      ftPct: 70.4
    },
    seasonStats: [
      { season: "2013-14", team: "GSW", gp: 82, ppg: 6.2, rpg: 5.6, apg: 2.0, fgPct: 43.8, threePct: 35.2 },
      { season: "2015-16", team: "GSW", gp: 81, ppg: 14.0, rpg: 9.5, apg: 7.4, fgPct: 49.0, threePct: 38.8 },
      { season: "2016-17", team: "GSW", gp: 76, ppg: 10.2, rpg: 8.2, apg: 7.0, fgPct: 42.1, threePct: 30.8 },
      { season: "2021-22", team: "GSW", gp: 46, ppg: 7.5, rpg: 7.3, apg: 7.0, fgPct: 44.8, threePct: 26.0 },
      { season: "2023-24", team: "GSW", gp: 55, ppg: 9.0, rpg: 7.1, apg: 6.9, fgPct: 44.6, threePct: 24.8 }
    ],
    accolades: [
      "4x NBA Champion (2015, 2017, 2018, 2022)",
      "NBA DPOY (2017)",
      "4x All-Defensive First Team",
      "3x NBA All-Star",
      "All-NBA Third Team (2016)"
    ]
  },

  {
    id: "looney",
    name: "Kevon Looney",
    number: 5,
    position: "C",
    height: "6'9\"",
    weight: "222 lbs",
    from: "UCLA",
    drafted: "2015, Round 1, Pick 30",
    seasons: 10,
    gamesPlayed: 534,
    image: "img/looney.png",
    career: {
      ppg: 5.3,
      rpg: 5.7,
      apg: 1.8,
      spg: 0.6,
      bpg: 0.5,
      fgPct: 59.0,
      threePct: 14.3,
      ftPct: 60.8
    },
    seasonStats: [
      { season: "2015-16", team: "GSW", gp: 5,  ppg: 2.0, rpg: 2.2, apg: 0.4, fgPct: 57.1, threePct: 0.0 },
      { season: "2018-19", team: "GSW", gp: 78, ppg: 6.3, rpg: 6.3, apg: 2.2, fgPct: 66.7, threePct: 0.0 },
      { season: "2021-22", team: "GSW", gp: 73, ppg: 6.0, rpg: 7.3, apg: 2.8, fgPct: 61.7, threePct: 0.0 },
      { season: "2022-23", team: "GSW", gp: 82, ppg: 7.5, rpg: 8.1, apg: 2.5, fgPct: 58.3, threePct: 0.0 },
      { season: "2023-24", team: "GSW", gp: 73, ppg: 6.0, rpg: 6.2, apg: 1.5, fgPct: 57.2, threePct: 0.0 }
    ],
    accolades: [
      "4x NBA Champion (2015, 2017, 2018, 2022)",
      "Played all 22 playoff games in 2021-22 season",
      "Known for elite screen-setting and rebounding IQ"
    ]
  },

  {
    id: "kuminga",
    name: "Jonathan Kuminga",
    number: 0,
    position: "SF",
    height: "6'7\"",
    weight: "225 lbs",
    from: "G League Ignite",
    drafted: "2021, Round 1, Pick 7",
    seasons: 4,
    gamesPlayed: 243,
    image: "img/kuminga.png",
    career: {
      ppg: 14.2,
      rpg: 4.5,
      apg: 2.1,
      spg: 0.8,
      bpg: 0.6,
      fgPct: 53.0,
      threePct: 30.4,
      ftPct: 72.1
    },
    seasonStats: [
      { season: "2021-22", team: "GSW", gp: 71, ppg: 9.3,  rpg: 3.7, apg: 1.3, fgPct: 51.2, threePct: 27.5 },
      { season: "2022-23", team: "GSW", gp: 59, ppg: 9.9,  rpg: 3.7, apg: 1.9, fgPct: 53.4, threePct: 31.1 },
      { season: "2023-24", team: "GSW", gp: 59, ppg: 16.1, rpg: 4.8, apg: 2.9, fgPct: 55.3, threePct: 28.7 },
      { season: "2024-25", team: "GSW", gp: 54, ppg: 21.3, rpg: 6.0, apg: 2.7, fgPct: 52.8, threePct: 33.5 }
    ],
    accolades: [
      "NBA Champion (2022)",
      "#7 Overall Pick (2021)",
      "Youngest player to score 30+ points for GSW (2022)"
    ]
  },

  {
    id: "podziemski",
    name: "Brandin Podziemski",
    number: 2,
    position: "SG",
    height: "6'5\"",
    weight: "207 lbs",
    from: "Santa Clara",
    drafted: "2023, Round 1, Pick 19",
    seasons: 2,
    gamesPlayed: 133,
    image: "img/podziemski.png",
    career: {
      ppg: 10.5,
      rpg: 5.5,
      apg: 4.1,
      spg: 1.2,
      bpg: 0.2,
      fgPct: 44.8,
      threePct: 37.2,
      ftPct: 77.3
    },
    seasonStats: [
      { season: "2023-24", team: "GSW", gp: 76, ppg: 9.2,  rpg: 5.5, apg: 3.7, fgPct: 44.7, threePct: 37.7 },
      { season: "2024-25", team: "GSW", gp: 57, ppg: 12.2, rpg: 5.5, apg: 4.7, fgPct: 44.9, threePct: 36.6 }
    ],
    accolades: [
      "NBA All-Rookie Second Team (2024)",
      "19th pick in 2023 NBA Draft"
    ]
  },

  {
    id: "moody",
    name: "Moses Moody",
    number: 4,
    position: "SG",
    height: "6'6\"",
    weight: "205 lbs",
    from: "Arkansas",
    drafted: "2021, Round 1, Pick 14",
    seasons: 4,
    gamesPlayed: 208,
    image: "img/moody.png",
    career: {
      ppg: 8.4,
      rpg: 2.8,
      apg: 1.2,
      spg: 0.8,
      bpg: 0.3,
      fgPct: 46.1,
      threePct: 38.5,
      ftPct: 81.0
    },
    seasonStats: [
      { season: "2021-22", team: "GSW", gp: 51, ppg: 4.6,  rpg: 1.8, apg: 0.6, fgPct: 44.2, threePct: 36.4 },
      { season: "2022-23", team: "GSW", gp: 53, ppg: 7.5,  rpg: 2.4, apg: 1.1, fgPct: 46.3, threePct: 38.4 },
      { season: "2023-24", team: "GSW", gp: 67, ppg: 9.8,  rpg: 3.1, apg: 1.4, fgPct: 46.5, threePct: 39.4 },
      { season: "2024-25", team: "GSW", gp: 37, ppg: 11.8, rpg: 3.9, apg: 1.7, fgPct: 47.2, threePct: 39.8 }
    ],
    accolades: [
      "NBA Champion (2022)",
      "#14 Overall Pick (2021)"
    ]
  },

  {
    id: "jacksonDavis",
    name: "Trayce Jackson-Davis",
    number: 32,
    position: "C",
    height: "6'9\"",
    weight: "240 lbs",
    from: "Indiana",
    drafted: "2023, Round 2, Pick 57",
    seasons: 2,
    gamesPlayed: 115,
    image: "img/jackson-davis.png",
    career: {
      ppg: 9.0,
      rpg: 6.5,
      apg: 2.4,
      spg: 0.9,
      bpg: 1.8,
      fgPct: 62.0,
      threePct: 0.0,
      ftPct: 65.2
    },
    seasonStats: [
      { season: "2023-24", team: "GSW", gp: 69, ppg: 7.8,  rpg: 5.8, apg: 2.2, fgPct: 60.5, threePct: 0.0 },
      { season: "2024-25", team: "GSW", gp: 46, ppg: 10.7, rpg: 7.5, apg: 2.7, fgPct: 63.8, threePct: 0.0 }
    ],
    accolades: [
      "2nd-round steal at pick 57 (2023)",
      "Elite shot-blocker and rim-runner",
      "Led G League in blocks (2023)"
    ]
  },

  {
    id: "gp2",
    name: "Gary Payton II",
    number: 8,
    position: "SG",
    height: "6'3\"",
    weight: "190 lbs",
    from: "Oregon State",
    drafted: "2016, Round 2, Pick 55",
    seasons: 8,
    gamesPlayed: 338,
    image: "img/gp2.png",
    career: {
      ppg: 7.7,
      rpg: 3.2,
      apg: 1.8,
      spg: 1.6,
      bpg: 0.5,
      fgPct: 52.1,
      threePct: 36.2,
      ftPct: 73.4
    },
    seasonStats: [
      { season: "2019-20", team: "MIL", gp: 52, ppg: 4.4, rpg: 2.1, apg: 1.3, fgPct: 51.2, threePct: 36.6 },
      { season: "2021-22", team: "GSW", gp: 71, ppg: 7.1, rpg: 3.5, apg: 2.1, fgPct: 55.8, threePct: 40.4 },
      { season: "2022-23", team: "POR", gp: 61, ppg: 9.7, rpg: 3.5, apg: 2.1, fgPct: 51.2, threePct: 37.7 },
      { season: "2023-24", team: "GSW", gp: 48, ppg: 7.0, rpg: 3.5, apg: 1.9, fgPct: 51.4, threePct: 34.7 },
      { season: "2024-25", team: "GSW", gp: 40, ppg: 8.2, rpg: 3.0, apg: 1.7, fgPct: 51.8, threePct: 35.9 }
    ],
    accolades: [
      "NBA Champion (2022)",
      "NBA All-Defensive Second Team (2022)",
      "Known for elite on-ball defense"
    ]
  },

  {
    id: "hield",
    name: "Buddy Hield",
    number: 7,
    position: "SG",
    height: "6'4\"",
    weight: "216 lbs",
    from: "Oklahoma",
    drafted: "2016, Round 1, Pick 6",
    seasons: 9,
    gamesPlayed: 597,
    image: "img/hield.png",
    career: {
      ppg: 16.0,
      rpg: 3.9,
      apg: 2.7,
      spg: 0.9,
      bpg: 0.2,
      fgPct: 44.8,
      threePct: 40.0,
      ftPct: 86.0
    },
    seasonStats: [
      { season: "2016-17", team: "NOP", gp: 79, ppg: 13.5, rpg: 3.3, apg: 1.9, fgPct: 43.9, threePct: 39.8 },
      { season: "2018-19", team: "SAC", gp: 82, ppg: 20.7, rpg: 5.0, apg: 3.5, fgPct: 44.4, threePct: 42.7 },
      { season: "2020-21", team: "SAC", gp: 59, ppg: 16.4, rpg: 3.6, apg: 2.9, fgPct: 43.9, threePct: 39.7 },
      { season: "2022-23", team: "IND", gp: 73, ppg: 14.0, rpg: 3.6, apg: 2.8, fgPct: 43.7, threePct: 38.9 },
      { season: "2024-25", team: "GSW", gp: 66, ppg: 17.8, rpg: 3.7, apg: 3.1, fgPct: 46.0, threePct: 42.1 }
    ],
    accolades: [
      "4x NBA Three-Point Contest participant",
      "Top-10 All-Time in 3-pointers made (active)",
      "#6 Overall Pick (2016)"
    ]
  }
  ],

  // ─────────────────────────────────────────────
  // LEGENDS (career stats = Warriors tenure only)
  // ─────────────────────────────────────────────

  legends: [
  {
    id: "chamberlain",
    name: "Wilt Chamberlain",
    number: 13,
    position: "C",
    height: "7'1\"",
    weight: "275 lbs",
    from: "Kansas",
    drafted: "1959, Territorial Pick",
    seasons: 5,
    gamesPlayed: 385,
    image: "img/chamberlain.png",
    yearsWithWarriors: "1959-1965",
    career: {
      ppg: 41.4,
      rpg: 24.4,
      apg: 2.3,
      spg: null,
      bpg: null,
      fgPct: 53.6,
      threePct: null,
      ftPct: 53.2
    },
    seasonStats: [
      { season: "1959-60", team: "PHW", gp: 72, ppg: 37.6, rpg: 27.0, apg: 2.3, fgPct: 46.1, threePct: null },
      { season: "1960-61", team: "PHW", gp: 79, ppg: 38.4, rpg: 27.2, apg: 2.4, fgPct: 50.9, threePct: null },
      { season: "1961-62", team: "PHW", gp: 80, ppg: 50.4, rpg: 25.7, apg: 2.4, fgPct: 50.6, threePct: null },
      { season: "1962-63", team: "SFW", gp: 80, ppg: 44.8, rpg: 24.3, apg: 2.9, fgPct: 52.8, threePct: null },
      { season: "1963-64", team: "SFW", gp: 80, ppg: 36.9, rpg: 22.3, apg: 2.9, fgPct: 52.4, threePct: null }
    ],
    accolades: [
      "2x NBA MVP while with Warriors (1960, 1966)",
      "100-point single-game record (1962)",
      "NBA Scoring Champion 7x",
      "NBA Rebounding Champion 11x",
      "Naismith Hall of Fame (1979)"
    ]
  },

  {
    id: "barry",
    name: "Rick Barry",
    number: 24,
    position: "SF",
    height: "6'7\"",
    weight: "220 lbs",
    from: "Miami (FL)",
    drafted: "1965, Round 1, Pick 2",
    seasons: 7,
    gamesPlayed: 524,
    image: "img/barry.png",
    yearsWithWarriors: "1965-1967, 1972-1978",
    career: {
      ppg: 25.5,
      rpg: 7.0,
      apg: 4.9,
      spg: 2.0,
      bpg: 0.9,
      fgPct: 46.6,
      threePct: null,
      ftPct: 89.3
    },
    seasonStats: [
      { season: "1965-66", team: "SFW", gp: 80, ppg: 25.7, rpg: 10.6, apg: 2.9, fgPct: 43.8, threePct: null },
      { season: "1966-67", team: "SFW", gp: 78, ppg: 35.6, rpg: 8.8,  apg: 3.6, fgPct: 44.9, threePct: null },
      { season: "1974-75", team: "GSW", gp: 80, ppg: 30.6, rpg: 5.7,  apg: 6.2, fgPct: 49.1, threePct: null },
      { season: "1975-76", team: "GSW", gp: 81, ppg: 21.0, rpg: 6.1,  apg: 6.1, fgPct: 47.5, threePct: null },
      { season: "1976-77", team: "GSW", gp: 79, ppg: 21.8, rpg: 5.8,  apg: 5.1, fgPct: 47.0, threePct: null }
    ],
    accolades: [
      "NBA Champion with Warriors (1975)",
      "1975 Finals MVP",
      "NBA All-Star 8x",
      "ABA MVP (1969)",
      "Naismith Hall of Fame (1987)"
    ]
  },

  {
    id: "thurmond",
    name: "Nate Thurmond",
    number: 42,
    position: "C",
    height: "6'11\"",
    weight: "235 lbs",
    from: "Bowling Green",
    drafted: "1963, Round 1, Pick 3",
    seasons: 11,
    gamesPlayed: 757,
    image: "img/thurmond.png",
    yearsWithWarriors: "1963-1974",
    career: {
      ppg: 19.0,
      rpg: 22.0,
      apg: 2.7,
      spg: null,
      bpg: null,
      fgPct: 42.0,
      threePct: null,
      ftPct: 66.8
    },
    seasonStats: [
      { season: "1963-64", team: "SFW", gp: 76, ppg: 7.4,  rpg: 11.0, apg: 0.9, fgPct: 38.5, threePct: null },
      { season: "1965-66", team: "SFW", gp: 73, ppg: 16.5, rpg: 21.2, apg: 2.3, fgPct: 42.7, threePct: null },
      { season: "1967-68", team: "SFW", gp: 51, ppg: 22.0, rpg: 22.0, apg: 2.6, fgPct: 43.4, threePct: null },
      { season: "1968-69", team: "SFW", gp: 71, ppg: 21.2, rpg: 24.0, apg: 2.5, fgPct: 43.0, threePct: null },
      { season: "1970-71", team: "GSW", gp: 82, ppg: 21.4, rpg: 21.5, apg: 2.5, fgPct: 44.0, threePct: null }
    ],
    accolades: [
      "7x NBA All-Star",
      "Recorded first official quadruple-double in NBA history (1974)",
      "Naismith Hall of Fame (1985)",
      "NBA 50th Anniversary All-Time Team"
    ]
  },

  {
    id: "mullin",
    name: "Chris Mullin",
    number: 17,
    position: "SF",
    height: "6'7\"",
    weight: "215 lbs",
    from: "St. John's",
    drafted: "1985, Round 1, Pick 7",
    seasons: 13,
    gamesPlayed: 807,
    image: "img/mullin.png",
    yearsWithWarriors: "1985-1997, 2000-2001",
    career: {
      ppg: 20.5,
      rpg: 4.4,
      apg: 4.0,
      spg: 1.5,
      bpg: 0.4,
      fgPct: 50.9,
      threePct: 38.4,
      ftPct: 88.6
    },
    seasonStats: [
      { season: "1987-88", team: "GSW", gp: 60, ppg: 20.2, rpg: 4.5, apg: 4.4, fgPct: 51.5, threePct: 40.0 },
      { season: "1988-89", team: "GSW", gp: 82, ppg: 26.5, rpg: 5.0, apg: 4.9, fgPct: 53.1, threePct: 45.9 },
      { season: "1990-91", team: "GSW", gp: 82, ppg: 25.7, rpg: 4.9, apg: 4.3, fgPct: 52.4, threePct: 42.9 },
      { season: "1991-92", team: "GSW", gp: 81, ppg: 25.6, rpg: 5.0, apg: 4.7, fgPct: 52.1, threePct: 40.5 },
      { season: "1992-93", team: "GSW", gp: 78, ppg: 22.4, rpg: 4.6, apg: 4.5, fgPct: 49.2, threePct: 39.4 }
    ],
    accolades: [
      "5x NBA All-Star",
      "All-NBA Second Team (1992)",
      "Olympic Gold Medal (1992 Dream Team)",
      "Naismith Hall of Fame (2011)",
      "Warriors #17 retired"
    ]
  },

  {
    id: "timHardaway",
    name: "Tim Hardaway",
    number: 10,
    position: "PG",
    height: "6'0\"",
    weight: "195 lbs",
    from: "UTEP",
    drafted: "1989, Round 1, Pick 14",
    seasons: 7,
    gamesPlayed: 479,
    image: "img/tim-hardaway.png",
    yearsWithWarriors: "1989-1996",
    career: {
      ppg: 20.7,
      rpg: 3.9,
      apg: 9.3,
      spg: 1.9,
      bpg: 0.2,
      fgPct: 44.8,
      threePct: 33.6,
      ftPct: 80.6
    },
    seasonStats: [
      { season: "1989-90", team: "GSW", gp: 79, ppg: 14.7, rpg: 3.1, apg: 8.7,  fgPct: 43.6, threePct: 32.7 },
      { season: "1990-91", team: "GSW", gp: 82, ppg: 22.9, rpg: 4.0, apg: 10.0, fgPct: 47.6, threePct: 36.9 },
      { season: "1991-92", team: "GSW", gp: 81, ppg: 23.4, rpg: 4.0, apg: 10.0, fgPct: 46.1, threePct: 35.0 },
      { season: "1992-93", team: "GSW", gp: 66, ppg: 21.5, rpg: 4.5, apg: 10.6, fgPct: 44.8, threePct: 30.5 },
      { season: "1994-95", team: "GSW", gp: 62, ppg: 20.1, rpg: 3.8, apg: 9.3,  fgPct: 42.4, threePct: 35.0 }
    ],
    accolades: [
      "5x NBA All-Star",
      "All-NBA Second Team (1997)",
      "Inventor of the UTEP Two-Step crossover",
      "Warriors #10 retired"
    ]
  },

  {
    id: "richmond",
    name: "Mitch Richmond",
    number: 23,
    position: "SG",
    height: "6'5\"",
    weight: "215 lbs",
    from: "Kansas State",
    drafted: "1988, Round 1, Pick 5",
    seasons: 3,
    gamesPlayed: 227,
    image: "img/richmond.png",
    yearsWithWarriors: "1988-1991",
    career: {
      ppg: 22.5,
      rpg: 3.7,
      apg: 3.1,
      spg: 1.3,
      bpg: 0.2,
      fgPct: 48.1,
      threePct: 34.5,
      ftPct: 84.3
    },
    seasonStats: [
      { season: "1988-89", team: "GSW", gp: 79, ppg: 22.0, rpg: 4.9, apg: 3.8, fgPct: 49.3, threePct: 34.0 },
      { season: "1989-90", team: "GSW", gp: 78, ppg: 22.1, rpg: 4.0, apg: 3.2, fgPct: 47.8, threePct: 35.3 },
      { season: "1990-91", team: "GSW", gp: 77, ppg: 23.0, rpg: 3.1, apg: 3.1, fgPct: 47.4, threePct: 34.3 }
    ],
    accolades: [
      "NBA Rookie of the Year (1989)",
      "6x NBA All-Star",
      "Olympic Gold Medal (1996)",
      "Naismith Hall of Fame (2014)"
    ]
  },

  {
    id: "baronDavis",
    name: "Baron Davis",
    number: 5,
    position: "PG",
    height: "6'3\"",
    weight: "209 lbs",
    from: "UCLA",
    drafted: "1999, Round 1, Pick 3",
    seasons: 4,
    gamesPlayed: 266,
    image: "img/baron-davis.png",
    yearsWithWarriors: "2005-2008",
    career: {
      ppg: 19.9,
      rpg: 4.0,
      apg: 7.4,
      spg: 1.9,
      bpg: 0.5,
      fgPct: 42.1,
      threePct: 32.5,
      ftPct: 72.5
    },
    seasonStats: [
      { season: "2005-06", team: "GSW", gp: 64, ppg: 20.0, rpg: 4.6, apg: 8.0, fgPct: 43.0, threePct: 32.1 },
      { season: "2006-07", team: "GSW", gp: 65, ppg: 19.5, rpg: 4.2, apg: 8.3, fgPct: 43.5, threePct: 33.5 },
      { season: "2007-08", team: "GSW", gp: 49, ppg: 21.8, rpg: 3.6, apg: 7.2, fgPct: 43.8, threePct: 35.4 }
    ],
    accolades: [
      "Led \"We Believe\" Warriors to 2007 NBA Playoffs upset over #1 seed Dallas",
      "2x NBA All-Star",
      "Longest buzzer-beater in playoff history (2008, 89-foot shot)"
    ]
  },

  {
    id: "klay",
    name: "Klay Thompson",
    number: 11,
    position: "SG",
    height: "6'6\"",
    weight: "220 lbs",
    from: "Washington State",
    drafted: "2011, Round 1, Pick 11",
    seasons: 13,
    gamesPlayed: 789,
    image: "img/klay.png",
    yearsWithWarriors: "2011-2024",
    career: {
      ppg: 19.6,
      rpg: 3.4,
      apg: 2.3,
      spg: 0.9,
      bpg: 0.5,
      fgPct: 46.7,
      threePct: 41.9,
      ftPct: 85.1
    },
    seasonStats: [
      { season: "2014-15", team: "GSW", gp: 77, ppg: 21.7, rpg: 3.2, apg: 2.9, fgPct: 46.3, threePct: 43.9 },
      { season: "2015-16", team: "GSW", gp: 80, ppg: 22.1, rpg: 3.8, apg: 2.1, fgPct: 47.0, threePct: 42.5 },
      { season: "2018-19", team: "GSW", gp: 78, ppg: 21.5, rpg: 3.8, apg: 2.4, fgPct: 46.7, threePct: 40.2 },
      { season: "2021-22", team: "GSW", gp: 32, ppg: 20.4, rpg: 3.9, apg: 2.8, fgPct: 46.2, threePct: 38.5 },
      { season: "2022-23", team: "GSW", gp: 69, ppg: 21.9, rpg: 4.1, apg: 2.4, fgPct: 43.4, threePct: 38.7 }
    ],
    accolades: [
      "4x NBA Champion (2015, 2017, 2018, 2022)",
      "6x NBA All-Star",
      "Record 37 points in one quarter (2015)",
      "Record 60 points in 29 minutes (2016)",
      "All-NBA Third Team (2015, 2016)"
    ]
  },

  {
    id: "durant",
    name: "Kevin Durant",
    number: 35,
    position: "SF",
    height: "6'10\"",
    weight: "240 lbs",
    from: "Texas",
    drafted: "2007, Round 1, Pick 2",
    seasons: 3,
    gamesPlayed: 197,
    image: "img/durant.png",
    yearsWithWarriors: "2016-2019",
    career: {
      ppg: 27.3,
      rpg: 7.1,
      apg: 4.3,
      spg: 1.1,
      bpg: 1.1,
      fgPct: 53.7,
      threePct: 38.6,
      ftPct: 88.5
    },
    seasonStats: [
      { season: "2016-17", team: "GSW", gp: 62, ppg: 25.1, rpg: 8.3, apg: 4.8, fgPct: 53.7, threePct: 37.5 },
      { season: "2017-18", team: "GSW", gp: 68, ppg: 26.4, rpg: 6.8, apg: 5.4, fgPct: 51.6, threePct: 41.9 },
      { season: "2018-19", team: "GSW", gp: 67, ppg: 26.0, rpg: 6.4, apg: 5.9, fgPct: 52.1, threePct: 35.3 }
    ],
    accolades: [
      "2x NBA Champion with Warriors (2017, 2018)",
      "2x NBA Finals MVP (2017, 2018)",
      "NBA MVP (2014)",
      "12x NBA All-Star",
      "NBA Scoring Champion 4x"
    ]
  },

  {
    id: "iguodala",
    name: "Andre Iguodala",
    number: 9,
    position: "SF",
    height: "6'6\"",
    weight: "215 lbs",
    from: "Arizona",
    drafted: "2004, Round 1, Pick 9",
    seasons: 8,
    gamesPlayed: 492,
    image: "img/iguodala.png",
    yearsWithWarriors: "2013-2019, 2021-2022",
    career: {
      ppg: 7.8,
      rpg: 4.2,
      apg: 3.8,
      spg: 1.4,
      bpg: 0.5,
      fgPct: 47.5,
      threePct: 33.2,
      ftPct: 75.4
    },
    seasonStats: [
      { season: "2013-14", team: "GSW", gp: 62, ppg: 9.8,  rpg: 4.8, apg: 3.8, fgPct: 47.3, threePct: 33.5 },
      { season: "2014-15", team: "GSW", gp: 76, ppg: 7.8,  rpg: 4.0, apg: 3.4, fgPct: 48.5, threePct: 36.5 },
      { season: "2015-16", team: "GSW", gp: 75, ppg: 7.6,  rpg: 4.3, apg: 3.6, fgPct: 50.6, threePct: 30.7 },
      { season: "2017-18", team: "GSW", gp: 73, ppg: 9.0,  rpg: 4.1, apg: 3.9, fgPct: 48.8, threePct: 28.5 },
      { season: "2021-22", team: "GSW", gp: 31, ppg: 4.0,  rpg: 2.8, apg: 2.7, fgPct: 45.2, threePct: 35.1 }
    ],
    accolades: [
      "4x NBA Champion (2015, 2017, 2018, 2022)",
      "2015 NBA Finals MVP",
      "NBA All-Defensive First Team (2014, 2015)",
      "Olympic Gold Medal (2012)",
      "Naismith Hall of Fame eligible (2024)"
    ]
  }
  ]

};
