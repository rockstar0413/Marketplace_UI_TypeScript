import AdSection from "./sections/AdSection";
import Summary from "./sections/Summary";
import TabSection from "./sections/TabSection";

const Landing = () => {
  return (
    <div className="bg-[#2a2a31]">
      <AdSection />
      <Summary />
      <TabSection/>
    </div>
  );
}

export default Landing;