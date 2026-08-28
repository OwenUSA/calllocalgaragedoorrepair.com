// Todo el contenido del sitio vive aqui. Las paginas y los componentes solo lo pintan.
// Cambiar el telefono, el correo o una direccion es cambiar una linea de este archivo.

export const site = {
  brand: 'Call Local Garage Door Repair',
  brandFirst: 'Call Local',
  brandRest: 'Garage Door Repair',
  domain: 'calllocalgaragedoorrepair.com',
  url: 'https://calllocalgaragedoorrepair.com',
  // OJO: telefono inventado, sustituir por el real antes de publicar
  phone: {
    href: 'tel:+13056142870',
    display: '(305) 614-2870',
    long: '1 (305) 614-2870',
    schema: '+1-305-614-2870',
  },
  logo: {
    header: '/img/logo-icon.png',
    footer: '/img/logo-icon.png',
    width: 48,
    height: 45,
    alt: '',
  },
  email: 'service@calllocalgaragedoorrepair.com',
  privacyEmail: 'privacy@calllocalgaragedoorrepair.com',
  hoursLong: 'Mon – Sat: 7:00 AM – 9:00 PM',
  hoursSunday: 'Sun & holidays: emergency dispatch 24/7',
  brandline: 'Miami’s Garage Door Crew, One Call Away',
  heroHome: '/img/hero-garage.jpg',
  heroCity: '/img/hero-garage.jpg',
  legalUpdated: 'August 28, 2026',
  year: 2026,
  themeColor: '#1f1a15',
};

export const mainCitySlug = 'Miami';

