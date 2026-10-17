/**
 * Every image on the site is referenced from here, so swapping a photo is a one-line change.
 *
 * All files are served from public/images (run `npm run images:download` to fetch them again).
 * Hosting them locally matters: remote Unsplash images can take longer than next/image's 7-second
 * fetch limit and render as blank boxes, and the old svmjpr.com server is compromised.
 *
 * STOCK IMAGES (Unsplash licence) stand in for real SVM photography. Replace them with the
 * school's own photos before launch: drop the new file into public/images and change the path here.
 * See README "Photo shot list".
 */

const img = (path: string) => `/images/${path}`;

export const svm = {
  logo: img("svm/logo.jpg"),
  logoGold: img("svm/logo-gold.png"),
  campus: img("svm/campus.jpg"),
  pamphlet: img("svm/pamphlet.jpg"),
  toppersXII: img("svm/toppers-xii.jpg"),
  toppersX: img("svm/toppers-x.jpg"),
  icons: {
    downloads: img("svm/icon-downloads.png"),
    achievements: img("svm/icon-achievements.png"),
    careers: img("svm/icon-careers.png"),
    results: img("svm/icon-results.png"),
    gallery: img("svm/icon-gallery.png"),
  },
} as const;

export const stock = {
  // students & classrooms
  blueUniforms: img("stock/blue-uniforms.jpg"),
  groupPhoto: img("stock/group-photo.jpg"),
  girlInClass: img("stock/girl-in-class.jpg"),
  youngClass: img("stock/young-class.jpg"),
  girlsAtDesk: img("stock/girls-at-desk.jpg"),
  boysWithBook: img("stock/boys-with-book.jpg"),
  boysAtTable: img("stock/boys-at-table.jpg"),
  boyOnBench: img("stock/boy-on-bench.jpg"),
  boysLaughing: img("stock/boys-laughing.jpg"),
  newspaperReaders: img("stock/newspaper-readers.jpg"),
  floorClass: img("stock/floor-class.jpg"),
  handRaised: img("stock/hand-raised.jpg"),
  writing: img("stock/writing.jpg"),
  assemblyPrayer: img("stock/assembly-prayer.jpg"),
  playground: img("stock/playground.jpg"),
  playField: img("stock/play-field.jpg"),
  // teachers
  classTeacher: img("stock/class-teacher.jpg"),
  teacherBoard: img("stock/teacher-board.jpg"),
  girlAtBoard: img("stock/girl-at-board.jpg"),
  // families
  family: img("stock/family.jpg"),
  motherDaughter: img("stock/mother-daughter.jpg"),
  // facilities
  lab: img("stock/lab.jpg"),
  labRoom: img("stock/lab-room.jpg"),
  scienceTube: img("stock/science-tube.jpg"),
  computerClass: img("stock/computer-class.jpg"),
  computerLab: img("stock/computer-lab.jpg"),
  smartClass: img("stock/smart-class.jpg"),
  library: img("stock/library.jpg"),
  bookshelf: img("stock/bookshelf.jpg"),
  pool: img("stock/pool.jpg"),
  poolLanes: img("stock/pool-lanes.jpg"),
  poolOutdoor: img("stock/pool-outdoor.jpg"),
  schoolBus: img("stock/school-bus.jpg"),
  jaipurBus: img("stock/jaipur-bus.jpg"),
  // sports, NCC, scouts
  track: img("stock/track.jpg"),
  football: img("stock/football.jpg"),
  cricket: img("stock/cricket.jpg"),
  teamKids: img("stock/team-kids.jpg"),
  yogaGround: img("stock/yoga-ground.jpg"),
  yogaGirl: img("stock/yoga-girl.jpg"),
  nccMarch: img("stock/ncc-march.jpg"),
  scoutsMap: img("stock/scouts-map.jpg"),
  scoutBadge: img("stock/scout-badge.jpg"),
  // culture, stage, clubs
  dancers: img("stock/dancers.jpg"),
  stageGroup: img("stock/stage-group.jpg"),
  dancersSteps: img("stock/dancers-steps.jpg"),
  soloDancer: img("stock/solo-dancer.jpg"),
  costumeKids: img("stock/costume-kids.jpg"),
  ghoomar: img("stock/ghoomar.jpg"),
  bhavai: img("stock/bhavai.jpg"),
  musicKids: img("stock/music-kids.jpg"),
  kidsArt: img("stock/kids-art.jpg"),
  planting: img("stock/planting.jpg"),
  bloodDonation: img("stock/blood-donation.jpg"),
  // Jaipur
  hawaMahal: img("stock/hawa-mahal.jpg"),
  amberFort: img("stock/amber-fort.jpg"),
  jaipurDoor: img("stock/jaipur-door.jpg"),
} as const;

export type GalleryCategory = "Campus" | "Classrooms" | "Sports" | "Culture" | "Achievements";

export const gallery: { src: string; alt: string; category: GalleryCategory; tall?: boolean; contain?: boolean }[] = [
  { src: svm.campus, alt: "Sharda Vidhya Mandir campus, Ambabari", category: "Campus" },
  { src: svm.toppersX, alt: "Class X toppers 2024-25", category: "Achievements", contain: true },
  { src: stock.blueUniforms, alt: "Students in school uniform", category: "Classrooms" },
  { src: stock.yogaGround, alt: "Yoga on the school ground", category: "Sports" },
  { src: stock.costumeKids, alt: "Young performers in costume", category: "Culture", tall: true },
  { src: stock.classTeacher, alt: "A lesson in progress", category: "Classrooms" },
  { src: stock.pool, alt: "Swimming pool", category: "Campus" },
  { src: stock.track, alt: "Athletics on sports day", category: "Sports" },
  { src: svm.toppersXII, alt: "Class XII Science and Commerce toppers 2024-25", category: "Achievements", contain: true },
  { src: stock.computerClass, alt: "Computer class", category: "Classrooms" },
  { src: stock.ghoomar, alt: "Rajasthani folk dance", category: "Culture" },
  { src: stock.nccMarch, alt: "NCC cadets on parade", category: "Sports" },
  { src: stock.library, alt: "Library reading room", category: "Campus" },
  { src: stock.newspaperReaders, alt: "Students reading the morning newspaper", category: "Classrooms" },
  { src: stock.stageGroup, alt: "Annual day on stage", category: "Culture" },
  { src: stock.cricket, alt: "Cricket practice", category: "Sports", tall: true },
  { src: stock.girlAtBoard, alt: "A student solving a problem on the board", category: "Classrooms" },
  { src: stock.playground, alt: "Junior playground", category: "Campus" },
  { src: stock.musicKids, alt: "Music practice", category: "Culture" },
  { src: stock.scoutsMap, alt: "Scouts reading a map", category: "Sports" },
  { src: stock.lab, alt: "Science laboratory", category: "Classrooms" },
  { src: stock.dancersSteps, alt: "Classical dance group", category: "Culture" },
  { src: stock.assemblyPrayer, alt: "Morning prayer", category: "Classrooms" },
  { src: stock.poolLanes, alt: "Swimming lanes", category: "Sports", tall: true },
  { src: svm.pamphlet, alt: "SVM admission pamphlet", category: "Achievements", contain: true },
  { src: stock.soloDancer, alt: "Solo dance performance", category: "Culture", tall: true },
  { src: stock.smartClass, alt: "Smart classroom", category: "Campus" },
  { src: stock.boysLaughing, alt: "Friends on the field", category: "Sports" },
  { src: stock.kidsArt, alt: "Artwork from the junior classes", category: "Culture" },
  { src: stock.boysWithBook, alt: "Reading together in class", category: "Classrooms" },
];
