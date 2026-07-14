import { truncateDescription } from "@/lib/seo";
import { ProjectSubNavType } from "@/types";
import {
  BotIcon,
  CpuIcon,
  LayoutGridIcon,
  LineChartIcon,
  MailIcon,
} from "lucide-react";

const projects: ProjectSubNavType[] = [
  {
    title: "Harley — District AI Chatbot",
    description: truncateDescription(
      "Public AI chatbot across 30+ HCISD sites, Gemini 3 Flash",
      30,
    ),
    image: "/images/posts/harley-public-launch/cover.jpg",
    href: "/blog/post/harley-public-launch",
    icon: BotIcon,
  },
  {
    title: "HCISD Business Office Dashboard",
    description: truncateDescription(
      "Role-based forms, approvals, and AI invoice matching",
      30,
    ),
    image: "/images/posts/hcisd-dashboard/2-cover.gif",
    href: "/blog/post/hcisd-dashboard-business-office",
    icon: LayoutGridIcon,
  },
  {
    title: "Employee Engagement Dashboard",
    description: truncateDescription(
      "Real-time analytics for 2,000+ employees, Next.js",
      30,
    ),
    href: "/blog/post/hcisd-employee-engagement-dashboard",
    icon: LineChartIcon,
  },
  {
    title: "MAPPO Swarm Robotics",
    description: truncateDescription(
      "Multi-agent reinforcement learning for robot foraging",
      30,
    ),
    href: "/blog/post/mappo-swarm-robotics",
    icon: CpuIcon,
  },
  {
    title: "Trust in AI-Generated Emails",
    description: truncateDescription(
      "Human-AI interaction study on trust and disclosure",
      30,
    ),
    href: "/blog/post/ai-email-trust",
    icon: MailIcon,
  },
  {
    title: "All Projects",
    description: truncateDescription("Overview of all projects", 30),
    href: "/projects",
    icon: LayoutGridIcon,
  },
];

export default projects;
