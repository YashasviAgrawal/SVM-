// Downloads every image the site uses into public/images, so pages never depend on a remote host.
// (Remote Unsplash images can take longer than next/image's 7 s fetch limit, which leaves blank
// slots, and svmjpr.com is compromised.) Existing files are skipped; pass --force to re-download.
// Usage: npm run images:download
import { access, mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const SVM = "https://svmjpr.com/wp-content/uploads";
const UNSPLASH = (id, w = 2000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80&fm=jpg`;

/** local path (under public/images) → source URL */
const files = {
  // ── the school's own images (from the old website) ──
  "svm/logo.jpg": `${SVM}/2015/07/Sharda-Vidhya-Mandir1-LOGO1.jpg`,
  "svm/logo-gold.png": `${SVM}/2023/06/cropped-SVM-Logo-Golden-PNG-192x192.png`,
  "svm/campus.jpg": `${SVM}/2015/07/svm-photo.jpg`,
  "svm/pamphlet.jpg": `${SVM}/revslider/Home%20Page/Pamphlet2.jpg`,
  "svm/toppers-xii.jpg": `${SVM}/2026/01/XII-Science-Comm.-2024-25-Mobile-5.jpg`,
  "svm/toppers-x.jpg": `${SVM}/2026/01/X-Toppers-Mobile-2024-25.jpg`,
  "svm/icon-downloads.png": `${SVM}/2015/07/dl2-300x300.png`,
  "svm/icon-achievements.png": `${SVM}/2015/07/r3-300x300.png`,
  "svm/icon-careers.png": `${SVM}/2015/07/cr2-300x300.png`,
  "svm/icon-results.png": `${SVM}/2015/07/r1-300x300.png`,
  "svm/icon-gallery.png": `${SVM}/2015/07/cm2-300x300.png`,

  // ── stock photos (Unsplash licence) standing in for SVM photography ──
  "stock/blue-uniforms.jpg": UNSPLASH("photo-1569173675610-42c361a86e37"),
  "stock/group-photo.jpg": UNSPLASH("photo-1524069290683-0457abfe42c3"),
  "stock/girl-in-class.jpg": UNSPLASH("photo-1572847748080-bac263fae977"),
  "stock/young-class.jpg": UNSPLASH("photo-1692269725836-fbd72e98883f"),
  "stock/girls-at-desk.jpg": UNSPLASH("photo-1692269725911-87697c558be1"),
  "stock/boys-with-book.jpg": UNSPLASH("photo-1692269725827-699e04a11cdf"),
  "stock/boys-at-table.jpg": UNSPLASH("photo-1692269726060-9c604e06f63b"),
  "stock/boy-on-bench.jpg": UNSPLASH("photo-1627475312657-3752fa068473"),
  "stock/lab.jpg": UNSPLASH("photo-1602052577122-f73b9710adba"),
  "stock/lab-room.jpg": UNSPLASH("photo-1605781573960-d12a0d37b2d4"),
  "stock/library.jpg": UNSPLASH("photo-1564981797816-1043664bf78d"),
  "stock/bookshelf.jpg": UNSPLASH("photo-1524995997946-a1c2e315a42f"),
  "stock/pool.jpg": UNSPLASH("photo-1730244548329-4ae2f4fcaa7c"),
  "stock/pool-lanes.jpg": UNSPLASH("photo-1772519275437-3029ac1d3941"),
  "stock/pool-outdoor.jpg": UNSPLASH("photo-1775993167757-f919582c62da"),
  "stock/track.jpg": UNSPLASH("photo-1700914299961-d8f91559d85d"),
  "stock/football.jpg": UNSPLASH("photo-1786532966169-cd505c959fb4"),
  "stock/team-kids.jpg": UNSPLASH("photo-1665256452878-b2983482c50d"),
  "stock/play-field.jpg": UNSPLASH("photo-1781938991285-374707809f4d"),
  "stock/dancers.jpg": UNSPLASH("photo-1645264090488-a019de493023"),
  "stock/stage-group.jpg": UNSPLASH("photo-1688820661462-a44e4b2770e8"),
  "stock/dancers-steps.jpg": UNSPLASH("photo-1756370256926-e48ca54c5efe"),
  "stock/solo-dancer.jpg": UNSPLASH("photo-1764014792668-bc484714744f"),
  "stock/hawa-mahal.jpg": UNSPLASH("photo-1477587458883-47145ed94245"),
  "stock/amber-fort.jpg": UNSPLASH("photo-1599661046289-e31897846e41"),
  "stock/jaipur-door.jpg": UNSPLASH("photo-1524228529766-4d7fe5dc55ca"),
  "stock/computer-class.jpg": UNSPLASH("photo-1778489769184-45868633c527"),
  "stock/computer-lab.jpg": UNSPLASH("photo-1719159381981-1327b22aff9b"),
  "stock/smart-class.jpg": UNSPLASH("photo-1719159381962-4170890ada4e"),
  "stock/class-teacher.jpg": UNSPLASH("photo-1709290749293-c6152a187b14"),
  "stock/teacher-board.jpg": UNSPLASH("photo-1511629091441-ee46146481b6"),
  "stock/girl-at-board.jpg": UNSPLASH("photo-1522661067900-ab829854a57f"),
  "stock/newspaper-readers.jpg": UNSPLASH("flagged/photo-1574097656146-0b43b7660cb6"),
  "stock/floor-class.jpg": UNSPLASH("flagged/photo-1574098335395-18cf525e45d6"),
  "stock/hand-raised.jpg": UNSPLASH("photo-1581726690015-c9861fa5057f"),
  "stock/writing.jpg": UNSPLASH("photo-1534644107580-3a4dbd494a95"),
  "stock/school-bus.jpg": UNSPLASH("photo-1721839781533-cfc9811d5e54"),
  "stock/jaipur-bus.jpg": UNSPLASH("photo-1648039927735-1ef91b61de34"),
  "stock/assembly-prayer.jpg": UNSPLASH("photo-1573894997713-de07a124df43"),
  "stock/yoga-ground.jpg": UNSPLASH("photo-1649008726820-d90aeb70c32e"),
  "stock/yoga-girl.jpg": UNSPLASH("photo-1769095211505-fbcbf6530f02"),
  "stock/ncc-march.jpg": UNSPLASH("photo-1585802540432-60662b65ca62"),
  "stock/scouts-map.jpg": UNSPLASH("photo-1603714196939-6f6436c8d0c5"),
  "stock/scout-badge.jpg": UNSPLASH("photo-1779286351762-8d263f04947e"),
  "stock/costume-kids.jpg": UNSPLASH("photo-1653794055695-4aad1194b889"),
  "stock/ghoomar.jpg": UNSPLASH("photo-1650709244890-cc35b30d8036"),
  "stock/bhavai.jpg": UNSPLASH("photo-1757451631936-a4d7a51954c0"),
  "stock/music-kids.jpg": UNSPLASH("photo-1786859537641-fbe3ee1b9692"),
  "stock/cricket.jpg": UNSPLASH("photo-1565787112882-4e7d9d29269c"),
  "stock/kids-art.jpg": UNSPLASH("photo-1761403942462-04b8b97f1fe9"),
  "stock/science-tube.jpg": UNSPLASH("photo-1758685734153-132c8620c1bd"),
  "stock/planting.jpg": UNSPLASH("photo-1698692014130-d9782b2f955f"),
  "stock/blood-donation.jpg": UNSPLASH("photo-1536856136534-bb679c52a9aa"),
  "stock/family.jpg": UNSPLASH("photo-1780980301761-f6e0fa6f0bdf"),
  "stock/mother-daughter.jpg": UNSPLASH("photo-1589169011402-8b2cbd1ee593"),
  "stock/playground.jpg": UNSPLASH("photo-1566938089211-5821c49b3548"),
  "stock/boys-laughing.jpg": UNSPLASH("photo-1502781252888-9143ba7f074e"),
};

const force = process.argv.includes("--force");
const exists = (p) => access(p).then(() => true, () => false);

async function get(path, url) {
  const out = join("public", "images", path);
  if (!force && (await exists(out))) return console.log(`· ${path} (already there)`);
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(90_000) });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      await mkdir(dirname(out), { recursive: true });
      await writeFile(out, Buffer.from(await res.arrayBuffer()));
      return console.log(`✓ ${path}`);
    } catch (err) {
      if (attempt === 3) {
        process.exitCode = 1;
        return console.error(`✗ ${path}: ${err.message}`);
      }
    }
  }
}

// a few at a time: fast, without hammering either server
const queue = Object.entries(files);
await Promise.all(
  Array.from({ length: 6 }, async () => {
    for (let job = queue.shift(); job; job = queue.shift()) await get(...job);
  }),
);
console.log("\nDone. Images are in public/images.");
