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
  title: "Age of Exploration Edition",
  events: [
    { emoji: "⛵", year: 1492, event: "Columbus reaches the Americas",
      wiki: "https://en.wikipedia.org/wiki/Voyages_of_Christopher_Columbus" },

    { emoji: "🌶️", year: 1498, event: "Vasco da Gama reaches India by sea",
      wiki: "https://en.wikipedia.org/wiki/Vasco_da_Gama" },

    { emoji: "🌍", year: 1519, event: "Magellan's expedition sets out to circle the globe",
      wiki: "https://en.wikipedia.org/wiki/Magellan_expedition" },

    { emoji: "🏘️", year: 1607, event: "Jamestown is founded in Virginia",
      wiki: "https://en.wikipedia.org/wiki/Jamestown,_Virginia" },

    { emoji: "🚢", year: 1620, event: "The Mayflower carries the Pilgrims to Plymouth",
      wiki: "https://en.wikipedia.org/wiki/Mayflower" },

    { emoji: "🦘", year: 1770, event: "James Cook charts the east coast of Australia",
      wiki: "https://en.wikipedia.org/wiki/James_Cook" }
  ]
},


"2026-09-06": {
  title: "Great Inventions Edition",
  events: [
    { emoji: "📖", year: 1440, event: "Gutenberg's printing press begins mass-producing books",
      wiki: "https://en.wikipedia.org/wiki/Printing_press" },

    { emoji: "☎️", year: 1876, event: "Alexander Graham Bell patents the telephone",
      wiki: "https://en.wikipedia.org/wiki/Invention_of_the_telephone" },

    { emoji: "💡", year: 1879, event: "Edison demonstrates a practical electric light bulb",
      wiki: "https://en.wikipedia.org/wiki/Incandescent_light_bulb" },

    { emoji: "✈️", year: 1903, event: "The Wright brothers make the first powered flight",
      wiki: "https://en.wikipedia.org/wiki/Wright_Flyer" },

    { emoji: "🖧", year: 1969, event: "The first message is sent over ARPANET",
      wiki: "https://en.wikipedia.org/wiki/ARPANET" },

    { emoji: "🌐", year: 1991, event: "The World Wide Web opens to the public",
      wiki: "https://en.wikipedia.org/wiki/World_Wide_Web" }
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
