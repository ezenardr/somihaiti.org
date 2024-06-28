"use client";
import Link from "next/link.js";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {useLocale, useTranslations} from "next-intl";

function NavMenu() {
    const locale = useLocale();
    const [navTitle, setNavTitle] = useState("");
    const currentRoute = usePathname();
    const t = useTranslations("Home.navigation")
    const isMenuItemActive = (menuLink: string) => {
        return currentRoute === menuLink;
    };
//openMobileMenu
    const openMobileMenu = (menu: any) => {
        if (navTitle === menu) {
            setNavTitle("");
        } else {
            setNavTitle(menu);
        }
    };
    const menu_data = [

        {
            id: 1,
            has_dropdown: false,
            title: t("home"),
            link: `/${locale}`
        },{
            id: 7,
            has_dropdown: false,
            title: t("about"),
            link: `/${locale}/about`
        },
        {
            id: 3,
            has_dropdown: false,
            title: t("events"),
            link: `/${locale}/events`,
        },
        {
            id: 5,
            has_dropdown: false,
            title: "FAQ",
            link: `/${locale}/faqs`,
        },
        {
            id: 2,
            has_dropdown: false,
            title: t("contact"),
            link: `/${locale}/contact`,
        },{
            id: 8,
            has_dropdown: false,
            title: t("lang"),
            link: `/${locale === "en" ? "fr" : "en"}`,
        },
    ];

    return (
        <ul className="navbar-nav menu-open text-lg-end">
            {menu_data.map((menu) => (
                <li key={menu.id}
                onClick={() => openMobileMenu(menu.title)}
                    className={`${menu.has_dropdown ? "menu-item-has-children" : ""} 
                    ${navTitle === menu.title ? "open" : ""} `}
                >
                    <Link href={menu.link}
                        className={`${(isMenuItemActive(menu.link))  ? "active" : ""}`}>
                        {menu.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default NavMenu;

