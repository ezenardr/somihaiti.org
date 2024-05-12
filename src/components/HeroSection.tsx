"use client";
import ImageSlider from "@/components/ImageSlider";
import { motion } from "framer-motion";
import { Link } from 'next-view-transitions'
import { useMessages } from "next-intl";
import { Messages } from "@/global";

export default function HeroSection({ locale }: { locale: string }) {
  const imagesForCarousel = [
    "https://ik.imagekit.io/6sukwfzbd/2_v6t_b7xNs.webp?updatedAt=1714556850844",
    "https://ik.imagekit.io/6sukwfzbd/1_odBFs37vf.webp?updatedAt=1714556850344",
    "https://ik.imagekit.io/6sukwfzbd/3_NETneBkr3.webp?updatedAt=1714556850275",
  ];
  // @ts-ignore
  const messages: Messages = useMessages();
  const {
    Home: {
      heroSection: { title, description, donate, more },
    },
  } = messages;
  return (
    <ImageSlider className="h-dvh" images={imagesForCarousel}>
      <motion.section
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className=" text-white z-50"
      >
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              {title}
            </h1>
            <motion.p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              {description}
            </motion.p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link className="btn-primary" href={`/${locale}/donate`}>
                {donate}
              </Link>
              <Link className="btn-secondary" href={`/${locale}/#about`}>
                {more}
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </ImageSlider>
  );
}
