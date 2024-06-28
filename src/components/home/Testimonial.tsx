"use client"
import Image from "next/image"
import React, {useRef, useEffect} from "react";
import Slider from 'react-slick';
import testimonialImg_1 from "@/img/testimonial.jpg"
import {useTranslations} from "next-intl";

function Testimonial() {
  const t = useTranslations("Home.TestimonialSection")

  const slider1Ref = useRef<Slider | null>(null);
  const slider2Ref = useRef<Slider | null>(null);

  useEffect(() => {
    if (slider1Ref.current && slider2Ref.current) {
      slider1Ref.current.slickGoTo(2);
    }
  }, []);

  return (
    <div className="testimonials-area bgc-black bgs-cover py-120"
         style={{backgroundImage: `url(/assets/img/testimonials/testimonial-bg.png)`}}>
      <div className="container">
        <div className="row gap-100 align-items-center">
          <div className="col-lg-5">
            <div className="testimonial-left-image rmb-65">
              <Image src={testimonialImg_1} alt="Testimonials"/>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="testimonial-content-item">
              <div className="icon"><i className="flaticon-quote"></i></div>
              <div className="text">{t("text")}
              </div>
              <h4>{t("author")}</h4>
              <span className="designation">{t("location")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;


