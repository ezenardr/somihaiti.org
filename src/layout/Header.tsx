"use client"
import NavMenu from "./NavMenu"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import UseSticky from "@/hooks/UseSticky"
import logo from "@/img/logo-simple.webp"
import {useTranslations} from "next-intl";

function Header({locale}:{locale?:string}) {
   const { sticky } = UseSticky();
   const [isActive, setIsActive] = useState<boolean>(false);
   const t = useTranslations("Home.navigation");
   const toggleMobileMenu = () => {
      setIsActive(!isActive); // Toggle the isActive state
   };


   return (
      <>
         <nav className={`navbar navbar-area navbar-expand-lg py-30 navbar--one  ${sticky ? "sticky-active" : ""}`}>
            <div className="container nav-container navbar-bg">
               <div className="responsive-mobile-menu">
                  <button
                     onClick={toggleMobileMenu}
                     className={`menu toggle-btn d-block d-lg-none ${isActive ? "open" : ""}`}
                     data-target="#Iitechie_main_menu"
                     aria-expanded="false"
                     aria-label="Toggle navigation"
                  >
                     <span className="icon-left"></span>
                     <span className="icon-right"></span>
                  </button>
               </div>
               <div className="logo">
                  <Link href="/"><Image src={logo} alt="Logo" /></Link>
               </div>
               <div className={`collapse navbar-collapse ${isActive ? "sopen" : ""}`} id="Iitechie_main_menu">
                  <NavMenu />
               </div>
               <div className="nav-right-part nav-right-part-desktop">
                  <Link className="cr-btn btn--style-two" href={`/${locale}/contact`}>{t("donate")}</Link>
               </div>
            </div>
         </nav>
      </>
   )
}

export default Header
