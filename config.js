@@ -1,62 +0,0 @@
// ============================================================
//  EDIT THIS FILE WITH YOUR OWN DETAILS. Nothing else needs
//  to change. Save, commit, push — your live site updates.
// ============================================================

const SITE_CONFIG = {

  // --- Admin card (shown when the admin icon is clicked) ---
  admin: {
    name: "Gourab Burman",
    photo: "assets/admin-photo.jpeg", // put your photo in /assets and rename it, or change this path
    linkedin: "https://www.linkedin.com/in/gourab-kumar-burman-473b7a139/"
  },

  // --- Countdown target: Maha Shashthi / Puja start date ---
  // Format: YYYY-MM-DD. Update the year each time you redeploy for a new year.
  countdownTargetDate: "2026-10-16",

  // --- YouTube ---
  youtube: {
    // The player loads THIS playlist directly and plays songs from it —
    // no need to list individual songs by hand anymore.
    // Get the ID from your playlist URL: youtube.com/playlist?list=PLAYLIST_ID
    playlistId: "PLdv3eXxiZj-c",

    // Shown when the YouTube icon (top right) is tapped, and inside the admin card.
    playlistUrl: "https://www.youtube.com/playlist?list=PLdv3eXxiZj-c"
  },

  // NOTE: songs are no longer listed here — the player pulls the live track
  // list straight from youtube.playlistId above. Add/remove/reorder songs by
  // editing the playlist itself on YouTube; the site will reflect it on next load.
  // If a track has embedding disabled by its uploader, the player will show a
  // "watch on YouTube" link for that track instead of playing it inline —
  // that restriction is set per-video on YouTube's side and can't be bypassed.

  // --- Puja pandal routes ---
  // Google "My Maps" embed links. To make your own: go to mymaps.google.com,
  // create a map, add all your club stops as markers (or a route line),
  // then Share → make public → copy the link, or use the format:
  // https://www.google.com/maps/d/embed?mid=YOUR_MAP_ID&hl=en
  mapRoutes: {
    // NOTE: both links you gave me point to the SAME map (same mid= id) —
    // this is very likely a copy-paste slip. Right now both tabs will show
    // the identical map until you swap in your real South Kolkata map link.
    north: "https://www.google.com/maps/d/edit?mid=10LEbb7bMSSSToAIK_Th4Qtas8nVK9xI&ll=0%2C0&z=18",
    south: "https://www.google.com/maps/d/edit?mid=1WtvNwqGzLS7Bkhgr4ChJA5IRRiEDF-E&ll=0%2C0&z=18"
  },

  // --- Visitor counter (free, no signup — powered by CountAPI) ---
  counter: {
    namespace: "maa-aschhe-site", // change to something unique to you, e.g. your name + year
    key: "visits"
  },

  // --- Dhak sound ---
  // Add your own dhak/dhaak beat audio file at assets/dhak.mp3
  // (Claude cannot supply copyrighted or licensed audio for you — you'll need to
  // source a royalty-free dhak sample, e.g. from Pixabay Audio or Freesound, and
  // drop the mp3 in the assets folder with this exact filename.)
  dhakAudioSrc: "assets/dhak.mp3"
};
