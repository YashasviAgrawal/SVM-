import { stock, svm } from "./images";

/**
 * All school facts live here. Values marked CONFIRM should be checked with the school
 * office before launch (sources conflicted during research).
 */
export const school = {
  name: "Sharda Vidhya Mandir",
  shortName: "SVM",
  tagline: "Where modernity blends with tradition",
  motto: "Service Before Self",
  mission: "To open doors and open minds.",
  founded: 1987,
  cbseSince: 1995,
  affiliationNo: "1730101",
  schoolCode: "10445",
  board: "CBSE",
  address: {
    line1: "B-11, Metal Colony, Ambabari",
    line2: "Sikar Road, Jaipur, Rajasthan",
    pin: "302039", // CONFIRM: CBSE SARAS lists 302012
  },
  geo: { lat: 26.948401, lng: 75.773445 },
  phones: [
    { label: "Office", display: "0141-2336192", tel: "+911412336192" },
    { label: "Office", display: "0141-2336193", tel: "+911412336193" },
    { label: "Mobile", display: "93513 62245", tel: "+919351362245" },
    { label: "Mobile", display: "93513 62165", tel: "+919351362165" },
  ],
  whatsapp: "919351362245",
  email: "svmjpr@gmail.com",
  principalEmail: "svmjpr1@gmail.com",
  officeHours: "Monday to Saturday, 8:30 am – 1:00 pm",
  timings: [
    { season: "Summer (April – Diwali)", hours: "7:25 am – 1:40 pm" },
    { season: "Winter (after Diwali)", hours: "8:00 am – 2:10 pm" },
  ],
  social: {
    facebook: "https://www.facebook.com/svmjpr/",
    instagram: "https://www.instagram.com/svm_public_school_1987/",
    instagramHandle: "@svm_public_school_1987",
  },
  // Google Form currently used for admissions. Replace with /admissions#enquire once the
  // enquiry API is connected to email or a sheet.
  admissionFormUrl: "https://forms.gle/AVh3ksPBxhpUDWde7",
  inspectionVideoId: "oURJnwR_URA",
} as const;

export const mainNav = [
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Campus", href: "/campus" },
  { label: "Student Life", href: "/student-life" },
  { label: "Results", href: "/results" },
];

export const moreNav = [
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "Mandatory Disclosure", href: "/mandatory-disclosure" },
  { label: "Fee Structure", href: "/admissions#fees" },
  { label: "Online TC", href: "/contact#tc" },
  { label: "Careers", href: "/contact#careers" },
];

export const heroSlides = [
  {
    image: svm.campus,
    title: ["Where modernity", "blends with tradition"],
    caption: "A CBSE senior secondary school in Ambabari, Jaipur, since 1987.",
  },
  {
    image: stock.blueUniforms,
    title: ["Open doors,", "open minds"],
    caption: "Nursery to Class XII, with Science, Commerce and Humanities.",
  },
  {
    image: stock.pool,
    title: ["Nine acres", "to grow in"],
    caption: "Playgrounds, a swimming pool, labs and two libraries on one campus.",
  },
  {
    image: stock.dancers,
    title: ["Every talent", "finds a stage"],
    caption: "Music, dance, NCC, scouts and sport alongside the classroom.",
  },
  {
    image: stock.girlInClass,
    title: ["100% in Class X,", "three years running"],
    caption: "Every Class X student passed the CBSE board in 2024, 2025 and 2026.",
  },
];

export const stats = [
  { value: 1987, label: "Year founded", format: "plain" as const },
  { value: 9.9, label: "Acres of campus", decimals: 1 },
  { value: 2200, label: "Students", suffix: "+" },
  { value: 100, label: "Class X pass rate", suffix: "%" },
  { value: 32, label: "Smart classrooms" },
  { value: 10756, label: "Library books" },
];

