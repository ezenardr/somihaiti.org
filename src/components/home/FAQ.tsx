"use client"
import Image from "next/image"
import {useState} from 'react'
import aboutShape_1 from "@/assets/img/shapes/three-round-green.png";
import aboutShape_2 from "@/assets/img/shapes/three-round-red.png";
import faq1 from "@/img/faq1.jpg"
import faq2 from "@/img/faq2.jpg"
import faq3 from "@/img/faq3.jpg"
import faq4 from "@/img/faq4.webp"
import {useTranslations} from "next-intl";

interface DataType {
  id: number;
  question: string;
  answer: string;
  showAnswer: boolean;
}

function FAQ({locale}:{locale:string}) {
  const t = useTranslations("Home.faq")

  const faq_data = locale === "en" ? [
    {
      id: 1,
      question: "What is SOMI Haiti?",
      answer: "SOMI Haiti, which stands for 'Salut Orphelins et Malades Infectés,' is a non-profit organization founded in December 2018 by Mrs. Rose-Gilène Clotaire in Les Cayes, Haiti. Our mission is to provide support and assistance to orphaned children and individuals living with HIV/AIDS.",
      showAnswer: true,
    },
    {
      id: 2,
      question: "Can a person living with HIV afford to have an uninfected partner?",
      answer: "Yes. In the case where the infected person has an undetectable viral load, this means that they cannot transmit the virus. Otherwise, the uninfected partner can choose PrEP or both (2) decide together to use condoms.",
      showAnswer: false,
    },
    {
      id: 3,
      question: "Can an HIV-infected mother give birth to a healthy baby?",
      answer: "Yes, it's possible. This mother must have an undetectable viral load result. Then, from the early months of her pregnancy, she must go to the hospital to be taken care of, during the period and up to delivery.",
      showAnswer: false,
    },
  ] : [
    {
      id: 1,
      question: "Qu'est-ce que SOMI Haiti ?",
      answer: "SOMI Haiti, qui signifie 'Salut Orphelins et Malades Infectés', est une organisation à but non lucratif fondée en décembre 2018 par Mme Rose-Gilène Clotaire aux Cayes, Haïti. Notre mission est de fournir un soutien et une assistance aux enfants orphelins et aux personnes vivant avec le VIH/sida.",
      showAnswer: true
    },
    {
      id: 2,
      question: "Une personne vivant avec le VIH peut-elle se permettre d'avoir un partenaire non infecté ?",
      answer: "Oui. Dans le cas où la personne infectée a une charge virale indétectable, cela signifie qu'elle ne peut transmettre le virus. Dans le cas contraire, le partenaire non infecté peut choisir la PrEP ou les deux (2) décident ensemble d'utiliser des préservatifs.",
      showAnswer: false
    },
    {
      id: 3,
      question: "Une mère infectée par le VIH peut-elle donner naissance à un bébé en bonne santé ?",
      answer: "Oui, c'est possible. Cette mère doit avoir un résultat de charge virale indétectable. Ensuite, dès les premiers mois de sa grossesse, elle doit se rendre à l'hôpital pour être prise en charge, durant la période et jusqu'à l'accouchement.",
      showAnswer: false
    }
  ]

  const [faqData, setFaqData] = useState<DataType[]>(faq_data);

  const toggleAnswer = (id: number) => {
    setFaqData((prevFaqData) => {
      return prevFaqData.map((faq) => ({
        ...faq,
        showAnswer: faq.id === id ? !faq.showAnswer : false,
      }));
    });
  };

  return (
    <div className="faq-area faq-one py-120">
      <div className="container ">
        <div className="row gap-100">
          <div className="col-lg-6">
            <div className="faq-image-part">
              <div className="row">
                <div className="col-6">
                  <div className="image">
                    <Image src={faq1} alt="Human right for future" />
                    <Image className="shape one top_image_bounce" src={aboutShape_1} alt="faq shape 1" />
                  </div>
                  <div className="image">
                    <Image src={faq3} alt="Hand up" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="image">
                    <Image src={faq2} alt="children walking" />
                  </div>
                  <div className="image">
                    <Image src={faq4} alt="Volunteer img" />
                    <Image className="shape two right_image_bounce" src={aboutShape_2} alt="faq shape 2" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="faq-content-part rmt-65 rel z-2">
              <div className="section-title mb-45 for-hide-summary">
                <span className="section-title__subtitle mb-10">{t("subtitle")}</span>
                <h2>{t("title.first")} <span>{t("title.second")}</span></h2>
                <p>{t("description")}</p>
              </div>
              <div className="faq-accordion" id="faqAccordion">
                {faqData.map((item) => (
                  <div key={item.id} className={`accordion-item ${item.showAnswer ? "active" : ""}`}>
                    <h4 className="accordion-header">
                      <button className={`accordion-button ${item.showAnswer ? "" : "collapsed"}`} onClick={() => toggleAnswer(item.id)} type="button">
                        {item.question}
                      </button>
                    </h4>
                    {item.showAnswer && (
                      <div className="accordion-collapse collapse show" id={`collapse${item.id}`}>
                        <div className="accordion-body">{item.answer}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
