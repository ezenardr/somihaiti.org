"use client"
import Link from "next/link"
import Slider from 'react-slick'
import Image from "next/image";
import featureShape from "@/assets/img/shapes/three-round-green.png";
import {useTranslations, useLocale} from "next-intl";

const CustomPrevArrow = (props: any) => {
   const { onClick } = props;
   return (
      <div className="slider-arrow text-lg-end mb-20">
         <button onClick={onClick} type="button" className="feature-prev"><i className="flaticon-left-chevron"></i></button>
      </div>
   );
};

const CustomNextArrow = (props: any) => {
   const { onClick } = props;
   return (
      <div className="slider-arrow text-lg-end mb-20">
         <button onClick={onClick} type="button" className="feature-next"><i className="flaticon-next"></i></button>
      </div>
   );
};

export default function Features() {
   const t = useTranslations("Home.featuresSection");
   const locale = useLocale();
   const content_title = ["Improving Education and Healthcare Access","Supporting Sustainable Development Goals","Building Strong and Resilient Communities"]
   const slider_content = [
      {
         title : "Become an Volunteer",
         icon_name: "flaticon-help"
      },
      {
         title : "Quick Fundraising",
         icon_name: "flaticon-solidarity",
         icon_bg: "feature-item__icon--green",
      },
      {
         title : "Start Donating",
         icon_name: "flaticon-donation",
         icon_bg: "feature-item__icon--yellow",
      },
      {
         title : "Quick Fundraising",
         icon_name: "flaticon-solidarity",
         icon_bg: "feature-item__icon--green",
      }
   ]

   const single_slider_settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      fade: false,
      dots: true,
      autoplaySpeed: 5000,
   }

   const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      fade: false,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
      autoplaySpeed: 5000,
      dots: false,
      infinite: true,
      speed: 1000,
      responsive: [
         {
            breakpoint: 991,
            settings: {
               slidesToShow: 2,
               arrows: true,
            }
         },
         {
            breakpoint: 575,
            settings: {
               slidesToShow: 1,
               arrows: false,
            }
         }
      ],
   }

   return (
      <div className="features-area rel bgs-cover z-1" style={{ backgroundImage: `url(/assets/img/background/feature-bg.webp)`, position: "relative" }}>
         <div className="container">
            <div className="row">
               <div className="col-xl-3">
                  <div className="feature-left-wrap bgs-cover text-white overlay" style={{ backgroundImage: `url(/assets/img/background/feature-slider-bg.jpg)` }}>
                     <Slider {...single_slider_settings} className="feature-left-slider">
                        {content_title.map((item, index) => (
                           <div key={index} className="feature-single-slide">
                              <div className="section-title mb-40">
                                 <h3>{item}</h3>
                                 <p>{t(`content1.${item}`)}</p>
                              </div>
                              <Link className={`cr-btn`} href={`/${locale}/contact`}>{t("link")}</Link>
                           </div>
                        ))}
                     </Slider>
                  </div>
               </div>

               <div className="col-xl-9">
                  <div className="feature-content">
                     <div className="row justify-content-between">
                        <div className="col-lg-8">
                           <div className="section-title mb-35">
                              <span className="section-title__subtitle mb-10">{t("subtitle")}</span>
                              <h2>{t("title.first")} <span>{t("title.second")}</span></h2>
                              <p>{t("description")}</p>
                           </div>
                        </div>
                     </div>
                     
                     <Slider {...settings} className="feature-right-slider row mt-20">
                        {slider_content.map(({title,icon_name,icon_bg}) => (
                           <div key={title} className="col-lg-4">
                              <div className="feature-item">
                                 <div className={`feature-item__icon ${icon_bg}`}><i className={icon_name}></i></div>
                                 <h4>{title}</h4>
                                 <p>{t(`content2.${title}`)}</p>
                              </div>
                           </div>
                        ))}
                     </Slider>
                  </div>
               </div>
            </div>
         </div>
         <div className="feature-shapes">
            <Image className="one right_image_bounce" src={featureShape} alt="feature shape" />
         </div>
      </div>
   )
}

