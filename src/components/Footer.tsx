"use client";
import Link from "next/link";
import { useMessages } from "next-intl";
import { type Messages } from "@/global";
import { Facebook, Instagram } from "iconsax-react";
import { motion } from "framer-motion";
import { variants } from "@/utils/variant";

export default function FooterSection({ locale }: { locale: string }) {
  // @ts-ignore
  const messages: Messages = useMessages();
  const { title, description, donate, terms, privacy } = messages.Home.footer;
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="text-center flex flex-col items-center">
          <motion.h2
            {...variants("up", 0)}
            className="text-3xl font-extrabold text-gray-900 sm:text-5xl"
          >
            {title}
          </motion.h2>
          <motion.p
            {...variants("up", 0.1)}
            className="mx-auto mt-4 max-w-sm text-gray-500"
          >
            {description}
          </motion.p>
          <motion.div
            {...variants("up", 0.2)}
            className="mt-12 text-center md:max-w-64"
          >
            <Link
              href={`/${locale}/donate`}
              className="btn-primary hover:text-gray-900"
            >
              {donate}
            </Link>
          </motion.div>
        </div>
        <div className="mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24">
          <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
            <li>
              <Link
                href={`/${locale}/privacy`}
                className="text-gray-500 transition hover:opacity-75"
              >
                {privacy}
              </Link>
            </li>
          </ul>
          <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
            <li>
              <Link
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">Facebook</span>

                <Facebook
                  size="24"
                  className={"text-gray-600"}
                  variant="TwoTone"
                />
              </Link>
            </li>

            <li>
              <Link
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">Instagram</span>
                <Instagram
                  size="24"
                  className={"text-gray-600"}
                  variant="TwoTone"
                />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
