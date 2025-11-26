import { Button } from "@/components/ui/button";
import { TextIcon as LearnMoreIcon } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  learnMoreUrl: string;
  className?: string;
}

const LinkButtons: FC<Props> = ({ learnMoreUrl }) => {
  return (
    <div className="mx-auto mt-4 flex w-fit max-w-xs gap-2">
      <Link href={learnMoreUrl} target="_blank" rel="noopener noreferrer">
        <Button className="hover:ring-border px-5 py-2 hover:border-black/20 hover:ring-2 dark:hover:border-white/20">
          <LearnMoreIcon className="size-4" aria-hidden="true" />
          Learn more
        </Button>
      </Link>
    </div>
  );
};

export default LinkButtons;
