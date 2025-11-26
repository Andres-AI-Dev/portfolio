import { truncateDescription, truncateTitle } from "@/lib/seo";
import type { HeadType } from "@/types";

const HEAD: HeadType[] = [
  {
    page: "Home",
    title: truncateTitle("Andres Gonzales | AI Systems Architect & Researcher"),
    description: truncateDescription(
      "AI Systems Architect/Engineer building intelligent systems for education at HCISD. Graduate Research Assistant at UTRGV's MARS Lab, focusing on reinforcement learning for swarm robotics.",
    ),
    slug: "/",
  },
  {
    page: "About",
    title: truncateTitle("About | Andres Gonzales"),
    description: truncateDescription(
      "Educator and innovator at heart building the technical infrastructure that powers education.",
    ),
    slug: "/about",
  },
  {
    page: "Story",
    title: truncateTitle("Story | Andres Gonzales"),
    description: truncateDescription(
      "Learn about Andres's journey from teaching chemistry to building AI systems for education and robotics research.",
    ),
    slug: "/story",
  },
  {
    page: "Blog",
    title: truncateTitle("Blog | AI, ML, and EdTech | Andres Gonzales"),
    description: truncateDescription("Thoughts and insights on AI, machine learning, and educational technology"),
    slug: "/blog",
  },
  {
    page: "Projects",
    title: truncateTitle("Projects | Andres Gonzales"),
    description: truncateDescription("Showcasing AI applications, research projects, and educational technology solutions"),
    slug: "/projects",
  },
  {
    page: "Research",
    title: truncateTitle("Research | Andres Gonzales"),
    description: truncateDescription(
      "Research in reinforcement learning, swarm robotics, and AI for education at UTRGV's MARS Lab",
    ),
    slug: "/research",
  },
  {
    page: "Contact",
    title: truncateTitle("Contact | Get in Touch"),
    description: truncateDescription(
      "Connect with Andres for AI consulting, collaboration, or questions about educational technology.",
    ),
    slug: "/contact",
  },
];

export default HEAD;
