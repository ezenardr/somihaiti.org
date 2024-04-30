"use client";
import ImageSlider from "@/components/ImageSlider";
import { motion } from "framer-motion";
import Link from "next/link";
import { useMessages } from "next-intl";
import { Messages } from "@/global";

export default function HeroSection({ locale }: { locale: string }) {
  const imagesForCarousel = [
    "https://images.unsplash.com/photo-1535043883-2548fb805573?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1542319272-42dba4f554be?q=80&w=1369&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1548102249-acdce64fffbd?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
              <Link className="btn-secondary" href="#">
                {more}
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </ImageSlider>
  );
}
