import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GamesPage from "./pages/GamesPage";
import HeroPages from "./pages/HeroPages";
import WhyChooseUs from "./pages/WhyChooseUs";
import VrThemePark from "./pages/VrThemePark";
import MobileNavbar from "./components/MobileNavbar";
import ClientPage from "./pages/ClientPage";

function App() {
  return (
    <div className="sec1BG">
      <Header />
      <MobileNavbar />
      <HeroPages />
      <WhyChooseUs />
      <GamesPage />
      <VrThemePark />
      <ClientPage />
      <Footer />
    </div>
  );
}

export default App;
