"use client"
import Image from "next/image"
import { useState } from "react"
import VideoPopup from "@/modals/VideoPopup"
import {useTranslations} from 'next-intl';
import choose from "@/img/choose.webp"

import videoBg from "@/assets/img/video/video-bg.jpg"
import leafShape from "@/assets/img/shapes/three-round-green.png"

const tab_title: string[] = ["Mission", "Vision",]

const ChooseArea = () => {
   const t = useTranslations("Home.chooseSection")


   const [isVideoOpen, setIsVideoOpen] = useState(false);

   // Define state to keep track of the active tab
   const [activeTab, setActiveTab] = useState(0);

   // Handle tab click event
   const handleTabClick = (index: any) => {
      setActiveTab(index);
   };


   return (
      <>
         <div className="why-choose-area overlay py-120">
            <div className="container">
               <div className="row gap-100 align-items-center">
                  <div className="col-lg-6">
                     <div className="why-choose-content text-white rmb-65">
                        <div className="section-title mb-60">
                           <span className="section-title__subtitle mb-10">{t("subtitle")}</span>
                           <h2>{t("title.first")} <span>{t("title.second")}</span></h2>
                        </div>

                        <div className="vission-mission-tab">
                           <ul className="nav mb-25" role="tablist">
                              {tab_title.map((tab, index) => (
                                 <li key={index} className="nav-item">
                                    <button onClick={() => handleTabClick(index)} className={activeTab === index ? 'nav-link active' : 'nav-link'}>
                                       {tab}
                                    </button>
                                 </li>
                              ))}
                           </ul>

                           <div className="tab-content">
                              {tab_title.map((key, index) => (
                                 <div key={index} className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`}  >
                                    {t(`tabContent.${key}`)}
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-lg-6">
                     <div className="why-choose-video">
                        <div className="video rel">
                           <Image src={choose} alt="children in water" />
                           {/*<a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="video-play video-play--one" data-effect="mfp-zoom-in"><i className="fa fa-play"></i></a>*/}
                        </div>
                        <Image className="leaf-shape top_image_bounce" src={leafShape} alt="Shape" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* video modal start */}
         {/*<VideoPopup*/}
         {/*   isVideoOpen={isVideoOpen}*/}
         {/*   setIsVideoOpen={setIsVideoOpen}*/}
         {/*   videoId={"tUP5S4YdEJo"}*/}
         {/*/>*/}
         {/* video modal end */}
      </>
   )
}

export default ChooseArea
