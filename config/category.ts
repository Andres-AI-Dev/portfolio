import { CategoryType } from "@/types";
import { truncateDescription } from "@/lib/seo";
import {
  RssIcon as BlogBigIcon,
  RssIcon as BlogIcon,
} from "lucide-react";

const categories: CategoryType[] = [
  {
    name: "All Articles",
    slug: "/blog",
    icon: BlogIcon,
    bigIcon: BlogBigIcon,
    description: truncateDescription("Read all articles", 30),
    weight: 1,
  },
];

export default categories;
