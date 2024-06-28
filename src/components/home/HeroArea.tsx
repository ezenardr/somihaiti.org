import Link from "next/link"
import {useTranslations, useLocale} from 'next-intl';

export default function Hero() {
   const t = useTranslations('Home.heroSection');
   const locale = useLocale();
   return (
      <div className="hero-area bgs-cover overlay pt-155 pb-170" style={{backgroundImage:`url(/assets/img/hero.webp)`}}>
         <div className="container container-1370">
            <div className="hero-content text-center text-white">
               <h1>{t("title")}</h1>
               <p>{t("description")}</p>
               <div className="hero-btns pt-30 rpt-10">
                  <Link className="cr-btn" href={`/${locale}/contact`}>{t("donate")}</Link>
                  <Link className="cr-btn btn--yellow btn--style-two" href={`/${locale}/contact`}>{t("contact")}</Link>
               </div>
            </div>
         </div>
      </div>
   )
}

