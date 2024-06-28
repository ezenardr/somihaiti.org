import Image from "next/image";
import volunteerThumb_1 from "@/assets/img/valunteer/valunteer1.jpg";

import volunteerShape_1 from "@/assets/img/shapes/hand-glass.png";
import volunteerShape_2 from "@/assets/img/shapes/circle-with-line-red.png";
import volunteerShape_3 from "@/assets/img/shapes/heart.png";
import volunteerShape_4 from "@/assets/img/shapes/house-heart.png";
import {useTranslations} from "next-intl";

function Volunteer({style}: any) {
  const t = useTranslations("Home.volunteerSection")
  const content = [
    {
      key : "Rose-Gilène Clotaire",
      img : "",
      item_bg: "valunteer-item--green",
    },{
      key : "Rodolphe Ezenard",
      img : ""
    },
  ]

  return (
    <div className="volunteer-area pt-120 pb-90 rel z-1">
      <div className="container container-1170">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="section-title text-center mb-60">
              <span className="section-title__subtitle mb-10">{t("subtitle")}</span>
              <h3>{t("title.first")} <span>{t("title.second")}</span></h3>
              <p>{t("description")}</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {content.map(({key,item_bg})=> (
              <div key={key} className="col-xl-4 col-sm-6">
                <div className={`valunteer-item ${item_bg}`}>
                  <div className="valunteer-item__img">
                    <Image src={volunteerThumb_1} alt="Valunteer"/>
                  </div>
                  <div className="valunteer-item__designation">
                    <h5>{key}</h5>
                    <span>{t(`content.${key}.role`)}</span>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
      <div className="valunteet-shapres">
        <Image className="one top_image_bounce" src={volunteerShape_1} alt="Shape"/>
        <Image className="two left_image_bounce" src={volunteerShape_2} alt="Shape"/>
        <Image className="three right_image_bounce" src={volunteerShape_3} alt="Shape"/>
        <Image className="four top_image_bounce" src={volunteerShape_4} alt="Shape"/>
      </div>
    </div>
  )
}

export default Volunteer
