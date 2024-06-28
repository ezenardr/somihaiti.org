import Image from "next/image"
import BecomeVolunteerForm from "@/components/forms/BecomeVolunteerForm"
import VolunteerImg from "@/img/becomeVolunteer.webp"
import volunteerImg_2 from "@/assets/img/valunteer/valunteer-bg.png"
import {useTranslations} from "next-intl";

const BecomeVolunteer = () => {
  const t = useTranslations("Home.becomeVolunteer")
  return (
   <div className="become-volunteer-area py-120 overflow-hidden rel z-1">
       <div className="container">
           <div className="row align-items-center">
               <div className="col-lg-6">
                   <div className="volunteer-image rmb-65">
                       <Image src={VolunteerImg} alt="volunteer helping"/>
                   </div>
               </div>
               <div className="col-lg-6">
                   <div className="volunteer-content form-style-one text-white">
                       <div className="section-title mb-45">
                           <span className="section-title__subtitle mb-10">{t("subtitle")}</span>
                           <h3>{t("title.first")} <span>{t("title.second")}</span></h3>
                       </div>
                       <BecomeVolunteerForm/>
                   </div>
               </div>
           </div>
       </div>
       <div className="become-volunteer-shapes">
           <Image className="one" src={volunteerImg_2} alt="Children looking up"/>
           <Image className="two" src={volunteerImg_2} alt="Children looking down"/>
       </div>
   </div>
  )
}

export default BecomeVolunteer
