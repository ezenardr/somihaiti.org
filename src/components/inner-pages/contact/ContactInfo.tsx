import Link from "next/link";
import React from "react";
import {useTranslations} from "next-intl";

interface DataType {
   id: number;
   item_bg?: string;
   icon: string;
   title: string;
   contact_info?: {
      info_link: string;
      info_title: string;
   }[];
   contact_info_text?: JSX.Element;
}[]

const ContactInfo = () => {
   const t = useTranslations("Contact")
   const contact_data: DataType[] = [
      {
         id: 1,
         item_bg:"contact-info-item--green",
         icon: "flaticon-phone-call",
         title: t("phone"),
         contact_info: [
            {
               info_link: "callto:+19786003048",
               info_title: "+1 (978) 600-3048"
            },
            {
               info_link: "callto:+50938826980",
               info_title: "+509 38 82 6980"
            }
         ]
      },
      {
         id: 2,
         item_bg: "contact-info-item--yellow",
         icon: "flaticon-phone-call",
         title: t("email"),
         contact_info: [
            {
               info_link: "mailto:contact@somihaiti.org",
               info_title: "contact@somihaiti.org",
            },
            {
               info_link: "mailto:somihaiti@gmail.com",
               info_title: "somihaiti@gmail.com"
            }
         ]
      },
      {
         id: 3,
         icon: "flaticon-pin",
         title: t("address"),
         contact_info_text: (<>54 Rue Chateaudin HT 8110 <br />Les Cayes, Haiti</>),
      },
   ]
   return (
      <div className="contact-info-area pb-85">
         <div className="container">
            <div className="row justify-content-center">
               {contact_data.map((item) => (
                  <div key={item.id} className="col-md-4 col-sm-6">
                     <div className={`contact-info-item ${item.item_bg}`}>
                        <div className="contact-info__icon"><i className={item.icon}></i></div>
                        <h5>{item.title}</h5>
                        <div className="contact-info__text">
                           {item.contact_info ? (item.contact_info.map((info, index) => (
                              <React.Fragment key={index}>
                                 <Link href={info.info_link}>{info.info_title}</Link><br />
                              </React.Fragment>
                           ))) : (item.contact_info_text)}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default ContactInfo
