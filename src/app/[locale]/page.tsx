import Wrapper from "@/layout/Wrapper";
import Header from "@/layout/Header"
import HeroArea from "@/components/home/HeroArea"
import UrgentCause from "@/components/home/UrgentCause"
import ChooseArea from "@/components/home/ChooseArea"
import Event from "@/components/home/Event"
import Volunteer from "@/components/home/Volunteer"
import CtaArea from "@/components/home/CtaArea"
import Footer from "@/layout/Footer"
import About from "@/components/home/About"
import BecomeVolunteer from "@/components/home/BecomeVolunteer"
import Features from "@/components/home/Features"
import Testimonial from "@/components/home/Testimonial"
import FAQ from "@/components/home/FAQ"

export default function Home({params: {locale}}: { params: { locale: string } }) {
  return (
    <Wrapper>
      <Header locale={locale}/>
      <main>
        <HeroArea/>
        <UrgentCause/>
        <About/>
        <ChooseArea/>
        <Features/>
        <Event/>
        <BecomeVolunteer/>
        {/*<Volunteer style={true}/>*/}
        <Testimonial/>
        <FAQ locale={locale}/>
        <CtaArea/>
        {/*<Blog/>*/}
      </main>
      <Footer/>
    </Wrapper>
  )
}

