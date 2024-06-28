import cause_data from "@/data/causeData"
import Image from "next/image"
import Link from "next/link"
import {useTranslations} from "next-intl";
import causeThumb_1 from "@/assets/img/causes/cause1.jpg";

import ourCauseShapes from "@/assets/img/shapes/three-round-green.png"

const OurCause = () => {
  const t = useTranslations("Home.causeSection")
  const content_title = [
    {
      key: "Health Care",
      img: causeThumb_1,
    },{
      key: "Education",
      btn_bg: "btn--yellow",
      img: causeThumb_1,
    },{
      key: "Empowerment",
      btn_bg: "btn--green",
      img: causeThumb_1,
    },{
      key: "Empowerment",
      btn_bg: "btn--green",
      img: causeThumb_1,
    }
  ]
   return (
      <div className="our-cause-area pt-120 pb-90 rel z-1">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8 col-md-10">
                  <div className="section-title text-center mb-50">
                     <span className="section-title__subtitle mb-10">{t("subtitle")}</span>
                     <h3>{t("title.first")} <span>{t("title.second")}</span></h3>
                     <p>{t("description")}</p>
                  </div>
               </div>
            </div>
            
            <div className="row">
               {content_title.map(({key,img,btn_bg}, index) => (
                  <div key={index} className="col-xl-3 col-md-6">
                     <div className="cause-item">
                        <div className="image">
                           <Image src={causeThumb_1} alt="Cause" />
                        </div>
                        <div className="content">
                           <h5><Link href="/causes">{key}</Link></h5>
                           <p>{t(`content.${key}`)}</p>
                           <div className="cause-btn">
                              <Link className={`cr-btn ${btn_bg}`} href="#">Donation now</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <div className="our-cause-shapes">
            <Image className="one top_image_bounce" src={ourCauseShapes} alt="Shape" />
         </div>
      </div>
   )
}

export default OurCause
