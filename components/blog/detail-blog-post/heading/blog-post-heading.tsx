import { MotionEffect } from "@/components/ui/animations/motion-effect";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import { FC } from "react";
import BackButton from "./back-button";
import InfoBarDetailDesktop from "./info-bar/info-bar-desktop";
import InfoBarDetailMobile from "./info-bar/info-bar-mobile";
import ImageCarousel from "./image-carousel";

interface Props {
  title: string;
  description: string;
  date: string;
  authorImage: string;
  authorName: string;
  category: string;
  readTime: number;
  imageUrl: string | string[];
}

const BlogPostDetailHeading: FC<Props> = ({
  title,
  description,
  date,
  authorImage,
  authorName,
  category,
  readTime,
  imageUrl,
}) => {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-10 sm:px-4 md:px-0">
      <MotionEffect
        fade
        blur="10px"
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        inView
      >
        <div className="mx-auto flex w-full max-w-3xl items-center space-x-4">
          <BackButton />
        </div>

        <h1 className="font-display text-accent-foreground dark:text-white mx-auto mt-4 mb-4 w-full max-w-3xl text-left text-4xl font-medium text-ellipsis sm:mb-0 sm:text-4xl sm:leading-[1.25]">
          {title}
        </h1>

        <Separator
          orientation="horizontal"
          className="bg-border mx-auto my-2 hidden h-[1px] w-full max-w-3xl sm:block"
        />

        <InfoBarDetailDesktop
          authorImage={authorImage}
          authorName={authorName}
          date={date}
          category={category}
          readTime={readTime}
          className="hidden sm:flex"
        />

        <InfoBarDetailMobile
          authorImage={authorImage}
          authorName={authorName}
          date={date}
          category={category}
          readTime={readTime}
          className="sm:hidden"
        />

        <p className="text-md text-foreground dark:text-white mx-auto line-clamp-3 w-full max-w-3xl py-6 sm:text-lg md:py-4">
          {description}
        </p>

        {Array.isArray(imageUrl) ? (
          <ImageCarousel images={imageUrl} title={title} />
        ) : (
          <Image
            alt={title}
            draggable={false}
            width={768}
            height={432}
            decoding="async"
            data-nimg="1"
            className="blur-0 mx-auto aspect-[768/432] overflow-hidden rounded-xl object-cover"
            src={imageUrl}
          />
        )}
      </MotionEffect>
    </div>
  );
};

export default BlogPostDetailHeading;
