"use client";
import Image from "next/image";
import Clotaire from "@/assets/img/Clotaire.jpg";
import { useMessages } from "next-intl";
import { Messages } from "@/global";
import { motion } from "framer-motion";
import { variants } from "@/utils/variant";

export default function TeamSection() {
  // @ts-ignore
  const messages: Messages = useMessages();
  const { name, description } = messages.Home.teamSection;
  return (
    <div className="p-6 sm:p-24 text-color-secondary">
      <div className="flex gap-4 items-center space-y-4 md:space-y-0 md:spae-x-6 md:flex-row max-w-screen-lg mx-auto">
        <motion.div
          {...variants("left", 0)}
          className="self-center flex-shrink-0 w-24 h-24  rounded-full md:justify-self-start bg-gray-500  overflow-hidden"
        >
          <Image src={Clotaire} alt="Image of Mrs Gigie Clotaire" />
        </motion.div>
        <motion.div {...variants("left", 0.1)} className="flex flex-col">
          <h4 className="text-lg font-semibold text-left cmd:text-left">
            {name}
          </h4>
          <p className="text-gray-400">{description}</p>
        </motion.div>
      </div>
    </div>
  );
}
