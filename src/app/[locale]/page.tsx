import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import GoalSection from "@/components/GoalSection";
import DetailSection from "@/components/DetailSection";
import ReviewSection from "@/components/ReviewSection";
import TeamSection from "@/components/TeamSection";
import FAQS from "@/components/FAQS";
import FooterSection from "@/components/Footer";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <main className={"relative overflow-x-hidden"}>
      <Navigation />
      <HeroSection locale={locale} />
      <AboutSection />
      <GoalSection locale={locale} />
      <DetailSection />
      <ReviewSection />
      <TeamSection />
      <FAQS />
      <FooterSection />
    </main>
  );
}
