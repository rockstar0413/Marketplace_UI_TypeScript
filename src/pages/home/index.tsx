import AdSection from "./sections/AdSection";
import Description from "./sections/Description";
import Earn from "./sections/Earn";
import Footer from '../../layouts/Footer';

const Landing = () => {
  return (
    <div className="bg-[#2a2a31]">
      <AdSection />
      <Description />
      <Earn/>
      <Footer />
    </div>
  );
}

export default Landing;