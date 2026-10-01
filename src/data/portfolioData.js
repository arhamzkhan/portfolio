export const portfolioData = {
  profile: {
    name: "Arham Khan",
    handle: "dev-arhamkhan",
    role: "ics student, lahore",
    bio: "i build security tools and real-world software people actually use.",
    location: "lahore, pakistan",
    skillsSummary: "react, vite, tailwind css, vercel serverless, postgresql (supabase), cybersecurity auditing, ai workflows"
  },
  projects: {
    main: [
      {
        id: "securescan",
        name: "securescan",
        tagline: "website privacy & security auditor",
        description: "see what a website exposes about its visitors, privacy, and security.",
        stack: ["react", "vercel serverless", "supabase"],
        links: {
          demo: "https://trysecurescan.vercel.app",
          github: "https://github.com/dev-arhamkhan/securescan"
        },
        isPublic: true
      },
      {
        id: "secretguard",
        name: "secretguard",
        tagline: "git secret leak detector",
        description: "find exposed passwords, API keys, and other secrets hidden inside a codebase.",
        stack: ["react", "github tarball api", "supabase"],
        links: {
          demo: "https://trysecretguard.vercel.app",
          github: "https://github.com/dev-arhamkhan/secretguard"
        },
        isPublic: true
      },
      {
        id: "ourstory",
        name: "ourstory",
        tagline: "shared relationship timeline",
        description: "shared timeline for memories, milestones, and moments",
        stack: ["react", "full-stack web app"],
        links: {
          demo: "https://tryourstory.vercel.app",
          github: "https://github.com/dev-arhamkhan/ourstory"
        },
        isPublic: true
      },
      {
        id: "sanctuary",
        name: "sanctuary",
        tagline: "private messaging space",
        description: "a private space for two people to talk, securely.",
        note: "private / in development.",
        stack: ["react", "full-stack"],
        links: {},
        isPublic: false
      }
    ],
    comingSoon: [
      {
        id: "proposalos",
        name: "proposalos",
        tagline: "proposal & workspace engine",
        description: "Interactive proposal-to-approval workspace for agencies and freelancers.",
        status: "COMING SOON",
        stack: ["prototype / in development"],
        links: {},
        isPublic: false
      },
      {
        id: "unsaid",
        name: "unsaid",
        tagline: "communication analysis experiment",
        description: "an experimental tool for separating what was said from what was assumed.",
        status: "COMING SOON",
        stack: ["experimental / in development"],
        links: {},
        isPublic: false
      }
    ],
    archive: [
      {
        id: "slotly",
        name: "slotly",
        tagline: "salon booking platform",
        description: "salon appointment booking platform",
        status: "archived · no longer active",
        stack: ["archived"],
        links: {},
        isPublic: false
      }
    ]
  },
  socials: [
    {
      platform: "github",
      username: "github.com/dev-arhamkhan",
      url: "https://github.com/dev-arhamkhan"
    },
    {
      platform: "instagram",
      username: "instagram.com/aka._arham",
      url: "https://instagram.com/aka._arham"
    },
    {
      platform: "email",
      username: "dev.arhamkhan@gmail.com",
      url: "mailto:dev.arhamkhan@gmail.com"
    }
  ],
  privacyAndTerms: {
    status: "prepared",
    analyticsPolicy: "privacy-conscious aggregate analytics ready (no tracking scripts / no fingerprinting)"
  }
};
