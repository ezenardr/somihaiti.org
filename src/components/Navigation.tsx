import { useLocale } from "next-intl";
import Image from "next/image";
import Logo from "@/assets/img/logos/logo-simple.png";
import Link from "next/link";

export default function Navigation() {
  const locale = useLocale();
  return (
    <header className="bg-transparent absolute top-0 left-0 z-50 w-full">
      <div className="mx-auto max-w-screen-xl px-4 md:pt-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link className="block text-teal-600" href="/">
            <span className="sr-only">Home</span>
            <Image src={Logo} alt={"Logo of somi haiti"} width={100} />
          </Link>
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-neutral-200 transition hover:text-color-primary"
                    href={`/${locale}/#about`}
                  >
                    {`${locale === "en" ? "About Us" : "Qui somme-nous"}`}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-neutral-200 transition hover:text-color-primary"
                    href={`/${locale}/#goalSection`}
                  >
                    {`${locale === "en" ? "What we do" : "Ce que nous faisons"}`}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-neutral-200 transition hover:text-color-primary"
                    href={`/${locale === "en" ? "fr" : "en"}`}
                  >
                    {locale === "en" ? "Français" : "English"}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4 hidden md:block">
              <Link
                className="btn btn-primary shadow text-neutral-200"
                href="#"
              >
                Donate
              </Link>
            </div>

            <div className="block md:hidden">
              <Link
                className="text-neutral-200 transition hover:text-color-primary"
                href={`/${locale === "en" ? "fr" : "en"}`}
              >
                {locale === "en" ? "Français" : "English"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
