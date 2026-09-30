export const portfolioData = {
  profile: {
    name: "Arham Khan",
    handle: "arhamzkhan",
    role: "ics student, lahore",
    bio: "i build security tools and real-world software people actually use.",
    location: "lahore, pakistan",
    skillsSummary: "react, vite, tailwind css, vercel serverless, postgresql (supabase), cybersecurity auditing, ai workflows"
  },
  projects: [
    {
      id: "securescan",
      name: "securescan",
      tagline: "website privacy & security auditor",
      description: "instant audit of security headers (csp, hsts, x-frame-options), cookie security, and third-party trackers.",
      stack: ["react", "vercel serverless", "supabase"],
      links: {
        demo: "https://trysecurescan.vercel.app",
        github: "https://github.com/arhamzkhan/securescan"
      },
      isPublic: true
    },
    {
      id: "secretguard",
      name: "secretguard",
      tagline: "git secret leak detector",
      description: "scans public github repositories for accidentally committed secrets (api tokens, aws keys) via github's tarball api.",
      stack: ["react", "github tarball api", "supabase"],
      links: {
        demo: "https://trysecretguard.vercel.app",
        github: "https://github.com/arhamzkhan/secretguard"
      },
      isPublic: true
    },
    {
      id: "ourstory",
      name: "ourstory",
      tagline: "private shared relationship saas",
      description: "private full-stack saas application for tracking shared milestones, memories, and relationship insights with discreet routing.",
      note: "private saas project to showcase full-stack architecture without public source code.",
      stack: ["react", "full-stack saas", "discreet gateway"],
      links: {
        demo: "https://tryourstory.vercel.app",
        github: "https://github.com/arhamzkhan/ourstory"
      },
      isPublic: false
    },
    {
      id: "sanctuary",
      name: "sanctuary",
      tagline: "private messaging space",
      description: "a private space for two people to talk, securely.",
      note: "private / in development.",
      stack: ["react", "full-stack"],
      // TODO: add screenshots + link later
      links: {},
      isPublic: false
    }
  ],
  socials: [
    {
      platform: "github",
      username: "github.com/arhamzkhan",
      url: "https://github.com/arhamzkhan"
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
  ]
};
