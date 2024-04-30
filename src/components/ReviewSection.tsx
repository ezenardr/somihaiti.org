"use client";
import { useMessages } from "next-intl";
import { Messages } from "@/global";
import { motion } from "framer-motion";
import { variants } from "@/utils/variant";

export default function ReviewSection() {
  // @ts-ignore
  const messages: Messages = useMessages();
  const { title, description, content1, content2, content3 } =
    messages.Home.reviewSection;
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:flex md:items-end md:justify-between">
          <div className="max-w-xl">
            <motion.h2
              {...variants("up", 0)}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
            >
              {title}
            </motion.h2>

            <motion.p
              {...variants("up", 0.1)}
              className="mt-6 max-w-lg leading-relaxed text-gray-700"
            >
              {description}
            </motion.p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <motion.blockquote
            {...variants("up", 0.2)}
            className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8"
          >
            <div>
              <div className="mt-4">
                <p className="text-2xl font-bold text-color-secondary sm:text-3xl">
                  {content1.title}
                </p>

                <p className="mt-4 leading-relaxed text-gray-700">
                  {content1.description}
                </p>
              </div>
            </div>

            <footer className="mt-4 text-sm font-medium text-gray-500 sm:mt-6">
              &mdash; anonymous
            </footer>
          </motion.blockquote>

          <motion.blockquote
            {...variants("up", 0.3)}
            className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8"
          >
            <div>
              <div className="mt-4">
                <p className="text-2xl font-bold text-color-secondary sm:text-3xl">
                  {content2.title}
                </p>

                <p className="mt-4 leading-relaxed text-gray-700">
                  {content2.description}
                </p>
              </div>
            </div>

            <footer className="mt-4 text-sm font-medium text-gray-500 sm:mt-6">
              &mdash; anonymous
            </footer>
          </motion.blockquote>

          <motion.blockquote
            {...variants("up", 0.4)}
            className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8"
          >
            <div>
              <div className="mt-4">
                <p className="text-2xl font-bold text-color-secondary sm:text-3xl">
                  {content3.title}
                </p>

                <p className="mt-4 leading-relaxed text-gray-700">
                  {content3.description}
                </p>
              </div>
            </div>

            <footer className="mt-4 text-sm font-medium text-gray-500 sm:mt-6">
              &mdash; anonymous
            </footer>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
