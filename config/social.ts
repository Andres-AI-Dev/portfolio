import { FaStrava as StravaIcon } from "react-icons/fa";
import {
  FaEnvelope as EmailIcon,
  FaFacebook as FacebookIcon,
  FaGithub as GitHubIcon,
  FaLinkedin as LinkedInIcon,
  FaXTwitter as XPlatformIcon,
} from "react-icons/fa6";
import { SocialType } from "../types";

const socialConfig: SocialType[] = [
  {
    href: "/contact",
    icon: EmailIcon,
    label: "Email",
  },
  {
    href: "https://github.com/andres-ai-dev",
    icon: GitHubIcon,
    label: "GitHub",
  },
  // Uncomment and update these when you create your profiles:
  // {
  //   href: "https://linkedin.com/in/your-profile",
  //   icon: LinkedInIcon,
  //   label: "LinkedIn",
  // },
  // {
  //   href: "https://x.com/your-handle",
  //   icon: XPlatformIcon,
  //   label: "X (Twitter)",
  // },
];

export default socialConfig;
