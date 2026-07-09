// HIVY — Astro site config (Surat)

export const siteConfig = {
  name: "HIVY",
  fullName: "HIVY — Place for Celebration",
  tagline: "Your Celebration, Our Passion",
  slogan: "Your Celebration, Our Passion",
  description:
    "Premium romantic celebration venue in Surat for couples. Candlelight dinners, birthday surprises, anniversary celebrations, proposals & more at HIVY, Adajan, Surat.",
  phone: "+91 9727027278",
  whatsapp: "919727027278",
  email: "hello@hivy.co.in",
  address:
    "252/253, 2nd Floor, The Boulevard, Near Pratham Circle, Galleria Street, Green City Road, Adajan, Pal Gam, Surat - 394510",
  city: "Surat",
  website: "https://hivy.co.in",
  googleMapsUrl: "https://maps.app.goo.gl/hivy-surat",
  googleReviewUrl: "https://g.page/r/hivy-surat/review",
  rating: "4.9",
  reviewCount: "150",
  happyCouples: "500+",
  socialLinks: {
    instagram: "https://www.instagram.com/hivy_placeforcelebration/",
    facebook: "https://www.facebook.com/p/Hivy-placeforcelebration-61553052747625/",
    youtube: "",
  },
  tracking: {
    gtm: "GTM-PSXMHLQF",
    ga4: "G-V3LHF624G7",
    metaPixel: "1463182795375744",
    // NOTE: Google verification token needs to be different from FFC — get new token from GSC
    googleVerification: "TODO_HIVY_UNIQUE_TOKEN",
  },
  geo: {
    region: "IN-GJ",       // FIX: was missing in original
    placename: "Surat",
    position: "21.1702;72.8311",
    icbm: "21.1702, 72.8311",
  },
  themeColor: "#92400E",
  foundingDate: "2023",
};

export interface Package {
  id: string;
  slug: string;
  name: string;
  emoji: string;
  shortDescription: string;
  price: number;
  thumbnail: string;
}

export const packages: Package[] = [
  {
    id: "p1", slug: "swing-of-love", name: "Swing of Love",
    emoji: "🌸🎋", shortDescription: "Romantic swing setup with fairy lights & floral décor",
    price: 5100, thumbnail: "/images/packages/swing-of-love.webp",
  },
  {
    id: "p2", slug: "elite-group-setup", name: "Elite Group Setup",
    emoji: "✨👑", shortDescription: "Premium group celebration with luxury décor",
    price: 5400, thumbnail: "/images/packages/elite-group-setup.webp",
  },
  {
    id: "p3", slug: "boho-chic", name: "BoHo Chic",
    emoji: "🌿🪶", shortDescription: "Boho-themed romantic setup with earthy tones",
    price: 5700, thumbnail: "/images/packages/boho-chic.webp",
  },
  {
    id: "p4", slug: "fairy-tale-proposals", name: "Fairy Tale Proposals",
    emoji: "💍🏰", shortDescription: "Magical fairy-tale proposal setup with arch & flowers",
    price: 6300, thumbnail: "/images/packages/fairy-tale-proposals.webp",
  },
  {
    id: "p5", slug: "tent-of-romance", name: "Tent of Romance",
    emoji: "⛺💕", shortDescription: "Intimate tent setup with candles, lights & cosy décor",
    price: 6500, thumbnail: "/images/packages/tent-of-romance.webp",
  },
];

export interface ServiceCategory {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  href: string;
}

export const serviceCategories: ServiceCategory[] = [
  { slug: "candlelight-dinner", name: "Candlelight Dinner", emoji: "🕯️", description: "Romantic candle-lit private dinners in Surat", href: "/candlelight-dinner-surat" },
  { slug: "birthday-surprise", name: "Birthday Surprise", emoji: "🎂", description: "Special birthday setups for your loved one", href: "/birthday-surprise-surat" },
  { slug: "anniversary", name: "Anniversary Celebration", emoji: "💑", description: "Memorable anniversary celebration setups", href: "/anniversary-surat" },
  { slug: "proposal", name: "Proposal Setup", emoji: "💍", description: "Perfect 'yes' moment with premium proposal setups", href: "/proposal-setup-surat" },
  { slug: "surprise-date", name: "Surprise Date", emoji: "💝", description: "Surprise your partner with a magical date", href: "/surprise-date-surat" },
  { slug: "pre-wedding", name: "Pre-Wedding Shoot", emoji: "📸", description: "Stunning pre-wedding photo sessions", href: "/pre-wedding-shoot-surat" },
  { slug: "baby-moments", name: "Baby Moments", emoji: "👶", description: "Baby shower & pregnancy announcements", href: "/baby-moments-surat" },
  { slug: "valentines-week", name: "Valentine's Week", emoji: "❤️", description: "Celebrate love through all 7 days of Valentine's", href: "/valentines-week-surat" },
];

