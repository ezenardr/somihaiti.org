import { useMessages, useLocale } from "next-intl";
import { Messages } from "@/global";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/img/logos/logo-simple.png";
import { Translate } from "iconsax-react";
import FooterSection from "@/components/Footer";

export default function Privacy() {
  const locale = useLocale();
  // @ts-ignore
  const messages: Messages = useMessages();
  const { title, description, content } = messages.privacy;
  return (
    <main>
      <header className="">
        <div className="mx-auto max-w-screen-xl px-4 md:pt-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <Image src={Logo} alt={"Logo of somi haiti"} width={100} />
            </Link>
            <div className="">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link
                      className="text-black transition hover:text-color-primary flex gap-2 items-center"
                      href={`/${locale === "en" ? "fr" : "en"}/privacy`}
                    >
                      <Translate size="18" />
                      {locale === "en" ? "Français" : "English"}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <section className="">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-color-primary">
                <h3 className="text-3xl font-semibold">{title}</h3>
                <span className="text-sm font-bold tracking-wider uppercase text-gray-400">
                  {description}
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                {content.map(({ section, content }, index, _) => (
                  <div
                    key={index}
                    className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-color-primary"
                  >
                    <h3 className="text-xl font-semibold tracking-wide">
                      {section}
                    </h3>
                    <p className="mt-3">{content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterSection/>
    </main>
  );
}