export const stages = [
  {
    name: "Pre-Primary",
    classes: "Nursery – KG",
    blurb: "Play, stories and first friendships in a warm, safe space.",
    image: stock.playField,
  },
  {
    name: "Primary",
    classes: "Classes I – V",
    blurb: "Strong foundations in reading, numbers and curiosity.",
    image: stock.youngClass,
  },
  {
    name: "Middle",
    classes: "Classes VI – VIII",
    blurb: "Labs, projects and clubs that turn questions into skills.",
    image: stock.girlsAtDesk,
  },
  {
    name: "Secondary",
    classes: "Classes IX – X",
    blurb: "Focused CBSE board preparation with personal mentoring.",
    image: stock.newspaperReaders,
  },
  {
    name: "Senior Secondary",
    classes: "Classes XI – XII",
    blurb: "Science, Commerce and Humanities streams.",
    image: stock.girlAtBoard,
  },
];

export const quickLinks = [
  { label: "Results", href: "/results", icon: svm.icons.results, image: stock.girlInClass },
  { label: "Achievements", href: "/student-life#achievements", icon: svm.icons.achievements, image: stock.costumeKids },
  { label: "Gallery", href: "/gallery", icon: svm.icons.gallery, image: stock.dancersSteps },
  { label: "Downloads", href: "/mandatory-disclosure#documents", icon: svm.icons.downloads, image: stock.bookshelf },
  { label: "Careers", href: "/contact#careers", icon: svm.icons.careers, image: stock.teacherBoard },
];

export const facilities = [
  { name: "Swimming pool", detail: "Swimming taught as part of sport", image: stock.poolLanes },
  { name: "Science labs", detail: "Physics, Chemistry and Biology", image: stock.lab },
  { name: "Two libraries", detail: "10,756 books", image: stock.library },
  { name: "Smart classrooms", detail: "32 digital classrooms", image: stock.smartClass },
  { name: "Computer labs", detail: "2 labs, 75 computers, 200 Mbps Wi-Fi", image: stock.computerLab },
  { name: "Playground", detail: "37,495 m² of open fields", image: stock.track },
  { name: "Auditorium", detail: "Annual day, assemblies and events", image: stock.stageGroup },
  { name: "School transport", detail: "Bus routes across Jaipur up to Chomu", image: stock.schoolBus },
];

export const achievements = [
  {
    title: "Class X 2025-26: all 155 students passed",
    text: "A third straight year of 100% results in the CBSE Class X board examination.",
    image: stock.girlInClass,
    href: "/results",
  },
  {
    title: "Class XII 2024-25: 149 of 149 passed",
    text: "100% results across Science, Commerce and Humanities.",
    image: stock.classTeacher,
    href: "/results",
  },
  {
    title: "Class X toppers 2024-25",
    text: "Meet the students who led the batch of 156.",
    image: svm.toppersX,
    href: "/results#toppers",
    contain: true,
  },
  {
    title: "Class XII Science and Commerce toppers",
    text: "Our 2024-25 senior secondary toppers.",
    image: svm.toppersXII,
    href: "/results#toppers",
    contain: true,
  },
];

// Event types listed for the school in public directories. Add dated posts as they happen.
export const events = [
  { title: "Annual Day", text: "The whole school on one stage: music, dance and drama.", image: stock.costumeKids },
  { title: "Sports Day", text: "Track events, relays and house competitions.", image: stock.track },
  { title: "Science Exhibition", text: "Working models built by students from Class VI up.", image: stock.lab },
  { title: "Youth Parliament", text: "Students debate real issues in a mock parliament.", image: stock.handRaised },
  { title: "Summer Camp", text: "Swimming, art and skills over the summer break.", image: stock.poolOutdoor },
  { title: "Blood Donation Camp", text: "Parents and staff give back to the city.", image: stock.bloodDonation },
];

export const activities = [
  { name: "NCC", image: stock.nccMarch },
  { name: "Scouts & Guides", image: stock.scoutsMap },
  { name: "Swimming", image: stock.poolOutdoor },
  { name: "Athletics", image: stock.teamKids },
  { name: "Football", image: stock.football },
  { name: "Classical dance", image: stock.soloDancer },
  { name: "Folk dance", image: stock.ghoomar },
  { name: "Music", image: stock.musicKids },
  { name: "Yoga", image: stock.yogaGround },
  { name: "Science club", image: stock.scienceTube },
  { name: "Reading club", image: stock.newspaperReaders },
  { name: "Youth Parliament", image: stock.groupPhoto },
];

