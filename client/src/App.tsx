import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Layout } from "./layout/layout";
import { AboutMe } from "./pages/aboutMe";
import { AdventureRouter } from "./pages/adventureRouter";
import { Contact } from "./pages/contact";
import { Homepage } from "./pages/homePage";
import { KlaraKlassikern } from "./pages/klaraKlassikern";
import { Portfolio } from "./pages/portfoio";
import { TechStack } from "./pages/techStack";



export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/AdventureRouter" element={<AdventureRouter />} />
          <Route path="/klaraKlassikern" element={<KlaraKlassikern />} />
          <Route path="/techStack" element={<TechStack />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
