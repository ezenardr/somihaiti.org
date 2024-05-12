"use client";
import Image from "next/image";
import Somi from "@/assets/img/somi.jpg";
import { useMessages } from "next-intl";
import { Messages } from "@/global";
import { motion } from "framer-motion";
import { variants } from "@/utils/variant";

export default function AboutSection() {
  // @ts-ignore
  const messages: Messages = useMessages();
  const {
    aboutSection: { title, content1, content2, subtitle },
  } = messages.Home;
  return (
    <section id={"about"}>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <motion.p
            {...variants("left", 0.2)}
            className={"text-sm md:text-md font-normal text-color-primary pb-2"}
          >
            {subtitle}
          </motion.p>
          <motion.h2
            {...variants("left", 0)}
            className="text-3xl font-bold sm:text-4xl"
          >
            {title}
          </motion.h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <motion.div
            {...variants("left", 0.1)}
            className="relative h-64 overflow-hidden sm:h-80 lg:h-full"
          >
            <Image
              alt=""
              src={Somi}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </motion.div>

          <motion.div {...variants("left", 0.2)} className="lg:py-16">
            <article className="space-y-4 text-gray-600">
              <p>{content1}</p>

              <p>{content2}</p>
            </article>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
