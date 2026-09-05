/* ============================================================
   CHRONL PUZZLES

   Each puzzle is labelled with the date it runs. That's it.
   To add more, copy the TEMPLATE at the bottom of this file,
   change the date, fill in six events. Order doesn't matter.

   Years: negative = BC, positive = AD.  -44 is 44 BC.
   ============================================================ */

const CHRONL_PUZZLES = {


"2026-09-03": {
  title: "Ancient Egypt Edition",
  events: [
    { emoji: "👑", year: -3100, event: "Egypt is unified under its first pharaoh",
      wiki: "https://en.wikipedia.org/wiki/Narmer" },

    { emoji: "🔺", year: -2560, event: "The Great Pyramid is completed at Giza",
      wiki: "https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza" },

    { emoji: "👸", year: -1479, event: "Hatshepsut takes the throne as a rare female pharaoh",
      wiki: "https://en.wikipedia.org/wiki/Hatshepsut" },

    { emoji: "🧒", year: -1332, event: "Tutankhamun becomes pharaoh while still a young boy",
      wiki: "https://en.wikipedia.org/wiki/Tutankhamun" },

    { emoji: "🗿", year: -1279, event: "Ramesses II begins a reign that lasts 66 years",
      wiki: "https://en.wikipedia.org/wiki/Ramesses_II" },

    { emoji: "🐍", year: -30, event: "Cleopatra dies and Egypt falls under Roman rule",
      wiki: "https://en.wikipedia.org/wiki/Cleopatra" }
  ]
},


"2026-09-04": {
  title: "Hippie Edition",
  events: [
    { emoji: "📗", year: 1957, event: "Kerouac's 'On the Road' inspires a generation to wander",
      wiki: "https://en.wikipedia.org/wiki/On_the_Road" },

    { emoji: "🚌", year: 1964, event: "Ken Kesey's painted bus tours America handing out LSD",
      wiki: "https://en.wikipedia.org/wiki/Merry_Pranksters" },

    { emoji: "🌸", year: 1967, event: "Thousands flock to San Francisco for the Summer of Love",
      wiki: "https://en.wikipedia.org/wiki/Summer_of_Love" },

    { emoji: "🎸", year: 1969, event: "Woodstock draws half a million to a New York dairy farm",
      wiki: "https://en.wikipedia.org/wiki/Woodstock" },

    { emoji: "💀", year: 1995, event: "Jerry Garcia dies and the Grateful Dead break up",
      wiki: "https://en.wikipedia.org/wiki/Jerry_Garcia" },

    { emoji: "🔥", year: 1999, event: "Woodstock '99 ends in fires, riots and arrests",
      wiki: "https://en.wikipedia.org/wiki/Woodstock_%2799" }
  ]
},


"2026-09-05": {
  title: "Kidnappings Edition",
  events: [
    { emoji: "👶", year: 1932, event: "The Lindbergh baby is taken from a New Jersey nursery",
      wiki: "https://en.wikipedia.org/wiki/Lindbergh_kidnapping" },

    { emoji: "🎤", year: 1963, event: "Frank Sinatra's son is kidnapped and ransomed in Nevada",
      wiki: "https://en.wikipedia.org/wiki/Frank_Sinatra_Jr." },

    { emoji: "🏦", year: 1974, event: "Heiress Patty Hearst is abducted, then joins her captors",
      wiki: "https://en.wikipedia.org/wiki/Patty_Hearst" },

    { emoji: "🇮🇹", year: 1978, event: "Italy's former prime minister is kidnapped by terrorists",
      wiki: "https://en.wikipedia.org/wiki/Aldo_Moro" },

    { emoji: "🏠", year: 2002, event: "Elizabeth Smart is taken from her Utah bedroom at 14",
      wiki: "https://en.wikipedia.org/wiki/Kidnapping_of_Elizabeth_Smart" },

    { emoji: "📚", year: 2014, event: "Boko Haram abducts hundreds of schoolgirls in Nigeria",
      wiki: "https://en.wikipedia.org/wiki/Chibok_schoolgirls_kidnapping" }
  ]
},


"2026-09-06": {
  title: "Tropics Edition",
  events: [
    { emoji: "⛓️", year: 1791, event: "Enslaved people in Haiti rise up against French rule",
      wiki: "https://en.wikipedia.org/wiki/Haitian_Revolution" },

    { emoji: "🌳", year: 1876, event: "Rubber seeds are smuggled out of Brazil to British gardens",
      wiki: "https://en.wikipedia.org/wiki/Henry_Wickham_(explorer)" },

    { emoji: "🍌", year: 1899, event: "United Fruit is founded and comes to dominate Latin America",
      wiki: "https://en.wikipedia.org/wiki/United_Fruit_Company" },

    { emoji: "🚢", year: 1914, event: "The Panama Canal opens, cut through tropical jungle",
      wiki: "https://en.wikipedia.org/wiki/Panama_Canal" },

    { emoji: "🇯🇲", year: 1962, event: "Jamaica wins its independence from Britain",
      wiki: "https://en.wikipedia.org/wiki/Jamaica" },

    { emoji: "🌴", year: 1988, event: "Chico Mendes is killed for defending the Amazon rainforest",
      wiki: "https://en.wikipedia.org/wiki/Chico_Mendes" }
  ]
},


"2026-09-07": {
  title: "Space Race Edition",
  events: [
    { emoji: "🛰️", year: 1957, event: "Sputnik 1 becomes the first satellite in orbit",
      wiki: "https://en.wikipedia.org/wiki/Sputnik_1" },

    { emoji: "🧑‍🚀", year: 1961, event: "Yuri Gagarin becomes the first human in space",
      wiki: "https://en.wikipedia.org/wiki/Yuri_Gagarin" },

    { emoji: "🌙", year: 1969, event: "Apollo 11 lands the first people on the Moon",
      wiki: "https://en.wikipedia.org/wiki/Apollo_11" },

    { emoji: "🏗️", year: 1986, event: "The first module of the Mir station reaches orbit",
      wiki: "https://en.wikipedia.org/wiki/Mir" },

    { emoji: "🔭", year: 1990, event: "The Hubble Space Telescope is launched",
      wiki: "https://en.wikipedia.org/wiki/Hubble_Space_Telescope" },

    { emoji: "🏠", year: 2000, event: "The first crew moves into the Space Station",
      wiki: "https://en.wikipedia.org/wiki/Expedition_1" }
  ]
},


/* ============================================================
   TEMPLATE

   Copy everything between the two COPY FROM HERE / TO HERE
   markers below, and paste it ABOVE this whole comment block —
   just underneath the last real puzzle.

   Then change the date, the title, and the six events.

   Leave this template where it is. Copy from it again next time.
   ============================================================

   ---------------- COPY FROM HERE ----------------

"2026-09-08": {
  title: "Your Theme Edition",
  events: [
    { emoji: "🎯", year: 1234, event: "First thing that happened",
      wiki: "https://en.wikipedia.org/wiki/Something" },

    { emoji: "🎯", year: 1456, event: "Second thing that happened",
      wiki: "https://en.wikipedia.org/wiki/Something" },

    { emoji: "🎯", year: 1678, event: "Third thing that happened",
      wiki: "https://en.wikipedia.org/wiki/Something" },

    { emoji: "🎯", year: 1789, event: "Fourth thing that happened",
      wiki: "https://en.wikipedia.org/wiki/Something" },

    { emoji: "🎯", year: 1890, event: "Fifth thing that happened",
      wiki: "https://en.wikipedia.org/wiki/Something" },

    { emoji: "🎯", year: 1990, event: "Sixth thing that happened",
      wiki: "https://en.wikipedia.org/wiki/Something" }
  ]
},

   ----------------- TO HERE -----------------
   ============================================================ */

};