export const cities = [
  {
    slug: 'Miami',
    name: 'Miami',
    zip: '33137',
    addr1: '2915 Biscayne Blvd, Fl 136',
    street: 'Biscayne Boulevard',
    county: 'Miami-Dade County',
    lat: 25.806,
    lon: -80.189,
    mapQuery: '2915 Biscayne Blvd Miami FL 33137',
    tag: 'Main Dispatch',
    coverageMeta: 'Where the trucks start the day · Dispatch desk open 24/7',
    main: true,
    note:
      'Miami sits in the high-velocity hurricane zone, so a new door here has to carry a Miami-Dade Notice of Acceptance and be permitted for the opening it fills. The other half of our work in the city is corrosion: the air off Biscayne Bay in Edgewater, Morningside and the Upper East Side chews through rollers, hinges and bottom brackets long before the panels themselves wear out. In Brickell and downtown we mostly work on townhouse and condo garages with tight headroom, where a low-clearance track and a quiet belt drive matter more than raw motor power.',
    neighborhoods: ['Downtown Miami', 'Brickell', 'Edgewater', 'Wynwood', 'Design District', 'Midtown', 'Morningside', 'Upper East Side', 'Little Havana', 'Little Haiti', 'Coconut Grove', 'Coral Gables', 'Miami Beach'],
  },
  {
    slug: 'MiamiGardens',
    name: 'Miami Gardens',
    zip: '33056',
    addr1: '17161 NW 27th Ave, Unit 3370',
    street: 'NW 27th Avenue',
    county: 'Miami-Dade County',
    lat: 25.935,
    lon: -80.243,
    mapQuery: '17161 NW 27th Ave Miami Gardens FL 33056',
    tag: 'Miami-Dade County',
    coverageMeta: 'Covering north Miami-Dade, Opa-locka, Hialeah & Miami Lakes',
    note:
      'Most of Miami Gardens was built out in the 1950s and 60s, so we still see original single-car openings running on old extension springs with no safety cables — the first thing our technician looks for. Around the stadium and along NW 27th Avenue the driveways are short and the doors cycle all day, which wears rollers and hinges fast. On the newer streets in Andover and Norland the calls are mostly openers: logic boards cooked by a summer storm and safety sensors knocked out of alignment by a bicycle.',
    neighborhoods: ['Miami Gardens', 'Carol City', 'Norland', 'Andover', 'Bunche Park', 'Golden Glades', 'Opa-locka', 'Miami Lakes', 'Hialeah', 'North Miami Beach', 'Aventura'],
  },
  {
    slug: 'Weston',
    name: 'Weston',
    zip: '33331',
    addr1: '2625 Executive Park Dr, Ste 4207',
    street: 'Executive Park Drive',
    county: 'Broward County',
    lat: 26.087,
    lon: -80.39,
    mapQuery: '2625 Executive Park Dr Weston FL 33331',
    tag: 'Broward County',
    coverageMeta: 'Covering Weston, Sunrise, Davie, Plantation & Pembroke Pines',
    note:
      'Weston is planned-community territory: Weston Hills, Savanna and Bonaventure are full of two- and three-car doors in HOA-approved colors and panel styles, so when a section is damaged the match matters as much as the repair. Those doors are wide and heavy, and the weight lands on the springs and the opener — high-cycle torsion springs and a belt drive with battery backup are what we fit most here. We also run scheduled maintenance for property managers across the community.',
    neighborhoods: ['Weston', 'Weston Hills', 'Bonaventure', 'Savanna', 'Indian Trace', 'Sunrise', 'Davie', 'Southwest Ranches', 'Plantation', 'Cooper City', 'Pembroke Pines'],
  },
  {
    slug: 'BocaRaton',
    name: 'Boca Raton',
    zip: '33487',
    addr1: '7781 NW Beacon Square Blvd, Unit 1191',
    street: 'Beacon Square Boulevard',
    county: 'Palm Beach County',
    lat: 26.402,
    lon: -80.106,
    mapQuery: '7781 NW Beacon Square Blvd Boca Raton FL 33487',
    tag: 'Palm Beach County',
    coverageMeta: 'Covering Boca Raton, Deerfield Beach, Delray Beach & Parkland',
    note:
      'Boca Raton stretches from the barrier-island homes off A1A to the newer developments around Beacon Square and Broken Sound. On the east side salt air is the enemy: rollers, hinges, cables and bottom brackets rust from the inside out, and we replace them with galvanized and nylon parts. West of the Turnpike the calls skew toward openers and tired springs on doors that cycle several times a day, plus panel matching in communities with strict rules about the face of the door.',
    neighborhoods: ['Boca Raton', 'Boca Teeca', 'Broken Sound', 'Beacon Square', 'Boca Del Mar', 'Highland Beach', 'Deerfield Beach', 'Delray Beach', 'Parkland', 'Coconut Creek'],
  },
  {
    slug: 'WestPalmBeach',
    name: 'West Palm Beach',
    zip: '33407',
    addr1: '801 Northpoint Pkwy, Ste G-183',
    street: 'Northpoint Parkway',
    county: 'Palm Beach County',
    lat: 26.753,
    lon: -80.087,
    mapQuery: '801 Northpoint Pkwy West Palm Beach FL 33407',
    tag: 'Palm Beach County',
    coverageMeta: 'Covering West Palm Beach, Riviera Beach, Lake Park & North Palm Beach',
    note:
      'West Palm Beach runs from 1920s bungalows in Northwood, with wooden doors and hand-built jambs, to new construction out by Northpoint and Village Boulevard. That mix is why the truck carries both: hardware that still fits an old wood door and impact-rated panels for the newer openings. East of Flagler, close to the Intracoastal, the calls are almost always corrosion — cables, drums and bottom fixtures swapped for galvanized parts before they let go.',
    neighborhoods: ['West Palm Beach', 'Northwood', 'Northpoint', 'Palm Beach Lakes', 'Flamingo Park', 'El Cid', 'Riviera Beach', 'Lake Park', 'North Palm Beach', 'Palm Beach Gardens', 'Lake Worth', 'Wellington', 'Royal Palm Beach'],
  },
];

export const mainCity = cities.find((c) => c.slug === mainCitySlug);

export const getCity = (slug) => cities.find((c) => c.slug === slug);

// Los cinco del desplegable de Services, estandar en todas las landings.
// En las paginas de ciudad "Overhead Doors" no tiene tarjeta propia y va a la reja entera.
export const navServices = [
  { label: 'Garage Door Repair', hash: 'repair', homeHash: 'services' },
  { label: 'Garage Door Installation', hash: 'installation', homeHash: 'installation' },
  { label: 'Garage Door Springs', hash: 'springs', homeHash: 'springs' },
  { label: 'Garage Door Openers', hash: 'openers', homeHash: 'openers' },
  { label: 'Overhead Doors', hash: 'services', homeHash: 'overhead' },
];

