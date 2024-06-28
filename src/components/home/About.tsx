import Image from "next/image"
import Link from "next/link"
import {useTranslations, useLocale} from 'next-intl';
import aboutImg_1 from "@/img/about1.webp"
import aboutImg_2 from "@/img/about2.webp"
import aboutImg_3 from "@/img/about3.webp"

export default function About() {
   const t = useTranslations('Home.aboutSection');
   const locale = useLocale();
   return (
      <div className="about-area py-120">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6">
                  <div className="about-image-part">
                     <div className="row">
                        <div className="col-sm-6">
                           <div className="image">
                              <Image src={aboutImg_1} alt="Young child with football" />
                           </div>
                           <div className="project-complete mb-30">
                              <div className="project-complete__icon">
                                 <i className="flaticon-charity"></i>
                              </div>
                              <div className="project-complete__content">
                                 <h5>{t("project.title")}</h5>
                                 <span>{t("project.subtitle")}</span>
                              </div>
                           </div>
                        </div>
                        
                        <div className="col-sm-6">
                           <div className="image mt-65 rmt-15 rel">
                              <Image src={aboutImg_2} alt="People hands" />
                              <div className="experiences-years">
                                 <span className="experiences-years__number">25</span>
                                 <span className="experiences-years__text">{t("date")}</span>
                              </div>
                           </div>
                           <div className="image">
                              <Image src={aboutImg_3} alt="People together" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="col-lg-6">
                  <div className="about-content-part rmt-65">
                     <div className="section-title mb-60">
                        <span className="section-title__subtitle mb-10">{t("subtitle")}</span>
                        <h2>{t("title.first")} <span>{t("title.second")}</span></h2>
                     </div>
                     <p>{t("description")}</p>
                     <Link className="cr-btn ml-5 mt-25" href={`/${locale}/about`}>{t("link")}</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