export interface AreaConfig { slug: string; name: string; }

export const suratAreas: AreaConfig[] = [
  { slug: "adajan-surat", name: "Adajan" },
  { slug: "vesu-surat", name: "Vesu" },
  { slug: "pal-surat", name: "Pal" },
  { slug: "althan-surat", name: "Althan" },
  { slug: "katargam-surat", name: "Katargam" },
  { slug: "varachha-surat", name: "Varachha" },
  { slug: "udhna-surat", name: "Udhna" },
  { slug: "athwa-surat", name: "Athwa" },
  { slug: "rander-surat", name: "Rander" },
  { slug: "dindoli-surat", name: "Dindoli" },
  { slug: "piplod-surat", name: "Piplod" },
  { slug: "palanpur-surat", name: "Palanpur" },
  { slug: "bhatar-surat", name: "Bhatar" },
  { slug: "citylight-surat", name: "Citylight" },
  { slug: "sarthana-surat", name: "Sarthana" },
];

export const keywordPages = [
  { slug: "candlelight-dinner-surat", title: "Candlelight Dinner in Surat", h1: "Best Candlelight Dinner in Surat" },
  { slug: "birthday-surprise-surat", title: "Birthday Surprise in Surat", h1: "Best Birthday Surprise in Surat" },
  { slug: "anniversary-surat", title: "Anniversary Celebration in Surat", h1: "Best Anniversary Celebration in Surat" },
  { slug: "proposal-setup-surat", title: "Proposal Setup in Surat", h1: "Best Proposal Setup in Surat" },
  { slug: "romantic-cafe-surat", title: "Romantic Cafe in Surat", h1: "Best Romantic Cafe in Surat" },
  { slug: "couple-cafe-surat", title: "Couple Cafe in Surat", h1: "Best Couple Cafe in Surat" },
  { slug: "surprise-date-surat", title: "Surprise Date in Surat", h1: "Best Surprise Date in Surat" },
  { slug: "rooftop-dinner-surat", title: "Dinner Date in Surat", h1: "Best Dinner Date in Surat" },
  { slug: "pre-wedding-shoot-surat", title: "Pre-Wedding Shoot Surat", h1: "Best Pre-Wedding Photoshoot in Surat" },
  { slug: "birthday-party-surat", title: "Birthday Party in Surat", h1: "Best Birthday Party Venue in Surat" },
];

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Our Packages", href: "/packages" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Virtual Tour", href: "/virtual-tour" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

export const serviceLinks = [
  { name: "Birthday Surprise", href: "/birthday-surprise" },
  { name: "Anniversary", href: "/anniversary-celebration" },
  { name: "Proposal", href: "/proposal" },
  { name: "Candlelight Dinner", href: "/candlelight-dinner" },
  { name: "Surprise Date", href: "/surprise-date" },
  { name: "Pre-Wedding Shoot", href: "/pre-wedding-shoot" },
  { name: "Baby Moments", href: "/baby-moments" },
  { name: "Valentine's Week", href: "/valentines-week" },
];

export const footerKeywords = [
  { slug: "candlelight-dinner-surat", title: "Candlelight Dinner" },
  { slug: "birthday-surprise-surat", title: "Birthday Surprise" },
  { slug: "anniversary-surat", title: "Anniversary Celebration" },
  { slug: "proposal-setup-surat", title: "Proposal Setup" },
  { slug: "romantic-cafe-surat", title: "Romantic Cafe" },
  { slug: "couple-cafe-surat", title: "Couple Cafe" },
  { slug: "surprise-date-surat", title: "Surprise Date" },
  { slug: "birthday-party-surat", title: "Birthday Party" },
  { slug: "pre-wedding-shoot-surat", title: "Pre-Wedding Shoot" },
  { slug: "private-dining-surat", title: "Private Dining" },
  { slug: "date-night-surat", title: "Date Night" },
  { slug: "valentines-day-surat", title: "Valentine's Day" },
];

export const footerAreas = [
  { slug: "adajan-surat", name: "Adajan" },
  { slug: "vesu-surat", name: "Vesu" },
  { slug: "pal-surat", name: "Pal" },
  { slug: "althan-surat", name: "Althan" },
  { slug: "citylight-surat", name: "Citylight" },
  { slug: "athwa-surat", name: "Athwa" },
  { slug: "bhatar-surat", name: "Bhatar" },
  { slug: "katargam-surat", name: "Katargam" },
];
