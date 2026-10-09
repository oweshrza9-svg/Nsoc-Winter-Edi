export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface TrackItem {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface RewardItem {
  title: string;
  category: string;
  description: string;
  badge: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  status: "completed" | "current" | "upcoming";
  description: string;
}

export interface SponsorItem {
  name: string;
  category: string;
  description: string;
  link: string;
  tier: "Powered By" | "Ecosystem Partner" | "Security Partner";
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const SITE_DATA = {
  name: "Nexus Spring of Code",
  shortName: "NSoC",
  edition: "Winter Edition 2026",
  headline: "Where Real Code Lands in Production",
  officialUrl: "https://www.nsoc.in",
  officialEmail: "connect.nsoc@gmail.com",
  dates: {
    startDate: "2026-10-15T00:00:00+05:30",
    startDisplay: "15 October 2026",
    endDate: "2026-12-30T23:59:59+05:30",
    endDisplay: "30 December 2026",
    durationDays: 45,
  },
  socials: {
    discord: "https://discord.gg/bZ47fac2jn",
    linkedin: "https://www.linkedin.com/company/nso-code",
    instagram: "https://www.instagram.com/nsoc.in",
    youtube: "https://www.youtube.com/@nsoc-in",
    whatsapp: "https://chat.whatsapp.com/Cs6bcCYUD5zLXmElzX9HOq",
    github: "https://github.com/deepanshu-prajapati01",
  },
  mission:
    "Nexus Spring of Code (NSoC) is an open source contribution program designed to help developers explore open source, collaborate on real projects, and grow their development skills. Discover beginner-friendly issues, contribute to projects, and become part of the open source community.",
  subMission:
    "A 45-day open source program where project admins bring real-world codebases and contributors close issues, ship features, and grow. No toy projects. No filler tasks. Just meaningful work that lands in production — and a community that levels up together.",
};

export const STATS: StatItem[] = [
  {
    value: 3500,
    suffix: "+",
    label: "Contributors",
    description: "Developers brought together in the previous cohort across multiple countries.",
  },
  {
    value: 45,
    suffix: " Days",
    label: "Active Coding",
    description: "Dedicated sprint period of structured mentorship and real contribution sprints.",
  },
  {
    value: 100,
    suffix: "%",
    label: "Production Codebases",
    description: "Actual industry and student-built software — zero dummy repos or toy problems.",
  },
  {
    value: 10,
    suffix: "+",
    label: "Global Partners",
    description: "Ecosystem sponsors and community organizations backing student open source.",
  },
];

export const PROGRAM_PILLARS = [
  {
    title: "Real Projects",
    description:
      "Project admins bring their actual codebases — not dummy repos or toy problems. Every issue you close ships to real users in production.",
    highlight: "Production Grade",
  },
  {
    title: "Structured Guidance",
    description:
      "Admins mentor contributors through the review process. You don't just get a comment — you get context, architectural feedback, and actionable guidance.",
    highlight: "1-on-1 Mentorship",
  },
  {
    title: "Earned Recognition",
    description:
      "Points for every merged PR, a transparent public leaderboard, and an immutable profile that showcases exactly what you built and where it shipped.",
    highlight: "Verifiable Profile",
  },
  {
    title: "A Real Community",
    description:
      "45 days of builders, maintainers, and contributors working in the same direction. The connections, networks, and mutual respect outlast the program.",
    highlight: "Global Network",
  },
];

export const TRACKS: TrackItem[] = [
  {
    id: "contributors",
    title: "You Write Code",
    tagline: "For student developers & open source newcomers eager to learn by doing.",
    badge: "Contributors",
    features: [
      "Pick a track matching your stack: Frontend, Backend, AI/ML, DevOps, Systems",
      "Browse curated open issues labeled by difficulty from live repositories",
      "Submit PRs, receive thorough maintainer reviews, and earn points upon merge",
      "Climb the public leaderboard and claim exclusive prizes and job referrals",
    ],
    ctaText: "Join as Contributor",
    ctaHref: "#contact",
  },
  {
    id: "maintainers",
    title: "You Bring the Project",
    tagline: "For maintainers & companies looking to scale their open source community.",
    badge: "Project Admins",
    features: [
      "Submit your open source project to be hosted in the official Winter Edition",
      "Curate roadmap issues fit for contributors ranging from beginner to advanced",
      "Review PRs, mentor energetic contributors, and scale your repo's velocity",
      "Gain meaningful contributions and give talented builders their first production merge",
    ],
    ctaText: "Submit Your Project",
    ctaHref: "#contact",
  },
];

export const STEPS: StepItem[] = [
  {
    number: "01",
    title: "Register & Profile",
    description: "Create your profile, link your GitHub handle, and select the technology tracks aligned with your ambitions.",
  },
  {
    number: "02",
    title: "Explore Curated Repos",
    description: "Browse verified open source repositories with beginner-friendly and challenging issues waiting for solutions.",
  },
  {
    number: "03",
    title: "Contribute & Iterate",
    description: "Fork repositories, submit pull requests, receive architectural feedback from maintainers, and merge code.",
  },
  {
    number: "04",
    title: "Win & Level Up",
    description: "Earn points per merged PR, rise up the public leaderboard, and claim swags, certificates, and partner referrals.",
  },
];

export const REWARDS: RewardItem[] = [
  {
    title: "Exclusive NSoC Swags",
    category: "Merchandise",
    description: "Limited-edition Winter Edition hoodies, stickers, desk mats, and apparel delivered to top performers.",
    badge: "Top Performers",
  },
  {
    title: "Official Certificate of Achievement",
    category: "Credential",
    description: "Verifiable digital certificate celebrating your open source contributions and milestones achieved.",
    badge: "All Qualified",
  },
  {
    title: "Letter of Recommendation (LOR)",
    category: "Career",
    description: "Direct Letter of Recommendation from NSoC leadership highlighting your technical grit and code quality.",
    badge: "Standout Builders",
  },
  {
    title: "Leaderboard & Media Spotlight",
    category: "Recognition",
    description: "Featured showcase on NSoC's official website, partner channels, and developer community spotlights.",
    badge: "Public Visibility",
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    date: "Before 10 October 2026",
    title: "Developer Task Submissions",
    status: "completed",
    description: "Candidate selection task submissions for the official Winter Edition engineering team.",
  },
  {
    date: "15 October 2026",
    title: "Winter Edition Kickoff",
    status: "current",
    description: "Official launch of the 45-day winter contribution program across all participating repositories.",
  },
  {
    date: "15 November 2026",
    title: "Mid-Term Evaluation",
    status: "upcoming",
    description: "Milestone check-in, leaderboard snapshot, and mentor feedback for active contributors.",
  },
  {
    date: "30 December 2026",
    title: "Coding Period Closes",
    status: "upcoming",
    description: "Final PR merge deadline. Code evaluation, scoring compilation, and leaderboard freeze.",
  },
  {
    date: "January 2027",
    title: "Results & Swag Distribution",
    status: "upcoming",
    description: "Announcement of top builders, digital certificate distribution, and dispatch of winter swag kits.",
  },
];

export const SPONSORS: SponsorItem[] = [
  {
    name: "Unstop",
    category: "Hackathons & Opportunities",
    description:
      "A leading platform for hosting and managing online competitions, hackathons, and events. Fostering innovation and collaboration across various domains.",
    link: "https://unstop.com",
    tier: "Powered By",
  },
  {
    name: "Arkham Experience",
    category: "Spatial Tech & Agentic AI",
    description:
      "An immersive media-tech company working at the intersection of Gen AI and Agentic AI, Unreal Engine, Holographics, Spatial and 3D, AR/XR, BCI, HCI, Web 3.0 and distributed networks.",
    link: "https://www.arkhamexperience.com",
    tier: "Ecosystem Partner",
  },
  {
    name: "Extension Shield",
    category: "Cybersecurity & Browser Protection",
    description:
      "Security-first browser extension management. Protecting users and organizations from malicious extensions and supply chain attacks.",
    link: "https://extensionshield.com",
    tier: "Security Partner",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "What is Nexus Spring of Code (NSoC) Winter Edition 2026?",
    answer:
      "NSoC Winter Edition is a 45-day open source contribution sprint running from October 15 to December 30, 2026. Students and developers collaborate on real production codebases under the mentorship of project maintainers.",
  },
  {
    question: "Is there any registration fee to participate?",
    answer:
      "No. NSoC is 100% free and open to all enthusiastic developers worldwide. Our mission is to lower barriers to open source entry and empower developers with real-world skills.",
  },
  {
    question: "I am a beginner. Can I participate?",
    answer:
      "Absolutely! NSoC is crafted specifically for student developers and newcomers. Participating projects maintain a wide variety of 'good first issue' labels along with guided PR review cycles.",
  },
  {
    question: "How does the evaluation and scoring work?",
    answer:
      "Points are awarded based on the difficulty and impact of merged pull requests (beginner, intermediate, advanced) evaluated directly by repository maintainers.",
  },
  {
    question: "Can I bring my own project as an Admin/Maintainer?",
    answer:
      "Yes! Open source maintainers can submit their repositories to be hosted in NSoC. You will receive contributions from enthusiastic developers while helping them land their first PRs.",
  },
  {
    question: "How do I get in touch with the organizing team?",
    answer:
      "You can reach out directly via our official email at connect.nsoc@gmail.com, join our active Discord community, or use the contact form on this page.",
  },
];
