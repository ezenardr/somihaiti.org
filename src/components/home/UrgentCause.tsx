import Image from "next/image";
import Link from "next/link";
import causeShape_1 from "@/assets/img/shapes/half-circle-with-dots.png";
import causeShape_2 from "@/assets/img/shapes/circle-with-line-red.png";
import causeShape_3 from "@/assets/img/shapes/circle-with-line-green.png";
import {useTranslations, useLocale} from "next-intl";
import Health from "@/img/health.webp"
import Education from "@/img/education.webp"
import Development from "@/img/development.webp"

function UrgentCause() {
   const t = useTranslations("Home.causeSection")
   const h = useTranslations("Home.navigation")
   const locale = useLocale()
   const content_title = [
      {
         key: "Health Care",
         img: Health,
      },{
         key: "Education",
         btn_bg: "btn--yellow",
         img: Education,
      },{
         key: "Empowerment",
         btn_bg: "btn--green",
         img: Development,
      }
   ]
   return (
      <div id={"cause"} className="urgent-cause-area overlay bgs-cover pt-120 pb-90 rel z-1" style={{ backgroundImage: `url(/assets/img/causes/urgent-causes.jpg)` }}>
         <div className="container container-1370">
            <div className="row gap-40">
               <div className="col-xl-3 col-md-6">
                  <div className="urgent-cause-content mb-30 rmb-65">
                     <div className="section-title mb-30">
                        <span className="section-title__subtitle mb-30">{t("subtitle")}</span>
                        <h3>{t("title.first")} <span>{t("title.second")}</span> {t("title.third")}</h3>
                     </div>
                     <p>{t("description")}</p>
                  </div>
               </div>

               {content_title.map(({key,img,btn_bg}) => (
                  <div key={key} className="col-xl-3 col-md-6">
                     <div className="cause-item">
                        <div className="image">
                           <Image src={img} alt={key} />
                        </div>
                        <div className="content">
                           <h5>{key}</h5>
                           <p>{t(`content.${key}`)}</p>
                           <div className="cause-btn">
                              <Link className={`cr-btn ${btn_bg}`} href={`/${locale}/contact`}>{h("donate")}</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         
         <div className="urgent-cause-shapes">
            <Image className="one top_image_bounce" src={causeShape_1} alt="Shape of botom" />
            <Image className="two left_image_bounce" src={causeShape_2} alt="Shape of middle" />
            <Image className="three right_image_bounce" src={causeShape_3} alt="Shape of top" />
         </div>
      </div>
   )
}

export default UrgentCause