export const results = {
  classX: [
    { year: "2023-24", appeared: 173, passed: 173 },
    { year: "2024-25", appeared: 156, passed: 156 },
    { year: "2025-26", appeared: 155, passed: 155 },
  ],
  classXII: [
    { year: "2022-23", appeared: 158, passed: 149 },
    { year: "2023-24", appeared: 142, passed: 134 },
    { year: "2024-25", appeared: 149, passed: 149 },
  ],
};

export const fees = [
  { cls: "Nursery", fee: 45000 },
  { cls: "Classes I – V", fee: 62000 },
  { cls: "Classes VI – VIII", fee: 67200 },
  { cls: "Classes IX – X", fee: 78000 },
  { cls: "Classes XI – XII (Science)", fee: 94000 },
  { cls: "Classes XI – XII (Commerce / Humanities)", fee: 88000 },
];

// CONFIRM the steps and documents with the admissions office.
export const admissionSteps = [
  { title: "Send an enquiry", text: "Fill the form below or call the office. We reply within a working day.", image: stock.motherDaughter },
  { title: "Visit the campus", text: "Meet our team, see the classrooms and ask your questions.", image: stock.playground },
  { title: "Register", text: "Collect and submit the registration form with documents.", image: stock.writing },
  { title: "Interaction", text: "A friendly meeting with the child and parents. No entrance exam for early years.", image: stock.floorClass },
  { title: "Confirm the seat", text: "Pay the fee and receive the admission confirmation.", image: stock.blueUniforms },
];

export const admissionDocuments = [
  "Birth certificate",
  "Transfer certificate (Class II onwards)",
  "Last report card",
  "Aadhaar card of child and parents",
  "Four passport-size photographs",
];

export const faqs = [
  {
    q: "What are the school timings?",
    a: "Summer (April to Diwali): 7:25 am to 1:40 pm. Winter: 8:00 am to 2:10 pm. The second Saturday of every month is a holiday.",
  },
  {
    q: "Is school transport available?",
    a: "Yes. Buses run on routes across north Jaipur, as far as Chomu. Transport is charged separately by route; call the office for the route list.",
  },
  {
    q: "Which streams are offered in Class XI?",
    a: "Science, Commerce and Humanities, all under the CBSE curriculum.",
  },
  {
    q: "Are seats reserved under RTE?",
    a: "Yes. Seats in Class I are reserved under the Right to Education Act as per government rules.",
  },
  {
    q: "How are fees paid?",
    a: "Fees are paid by post-dated cheques as per the fee schedule. A ₹250 charge applies to bounced cheques. Fees once paid are not refundable.",
  },
];

export const timeline = [
  { year: "1987", text: "Sharda Vidhya Mandir opens in Ambabari with the motto 'Service Before Self'.", image: svm.campus },
  { year: "1994", text: "No-objection certificate from the Rajasthan Education Department.", image: stock.writing },
  { year: "1995", text: "Affiliated to the Central Board of Secondary Education (No. 1730101).", image: stock.classTeacher },
  { year: "2024", text: "CBSE affiliation extended to 2029.", image: stock.girlAtBoard },
  { year: "Today", text: "About 2,200 students across Junior and Senior campuses.", image: stock.blueUniforms },
];

export const leadership = [
  { name: "Ms Juhi Shah", role: "Principal", detail: "M.A., M.Ed., 31 years in education" },
  { name: "Mr Anupam Kumar Shah", role: "Director", detail: "Grievance officer" },
];

export const committee = [
  { name: "Dr C. K. Shah", role: "President" },
  { name: "Mr K. C. Shah", role: "Secretary" },
  { name: "Ms Sadhana Sharma", role: "Senior Vice President" },
  { name: "Mr D. S. Sharma", role: "Vice President" },
  { name: "Ms J. K. Shah", role: "Treasurer" },
];
