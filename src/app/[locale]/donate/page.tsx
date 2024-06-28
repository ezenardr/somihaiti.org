import Wrapper from "@/layout/Wrapper";
import Header from "@/layout/Header";
import Breadcrumb from "@/components/common/Breadcrumb";
import DonateArea from "@/components/portfolio/donate/DonateArea";
import Footer from "@/layout/Footer";

export const metadata = {
   title: "Donate Charite - Charity & Donation React Next js Template",
};
function Donate({ params:{locale} }: { params: { locale: string } }) {
   return (
      <Wrapper>
        <Header locale={locale} />
        <main>
          <Breadcrumb page_title="Donate Now" page_list="Donate" style={false} />
          <DonateArea />
        </main>
        <Footer />
      </Wrapper>
   )
}

export default Donate