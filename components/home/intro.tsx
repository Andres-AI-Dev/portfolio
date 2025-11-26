"use client";

import Card from "@/components/ui/card";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "../ui/animations/fade-up";
import { MotionEffect } from "../ui/animations/motion-effect";
import "react-photo-view/dist/react-photo-view.css";

const PhotoProvider = dynamic(
  () => import("react-photo-view").then((mod) => mod.PhotoProvider),
  { ssr: false },
);
const PhotoView = dynamic(
  () => import("react-photo-view").then((mod) => mod.PhotoView),
  { ssr: false },
);

interface Props {
  className?: string;
}

const Intro = ({ className }: Props) => {
  return (
    <FadeUp delay={0.6} duration={0.3}>
      <Card className={cn(className)}>
        <MotionEffect
          fade
          blur="10px"
          delay={0.5}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          inView
        >
          <div className="relative mx-auto mt-8 flex w-full justify-center">
            <PhotoProvider>
              <div className="relative flex gap-4">
                <MotionEffect
                  slide={{
                    direction: "down",
                  }}
                  fade
                  zoom
                  inView
                  delay={0.5}
                >
                  <PhotoView src="/images/about/about_me_01.jpg">
                    <Image
                      src="/images/about/about_me_01.jpg"
                      alt="MARS Lab team photo"
                      className="z-2 h-[400px] w-auto translate-x-8 -rotate-3 cursor-pointer rounded-lg object-cover shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md sm:h-[360px]"
                      width={480}
                      height={360}
                      priority={true}
                    />
                  </PhotoView>
                </MotionEffect>
                <MotionEffect
                  slide={{
                    direction: "down",
                  }}
                  fade
                  zoom
                  inView
                  delay={0.7}
                >
                  <PhotoView src="/images/about/about_me_02.jpg">
                    <Image
                      src="/images/about/about_me_02.jpg"
                      alt="Google Chicago conference"
                      className="z-1 h-[400px] w-auto rotate-2 cursor-pointer rounded-lg object-cover shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md sm:h-[360px]"
                      width={266}
                      height={400}
                      priority={true}
                    />
                  </PhotoView>
                </MotionEffect>
                <MotionEffect
                  slide={{
                    direction: "down",
                  }}
                  fade
                  zoom
                  inView
                  delay={0.9}
                >
                  <PhotoView src="/images/about/about_me_03.jpg">
                    <Image
                      src="/images/about/about_me_03.jpg"
                      alt="Google for Education event in Chicago"
                      className="z-0 h-[400px] w-auto -translate-x-8 rotate-2 cursor-pointer rounded-lg object-cover shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md sm:h-[360px]"
                      width={480}
                      height={360}
                      priority={true}
                    />
                  </PhotoView>
                </MotionEffect>
              </div>
            </PhotoProvider>
          </div>

          <div className="mx-auto mt-6 max-w-2xl px-6 text-center md:px-2 lg:px-2">
            <h2 className="text-accent-foreground mb-4 text-2xl font-bold sm:text-3xl">
              Oh Hello There!
            </h2>
            <div className="text-foreground space-y-6 text-lg leading-8">
              <p className="text-foreground text-md text-center sm:text-left sm:text-lg">
                I&apos;m{" "}
                <span className="text-accent-foreground font-medium">
                  Andres Gonzales
                </span>
                , an{" "}
                <span className="text-accent-foreground font-medium">
                  AI Systems Architect/Engineer
                </span>{" "}
                at{" "}
                <span className="text-accent-foreground font-medium">
                  HCISD
                </span>{" "}
                and{" "}
                <span className="text-accent-foreground font-medium">
                  Graduate Research Assistant
                </span>{" "}
                at UTRGV&apos;s{" "}
                <span className="text-accent-foreground font-medium">
                  MARS Lab
                </span>
                . I live in{" "}
                <span className="text-accent-foreground font-medium">
                  Harlingen, Texas
                </span>
                , in the Rio Grande Valley.
              </p>
              <p className="text-foreground text-md text-center sm:text-left sm:text-lg">
                I&apos;m pursuing my{" "}
                <span className="text-accent-foreground font-medium">
                  Master&apos;s in Computer Science
                </span>{" "}
                at UTRGV, focusing on{" "}
                <span className="text-accent-foreground font-medium">
                  reinforcement learning
                </span>{" "}
                and{" "}
                <span className="text-accent-foreground font-medium">
                  swarm robotics
                </span>
                . I have a Bachelor&apos;s in Biology from UTRGV and was formerly an{" "}
                <span className="text-accent-foreground font-medium">
                  AP Chemistry Teacher
                </span>
                .
              </p>
              <p className="text-foreground text-md text-center sm:text-left sm:text-lg">
                As an{" "}
                <span className="text-accent-foreground font-medium">
                  educator at heart
                </span>{" "}
                with a deep passion for{" "}
                <span className="text-accent-foreground font-medium">
                  technology
                </span>
                , I&apos;m dedicated to creating innovative solutions for educators around the world.
              </p>
              <p className="text-foreground text-md text-center sm:text-left sm:text-lg">
                I actively participate in{" "}
                <span className="text-accent-foreground font-medium">
                  educational workshops and conferences
                </span>{" "}
                to collaborate with leaders in the field. For example, in October 2025, I attended the{" "}
                <span className="text-accent-foreground font-medium">
                  Google for Education Leader Series
                </span>{" "}
                in Chicago, connecting with educational leaders nationwide on AI implementation in K-12 education.
              </p>
              <p className="text-foreground text-md mb-10 text-center sm:text-left sm:text-lg">
                Please find below my selected{" "}
                <Link
                  href="/projects"
                  className="text-accent-foreground hover:text-accent-foreground/80 font-medium underline underline-offset-4"
                >
                  projects
                </Link>
                . Feel free to{" "}
                <Link
                  href="/contact"
                  className="text-accent-foreground hover:text-accent-foreground/80 font-medium underline underline-offset-4"
                >
                  reach out
                </Link>{" "}
                for AI consulting or collaboration opportunities.
              </p>
            </div>
          </div>
        </MotionEffect>
      </Card>
    </FadeUp>
  );
};

export default Intro;
