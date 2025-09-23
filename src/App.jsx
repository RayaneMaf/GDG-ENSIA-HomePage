import "./App.css";
import Nav from "./components/Nav/Nav";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import PEventsSection from "./components/PEventsSection/PEventsSection";
import UEventsSection from "./components/UEventsSection/UEventsSection.JSX";
import RegistirationsSection from "./components/RegistirationsSection/RegistirationsSection";
function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <AboutSection />
      <PEventsSection />
      <UEventsSection />
      <RegistirationsSection />
    </>
  );
}
export default App;
