// lib/data.ts — Static content for AudanWeb

export const caseStudies = [
  {
    id: "01",
    brand: "SECUREINTENT",
    type: "Product Launch · Developer Audience",
    story:
      "How we introduced SecureIntent to the developer internet — turning a cold launch into a conversation that spread across Hacker News, dev Twitter, and three major newsletters in 72 hours.",
    results: [
      { label: "Impressions", value: "2.1M+" },
      { label: "Signups in 72h", value: "4,800+" },
      { label: "HN front page", value: "#3" },
    ],
  },
  {
    id: "02",
    brand: "MOTIONKIT",
    type: "Creator Collaboration · Design & Dev",
    story:
      "MotionKit needed to reach designers who build. We placed the product in the hands of 12 focused creators and coordinated a simultaneous drop that dominated design Twitter for a week.",
    results: [
      { label: "Reach", value: "890K+" },
      { label: "Creator posts", value: "12" },
      { label: "Paid conversions", value: "1,200+" },
    ],
  },
];

export const stats = [
  { value: 12, suffix: "M+", label: "Impressions generated" },
  { value: 40, suffix: "+", label: "Campaigns delivered" },
  { value: 85, suffix: "K+", label: "People reached" },
];

export const testimonial = {
  quote:
    "AudanWeb didn't just run a campaign — they found exactly where our product needed to be seen and made sure it landed there. The results were immediate and real.",
  author: "Founder, SecureIntent",
};

export const services = [
  {
    number: "01",
    title: "Product Launches",
    description:
      "Make noise when your product matters most. We orchestrate launches across the right channels at the right moment — no spray and pray.",
    detail: "Launch strategy · Timing · Channel mix · Story development",
  },
  {
    number: "02",
    title: "Creator Collaborations",
    description:
      "Get your product in front of audiences that actually care. We identify, brief, and coordinate with creators who have real relationships with your exact market.",
    detail: "Creator sourcing · Brief writing · Coordination · Performance",
  },
  {
    number: "03",
    title: "Internet Distribution",
    description:
      "Turn great products into conversations. Organic placement across communities, newsletters, platforms, and spaces where your audience already spends time.",
    detail:
      "Community seeding · Newsletter placements · Platform strategy · Amplification",
  },
];

export const steps = [
  {
    number: "01",
    title: "Tell us what you're building.",
    description:
      "Share your product, your goals, and who you need to reach. We do the rest.",
  },
  {
    number: "02",
    title: "We find the right angle and audience.",
    description:
      "We map out the exact channels, creators, and communities where your product will resonate.",
  },
  {
    number: "03",
    title: "Your product gets distributed.",
    description:
      "Coordinated execution across every surface — timed, intentional, and built to compound.",
  },
  {
    number: "04",
    title: "Attention turns into momentum.",
    description:
      "Real signups, real conversations, real growth. We measure what actually matters.",
  },
];
