
import HeroSection from "./hero-section/hero-section";
import Header from "./header/header";
import Footer from "./footer/footer";
import Carousel from "./carousel/carousel";
import Services from "./services-section/services";
import ChooseUs from "./choose-us/choose-us";
import Quotations from "./quotations/quotations";
import Faq from "./faq/faq";
export default function Home() {
  return (

    <main>
      <Header />
      <HeroSection />
      <Carousel img1="file" img2="globe" img3="vercel" img4="window" img5="file" />
      <Services />
      <ChooseUs />
      <Quotations />
      <Faq/>
      <Footer />
    </main>
  );
}
