import Wrapper from "@/layout/Wrapper";
import HeaderOne from "@/layout/Header";
import Breadcrumb from "@/components/common/Breadcrumb";
import FAQ from "@/components/home/FAQ";
import FaqStyleOne from "@/components/inner-pages/faqs/FaqStyleOne";
import CtaArea from "@/components/home/CtaArea";
import FaqStyleTwo from "@/components/inner-pages/faqs/FaqStyleTwo";
import FooterOne from "@/layout/Footer";
import {useLocale, useTranslations} from "next-intl";

export const metadata = {
   title: "FAQ - SomiHaiti",
};
function FAQPage() {
  const locale = useLocale()
  const t = useTranslations("Home.navigation")
   return (
      <Wrapper>
        <HeaderOne locale={locale}  />
        <main>
          <Breadcrumb page_title={t("faq")} page_list="Faq" style={true} />
          <FAQ locale={locale}/>
          {/*<FaqStyleOne/>*/}
          <CtaArea/>
          {/*<FaqStyleTwo/>*/}
        </main>s
        <FooterOne />
      </Wrapper>
   )
}

export default FAQPage