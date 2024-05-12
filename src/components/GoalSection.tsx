"use client";
import { Book1, Health, People } from "iconsax-react";
import { Link } from 'next-view-transitions'
import { useMessages } from "next-intl";
import { Messages } from "@/global";
import { motion } from "framer-motion";
import { variants } from "@/utils/variant";

export default function GoalSection({ locale }: { locale: string }) {
  // @ts-ignore
  const messages: Messages = useMessages();
  const {
    goalSection: {
      subtitle,
      title,
      description,
      link,
      content1,
      content2,
      content3,
    },
  } = messages.Home;
  return (
    <section id={"goalSection"} className="bg-[#eaf4f9] text-gray-950">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <motion.h3
            {...variants("up", 0)}
            className={"text-sm md:text-md font-normal text-color-primary pb-2"}
          >
            {subtitle}
          </motion.h3>
          <motion.h2
            {...variants("up", 0.1)}
            className="text-3xl font-bold sm:text-4xl"
          >
            {title}
          </motion.h2>

          <motion.p {...variants("up", 0.2)} className="mt-4 text-gray-800">
            {description}
          </motion.p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            {...variants("left", 0.3)}
            className="block rounded-xl border  p-8 shadow-xl transition border-color-secondary "
          >
            <Health size="32" color="#e53d4b" variant="TwoTone" />

            <h2 className="mt-4 text-xl font-bold text-gray-900">
              {content1.title}
            </h2>

            <p className="mt-1 text-sm text-gray-700">{content1.description}</p>
          </motion.div>
          <motion.div
            {...variants("left", 0.4)}
            className="block rounded-xl border p-8 shadow-xl transition border-color-secondary"
          >
            <Book1 size="32" color="#e53d4b" variant="TwoTone" />

            <h2 className="mt-4 text-xl font-bold text-gray-900">
              {content2.title}
            </h2>

            <p className="mt-1 text-sm text-gray-700">{content2.description}</p>
          </motion.div>
          <motion.div
            {...variants("left", 0.5)}
            className="block rounded-xl border p-8 shadow-xl transition border-color-secondary"
          >
            <People size="32" color="#e53d4b" variant="TwoTone" />

            <h2 className="mt-4 text-xl font-bold text-gray-900">
              {content3.title}
            </h2>

            <p className="mt-1 text-sm text-gray-700">{content3.description}</p>
          </motion.div>
        </div>
        <center>
          <motion.div
            {...variants("up", 0.4)}
            className="mt-12 text-center md:max-w-64"
          >
            <Link
              href={`/${locale}/donate`}
              className="btn-primary hover:text-gray-900"
            >
              {link}
            </Link>
          </motion.div>
        </center>
      </div>
    </section>
  );
}
