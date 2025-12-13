import { Routes, Route } from "react-router";
import PageWrap from "./global/PageWrap";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import FurryTales from "./pages/FurryTales";
import BuddyUpPlus from "./pages/BuddyUpPlus";
import Babel from "./pages/Babel";
import MedSpeak from "./pages/MedSpeak";
import StyleGuide from "./pages/StyleGuide";

import ScrollToTopButton from "./components/ScrollToTopButton.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  return (
    <>
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<PageWrap />} />
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="about" element={<About />} />
        <Route path="/furrytales" element={<FurryTales />} />
        <Route path="/BuddyUpPlus" element={<BuddyUpPlus />} />
        <Route path="/babel" element={<Babel />} />
        <Route path="/MedSpeak" element={<MedSpeak />} />
        <Route path="style-guide" element={<StyleGuide />} />
      </Routes>

      {/* 🔼 Scroll to Top Button */}
      <ScrollToTopButton />

       </ScrollToTop>
    </>
  );
}

export default App;
