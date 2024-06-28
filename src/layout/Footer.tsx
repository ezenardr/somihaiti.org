import Image from "next/image"
import Link from "next/link";
import SocialIcon from "@/components/common/SocialIcon";

import logo from "@/img/logo-simple.webp"
import donate from "@/assets/img/footer/donate-by.png";
import {useLocale, useTranslations} from "next-intl";



function Footer() {
  const t = useTranslations("Home.footer");
  const locale = useLocale();
  const date = new Date();
  const footer_data = [
      {
        id:1,
        page:"home_1",
        widget_title: "Pages",
        footer_link: [{ link: `/${locale}`, link_title: "Home" }, { link: `/${locale}/about`, link_title: "About us" }, { link: `/${locale}/events`, link_title: "Event" },{ link: `/${locale}/contact`, link_title: "Contact" }]
      },
      {
        id:2,
        page:"home_1",
        widget_title: "Quick links",
        footer_link: [{ link: "/sitemap.xml", link_title: "Sitemap" }]
      },
  ]
  return (
    <footer className="footer-area overlay text-white pt-120 bgs-cover"
            style={{backgroundImage: `url(/assets/img/footer/footer-bg.webp)`}}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-3 col-md-6 col-sm-8">
            <div className="widget widget_about">
              <div className="logo_footer mb-25">
                <Link href="/public">
                  <Image src={logo} alt="Logo"/>
                </Link>
              </div>
              <p>{t("description")}</p>
              <div className="social-style-one pt-20">
                <SocialIcon/>
              </div>
            </div>
          </div>

          {footer_data.filter((item) => item.page === "home_1").map((item) => (
            <div key={item.id} className="col-lg-2 col-md-3 col-sm-4 col-6">
              <div className="widget widget_nav_menu">
                <h5 className="widget-title">{item.widget_title}</h5>
                <ul>
                  {item.footer_link.map((li, i) => (
                    <li key={i}><Link href={li.link}>{li.link_title}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom mt-50">
        <div className="container">
          <div className="footer-bottom__inner">
            <div className="donate-by">
              <span>Donate by :</span>
              <Image src={donate} alt="Donate By"/>
            </div>
            <div className="copyright">
              <p>Copyright {date.getFullYear()} {t("right")} -  <Link style={{color : "#f84d42"}}  href={"https://webwazedigital.com"}> webwazedigital.com</Link> </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
