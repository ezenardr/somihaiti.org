"use client";
import Image from "next/image";
import Img4 from "@/assets/img/4.webp";
import Develop from "@/assets/img/develop.jpg";
import Com from "@/assets/img/com.jpg";
import { useMessages } from "next-intl";
import { Messages } from "@/global";
import { motion } from "framer-motion";
import { variants } from "@/utils/variant";

export default function DetailSection() {
  // @ts-ignore
  const messages: Messages = useMessages();
  const {
    detailSection: {
      subtitle,
      title,
      description,
      content1,
      content2,
      content3,
    },
  } = messages.Home;
  return (
    <section className=" text-gray-950">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
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

          <motion.p {...variants("up", 0.2)} className="mt-4 text-gray-800">
            {description}
          </motion.p>
        </div>

        <div className={"mt-8"}>
          <div className={"flex gap-6 flex-col md:flex-row "}>
            <motion.div
              {...variants("up", 0.2)}
              className=" flex-1 rounded-lg p-4 md:pb-8 "
            >
              <Image
                alt=""
                src={Img4}
                width={600}
                height={300}
                className="h-56 w-full rounded-md object-cover"
              />
              <div className="mt-2">
                <p
                  className={"mt-8 text-xl text-center font-bold text-gray-900"}
                >
                  {content1.title}
                </p>
                <p className={"mt-1 text-sm text-center text-gray-700"}>
                  {content1.description}
                </p>
              </div>
            </motion.div>
            <motion.div
              {...variants("up", 0.3)}
              className="flex-1 rounded-lg p-4 md:pb-8 "
            >
              <Image
                alt="Woman talking in front of other people"
                src={Develop}
                width={600}
                height={300}
                className="h-56 w-full rounded-md object-cover"
              />
              <div className="mt-2">
                <p
                  className={"mt-8 text-xl text-center font-bold text-gray-900"}
                >
                  {content2.title}
                </p>
                <p className={"mt-1 text-sm text-center text-gray-700"}>
                  {content2.description}
                </p>
              </div>
            </motion.div>
            <motion.div
              {...variants("up", 0.4)}
              className="flex-1 rounded-lg p-4 md:pb-8 "
            >
              <Image
                alt="Group of people in meeting"
                src={Com}
                width={600}
                height={300}
                className="h-56 w-full rounded-md object-cover"
              />
              <div className="mt-2">
                <p
                  className={"mt-8 text-xl text-center font-bold text-gray-900"}
                >
                  {content3.title}
                </p>
                <p className={"mt-1 text-sm text-center text-gray-700"}>
                  {content3.description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
