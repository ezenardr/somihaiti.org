
import Wrapper from "@/layout/Wrapper";
import Header from "@/layout/Header";
import Breadcrumb from "@/components/common/Breadcrumb";
import FooterOne from "@/layout/Footer";
import About from "@/components/home/About";
import Features from "@/components/home/Features";
import Volunteer from "@/components/home/Volunteer";
import Testimonial from "@/components/home/Testimonial";
import CtaArea from "@/components/home/CtaArea";
import FAQ from "@/components/home/FAQ";
import {useTranslations} from "next-intl";

export const metadata = {
   title: "About Us - SomiHaiti",
};
function AboutPage({params:{locale}}:{params:{locale:string}}) {
  const t = useTranslations("Home.navigation")
   return (
      <Wrapper>
        <Header locale={locale} />
        <main>
          <Breadcrumb page_title={t("about")} page_list="About" style={false} />
          <About />
          <Features />
          {/*<Volunteer style={true} />*/}
          <Testimonial />
          <CtaArea />
          <FAQ locale={locale} />
        </main>
        <FooterOne />
      </Wrapper>
   )
}

export default AboutPage