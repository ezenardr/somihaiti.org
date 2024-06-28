import Wrapper from "@/layout/Wrapper";
import Header from "@/layout/Header";
import Breadcrumb from "@/components/common/Breadcrumb";
import ContactArea from "@/components/inner-pages/contact/ContactArea";
import ContactInfo from "@/components/inner-pages/contact/ContactInfo";
import FooterOne from "@/layout/Footer";
import {useTranslations} from "next-intl";

export const metadata = {
   title: "Contact Us Charite - Charity & Donation React Next js Template",
};
function ContactPage({ params:{locale} }: { params: { locale: string } }) {
  const t = useTranslations("Home.navigation")
   return (
      <Wrapper>
        <Header locale={locale}  />
        <main>
          <Breadcrumb page_title={t("contact")} page_list="Contact" style={false} />
          <ContactArea/>
          <ContactInfo/>
          {/*<LocationMap/>*/}
        </main>
        <FooterOne />
      </Wrapper>
   )
}

export default ContactPage