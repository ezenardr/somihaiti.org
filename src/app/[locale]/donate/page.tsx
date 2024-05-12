import {useLocale, useMessages} from "next-intl";
import {Messages} from "@/global";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/img/logos/logo-simple.png";
import {Translate} from "iconsax-react";
import Girl from "@/assets/img/2.webp"
import Zelle from "@/assets/img/zelle.png"
import Moncash from "@/assets/img/moncash.png"
import FooterSection from "@/components/Footer";

export default function Donate() {
  // @ts-ignore
  const messages: Messages = useMessages();
  const {hero,donateSection  } = messages.donate;
  return (
      <main className={"bg-[#eaf4f9]"}>
        <Navigation/>
        <section className=" text-gray-800">
          <div
              className=" flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div
                className="flex-1 flex flex-col justify-center p-6 text-center rounded-sm  lg:text-left">
              <h1 className="text-5xl font-bold leading-none sm:text-5xl"><span
                  className="text-color-primary"> {hero.first} </span> {hero.afterFirst}
                <span className="text-color-primary"> {hero.second} </span>{hero.afterSecond}
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12">{hero.description}
              </p>
              <div
                  className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <Link href={"#zelle"}
                      className="btn-primary hover:text-gray-800">Zelle</Link>
                <Link href={"#moncash"}
                      className="btn-primary hover:text-gray-800">Mon Cash</Link>
              </div>
            </div>
            <div
                className="flex-1 flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <Image src={Girl} alt="Girl smilling"
                     className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"/>
            </div>
          </div>
        </section>
        {/**/}
        <section className="py-6 pt-0 dark:text-gray-900">
          <div
              className="container mx-auto flex flex-col items-center justify-center max-w-lg p-4 lg:max-w-full sm:p-10 lg:flex-row">
            {/*Zelle*/}
            <div id={"zelle"} className="flex flex-col items-center justify-center flex-1 p-4 pb-8 sm:p-8 lg:p-16">
              {/*<span className="text-sm">via</span>*/}
              <Image src={Zelle} alt={"Zelle"} width={150}/>
              <p className="font-semibold text-center">{donateSection.zelle}</p>
            </div>
            {/*Moncash*/}
            <div id={"moncash"}
                className="flex flex-col items-center justify-center flex-1 p-4 pb-8 text-center rounded-md sm:p-8 lg:p-16 ">
              {/*<span className="text-sm font-semibold">via</span>*/}
              <Image src={Moncash} alt={"MonCash"} width={150}/>
              <p className="font-semibold">{donateSection.moncash}</p>
            </div>
          </div>
        </section>
        <FooterSection />
      </main>
  )
}

function Navigation() {
  const locale = useLocale();
  return (
      <header className="bg-transparent absolute top-0 left-0 z-50 w-full">
        <div className="mx-auto max-w-screen-xl px-4 md:pt-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <Image src={Logo} alt={"Logo of somi haiti"} width={100}/>
            </Link>

            <div className="flex items-center gap-4">
              <Link
                  className=" transition hover:text-color-primary flex items-center gap-2"
                  href={`/${locale === "en" ? "fr" : "en"}/donate`}
              >
                <Translate size="18"/>
                {locale === "en" ? "Français" : "English"}
              </Link>
            </div>
          </div>
        </div>
      </header>
  );
}