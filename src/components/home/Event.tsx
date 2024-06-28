"use client"
import Image from "next/image";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import {useLocale, useTranslations} from "next-intl";
import eventThumb_1 from "@/assets/img/events/event1.jpg";
import recre from "@/img/recre.jpg"
import clinique from "@/img/clinique.jpg"
import sensibilisation from "@/img/sensibilisation.jpg"
import health from "@/img/health.webp"
import education from "@/img/education.webp"
import kids from "@/img/kids.webp"

function Event() {
   const t = useTranslations("Home.eventSection")
   const locale = useLocale()
   const event_title = [
      {
         key : "Journée récréative pour les enfants",
         img :recre
      },{
         key : "Campagne de Sensibilisation",
         img :sensibilisation
      },{
         key : "Clinique mobile",
         img :clinique
      },{
         key : "Distribution de kits scolaires",
         img :kids
      },{
         key : "Support financier pour 100 enfants",
         img :education
      }, {
         key: "Conférence et atelier",
         img :health
      },
   ]
   return (
      <div id={"events"} className="our-event-area pt-120 pb-95 rel z-1">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8 col-md-10">
                  <div className="section-title text-center mb-65">
                     <span className="section-title__subtitle mb-10">{(t("subtitle"))}</span>
                     <h3>{(t("title.first"))} <span>{t("title.second")}</span></h3>
                     <p>{t("description")}</p>
                  </div>
               </div>
            </div>

            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2, 1200: 3 }}>
               <Masonry columnsCount={3} gutter="30px" className=" events-active">
                  {event_title.slice(0,6).map(({key,img})=> (
                      <div key={key} className="event-item">
                         <Image src={img} alt={key}/>
                         <div className="event-item__hover">
                            <h4><Link href={`/${locale}/events`}>{key}</Link></h4>
                            <ul>
                               <li><i className="flaticon-time"></i> <span>{t(`content.${key}.date`)}</span></li>
                               <li><i className="flaticon-map"></i> <span>{t(`content.${key}.location`)}</span></li>
                            </ul>
                         </div>
                      </div>
                  ))}
               </Masonry>
            </ResponsiveMasonry>
         </div>
      </div>
   )
}

export default Event
