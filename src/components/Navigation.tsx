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
                    href="#"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-neutral-200 transition hover:text-color-primary"
                    href="#"
                  >
                    What we do
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-neutral-200 transition hover:text-color-primary"
                    href="#"
                  >
                    Activities
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-neutral-200 transition hover:text-color-primary"
                    href="#"
                  >
                    Blog
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
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
