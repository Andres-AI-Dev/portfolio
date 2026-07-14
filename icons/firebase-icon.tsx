import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface Props {
  className?: string;
}

const FirebaseIcon: FC<Props> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={cn("fill-current", className)}
    >
      <title>firebase</title>
      <path
        d="M3.89 15.672 6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FirebaseIcon;
