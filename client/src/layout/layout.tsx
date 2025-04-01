import { Outlet, useLocation } from "react-router-dom"

import { Header } from "./header"

import BackgroundEffect from "../components/backgroundEffects";

import { AnimatePresence, motion } from "framer-motion";


export const Layout =()=>{

  const location = useLocation();
  const isHomePage = location.pathname === "/";



      


    return(

        <>

<div className="background-wrapper">
    <BackgroundEffect />
  </div>

  <header className="headerContainer">
     {!isHomePage && <Header />} 
  </header>
  <main style={{ position: "relative", overflow: "hidden" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.9, ease: "easeInOut"  }}
            style={{ position: "relative", width: "100%" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>


</>
    )
}