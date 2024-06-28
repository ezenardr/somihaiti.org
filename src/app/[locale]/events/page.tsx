import Wrapper from "@/layout/Wrapper";
import Header from "@/layout/Header";
import Breadcrumb from "@/components/common/Breadcrumb";
import EventArea from "@/components/events/event/EventArea";
import FooterOne from "@/layout/Footer";
import {useTranslations} from "next-intl";

export const metadata = {
   title: "Event Charite - Charity & Donation React Next js Template",
};
function Event({ params:{locale} }: { params: { locale: string } }) {
  const t = useTranslations("Home.navigation")
   return (
      <Wrapper>
        <Header locale={locale} />
        <main>
          <Breadcrumb page_title={t("events")} page_list="Event" style={false} />
          <EventArea />
        </main>
        <FooterOne />
      </Wrapper>
   )
}

export default Event