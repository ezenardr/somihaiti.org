"use client";
import {useMessages} from "next-intl";
import {Messages} from "@/global";
import {motion} from "framer-motion";
import {variants} from "@/utils/variant";
import {Whatsapp} from "iconsax-react";
import {Link} from "next-view-transitions";

export default function FAQS() {
  // @ts-ignore
  const messages: Messages = useMessages();
  const {title, subtitle, btn, questions} = messages.Home.faqs;
  return (
    <section className=" bg-[#eaf4f9] text-gray-950 py-8 sm:py-12 lg:py-16 ">
      <div className="mx-auto max-w-screen-xl px-4  sm:px-6  lg:px-8 ">
        <div className="mx-auto max-w-xl text-center">
          <motion.h3
            {...variants("up", 0.1)}
            className={"text-sm md:text-md font-normal text-color-primary pb-2"}
          >
            {subtitle}
          </motion.h3>
          <motion.h2
            {...variants("up", 0)}
            className="text-3xl font-bold sm:text-4xl"
          >
            {title}
          </motion.h2>
        </div>
      </div>
      <div className="space-y-4 mx-auto max-w-screen-xl">
        {questions.map(({question, answer}, index, _) => (
          <motion.details
            key={index}
            {...variants("up", 0.1)}
            className="group [&_summary::-webkit-details-marker]:hidden border border-[#eaf4f9] border-b-blue-100"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg  p-4 text-gray-900">
              <h2 className="font-medium">{question}</h2>
              <svg
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p className="mt-4 px-4 leading-relaxed text-gray-700 pb-4">
              {answer}
            </p>
          </motion.details>
        ))}
        <motion.div {...variants("up", 0.1)} className={" flex justify-center pt-8"}>
          <Link href={"/"} className={"btn-primary flex items-center justify-center gap-4 md:max-w-72 hover:text-gray-800"}><Whatsapp variant={"TwoTone"}/>{btn}</Link>
        </motion.div>
      </div>
    </section>
  );
}