export const homeServices = [
  {
    id: 'springs',
    icon: 'grid',
    title: 'Garage Door Springs',
    text: 'Torsion and extension springs replaced with high-cycle, code-compliant parts. We replace springs in pairs so the door stays balanced and the opener is not left carrying the weight.',
    bullets: ['Broken torsion spring replacement', 'Extension spring & safety cable service', 'Door balance and tension adjustment'],
  },
  {
    id: 'openers',
    icon: 'opener',
    title: 'Garage Door Openers',
    text: 'Chain, belt and screw-drive openers diagnosed, repaired or replaced. We install quiet belt-drive and Wi-Fi smart openers, and set up battery backup where the power goes out often.',
    bullets: ['Motor, gear & circuit board repair', 'Safety sensor alignment', 'Remote, keypad & smart app setup'],
  },
  {
    id: 'cables',
    icon: 'gear',
    title: 'Cables, Rollers & Tracks',
    text: 'Frayed cables, cracked rollers and bent tracks are what put a door off its rails. We straighten, realign or replace the hardware and get the panels running true again.',
    bullets: ['Off-track door correction', 'Nylon roller upgrades', 'Hinge, bracket & drum replacement'],
  },
  {
    id: 'installation',
    icon: 'doorHouse',
    title: 'Garage Door Installation',
    text: 'Steel, aluminum, wood and full-view glass doors built for Miami weather — including impact-rated models approved for the high-velocity hurricane zone.',
    bullets: ['Measured on site at your home', 'Insulated & impact-rated options', 'Full haul-away of your old door'],
  },
  {
    id: 'overhead',
    icon: 'shieldBar',
    title: 'Overhead & Commercial Doors',
    text: 'Warehouses, storefronts, condo garages and HOA properties. We service rolling steel doors, sectional doors, gate operators and high-cycle commercial systems.',
    bullets: ['Rolling steel & sectional service', 'Loading dock & high-cycle springs', 'Scheduled preventive maintenance'],
  },
  {
    id: 'emergency',
    icon: 'bolt',
    title: '24/7 Emergency Service',
    text: 'A garage door stuck open leaves the house wide open. Our emergency crews run nights, weekends and holidays across the whole coverage area.',
    bullets: ['Door stuck open or closed', 'Storm & impact damage', 'Temporary securing of the opening'],
  },
];

export const cityServices = [
  {
    id: 'repair',
    icon: 'wrench',
    title: () => 'Garage Door Repair',
    sub: 'Fast, reliable repairs for all makes and models.',
    checks: ['Same-day service', 'All major brands', 'Workmanship warranty'],
    cta: 'Learn more',
  },
  {
    id: 'installation',
    icon: 'doorHouse',
    title: () => 'Garage Door Installation',
    sub: 'New doors measured and fitted at your home.',
    checks: ['Measured on site', 'Impact-rated options', 'Old door hauled away'],
    cta: 'Learn more',
  },
  {
    id: 'emergency',
    icon: 'bolt',
    title: () => 'Emergency Service',
    sub: '24/7 garage door service when you need it most.',
    checks: ['24/7 dispatch', 'Rapid response', 'Opening secured on the spot'],
    cta: 'Learn more',
  },
  {
    id: 'maintenance',
    icon: 'shieldCheck',
    title: () => 'Preventive Maintenance',
    sub: 'Tune-ups that extend the life of your door.',
    checks: ['25-point inspection', 'Lubrication & balancing', 'Safety reverse testing'],
    cta: 'Learn more',
  },
  {
    id: 'openers',
    icon: 'opener',
    title: () => 'Garage Door Openers',
    sub: 'Smart, quiet and reliable opener service.',
    checks: ['All major opener brands', 'Wi-Fi enabled openers', 'Battery backup setup'],
    cta: 'Learn more',
  },
  {
    id: 'springs',
    icon: 'grid',
    title: () => 'Garage Door Springs',
    sub: 'Torsion and extension springs replaced safely.',
    checks: ['High-cycle springs', 'Replaced in balanced pairs', 'Same-day fixes'],
    cta: 'Learn more',
  },
];

export const trustItems = [
  { icon: 'clock', title: '24/7 Emergency', text: 'Nights, weekends & holidays' },
  { icon: 'truck', title: 'We Come to You', text: 'Every repair happens at your door' },
  { icon: 'pin', title: 'All of Miami', text: 'Downtown to Kendall, bay to the Trail' },
  { icon: 'trophy', title: 'Warranty Backed', text: 'Workmanship guaranteed in writing' },
];

export const heroPoints = ['Same-day appointments', 'We come to you', 'Someone answers at 3 AM', 'Workmanship warranty'];

export const heroCardItems = [
  { icon: 'clock', strong: 'Fast response', text: ' — day, night, weekend or holiday, someone picks up.' },
  { icon: 'shieldCheck', strong: 'Written estimate', text: ' handed to you on site before the work starts.' },
  { icon: 'truck', strong: 'Stocked trucks', text: ' so most Miami repairs finish in one visit.' },
  { icon: 'pin', strong: '5 dispatch points', text: ' so a truck is never far from your street.' },
];

export const aboutChecklist = [
  { strong: 'We come to you', text: 'The technician works at your home or property — nothing has to be brought anywhere.' },
  { strong: 'One-visit repairs', text: 'Springs, rollers, cables and openers ride on every truck.' },
  { strong: 'Built for the coast', text: 'Galvanized, corrosion-resistant hardware for Miami humidity and salt air.' },
  { strong: 'Written warranty', text: 'The workmanship on every repair is guaranteed on the invoice.' },
];

export const steps = [
  { n: 1, title: 'Call or Request', text: 'Tell us what the door is doing. We book a same-day or next-morning window that fits your schedule.' },
  { n: 2, title: 'Full Inspection', text: 'The technician tests springs, cables, tracks, rollers and the opener — a 25-point check, not a guess.' },
  { n: 3, title: 'Written Estimate', text: 'You get the plan in writing, with the options explained in plain English. Nothing starts until you say yes.' },
  { n: 4, title: 'Repair & Test', text: 'We complete the work, balance the door, test the safety reverse and clean up before we leave.' },
];

export const whatBreaks = [
  {
    icon: 'grid',
    title: 'The bang, then nothing',
    text: 'A torsion spring lets go with a sound like a gunshot and the door will not budge. Do not try to force it with the opener — call us and leave the car where it is.',
  },
  {
    icon: 'opener',
    title: 'It closes, then reverses',
    text: 'Nine times out of ten a safety sensor is knocked out of line or its lens is fogged by humidity. Quick to fix, and never something to disable.',
  },
  {
    icon: 'shieldCheck',
    title: 'Grinding, rust and salt',
    text: 'Air off Biscayne Bay eats rollers, hinges and cables from the inside out. We swap them for galvanized and nylon parts that survive a Miami summer.',
  },
];

export const areaTags = [
  'Downtown Miami', 'Brickell', 'Edgewater', 'Wynwood', 'Design District', 'Little Havana',
  'Little Haiti', 'Coconut Grove', 'Coral Gables', 'Kendall', 'Pinecrest', 'Miami Beach',
  'Doral', 'Hialeah', 'Miami Gardens', 'Aventura', 'Weston', 'Boca Raton', 'West Palm Beach',
];

export const faq = [
  {
    q: 'How fast can you get to my house?',
    a: 'In most of Miami we offer same-day service, and emergency calls are typically handled within two to four hours. Because we dispatch from five points across South Florida, there is usually a technician close to you at any hour.',
  },
  {
    q: 'Do I need to bring anything to your office?',
    a: 'No. Call Local Garage Door Repair is a mobile service: the addresses listed on this site are dispatch points, not showrooms. The technician drives to your home or property with the parts and tools already on the truck.',
  },
  {
    q: 'Should both springs be replaced at the same time?',
    a: 'We recommend it. A pair of springs wears at the same rate, so when one breaks the other is usually close behind. Replacing both keeps the door balanced, protects the opener and avoids a second service call a few weeks later.',
  },
  {
    q: 'Can I replace a broken torsion spring myself?',
    a: 'We strongly advise against it. A torsion spring stores enough energy to cause serious injury when it releases, and the job requires winding bars and proper tensioning. It is the single most common DIY garage door injury, and a technician can do it safely in under an hour.',
  },
  {
    q: 'Do you install hurricane-rated garage doors in Miami?',
    a: 'Yes. Miami-Dade sits in the high-velocity hurricane zone, so we install wind-load and impact-rated doors carrying a Miami-Dade Notice of Acceptance, and we handle the paperwork the permit requires.',
  },
  {
    q: 'Do you service condo buildings, commercial properties and HOAs?',
    a: 'We do. We handle rolling steel doors, sectional commercial doors, gate operators and high-cycle systems, and we offer scheduled preventive maintenance for property managers, warehouses and condo associations.',
  },
  {
    q: 'Is your work under warranty?',
    a: 'Every repair and installation comes with a written workmanship warranty. The exact term depends on the component, and your technician lists it on the invoice before you sign.',
  },
];

export const offerCatalog = [
  'Garage door repair',
  'Garage door spring replacement',
  'Garage door opener repair and installation',
  'Cables, rollers and track repair',
  'New garage door installation',
  'Overhead and commercial door service',
  '24/7 emergency garage door service',
];

export const mapEmbed = (query) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=m&z=15&output=embed`;
