import { Outlet, useLocation } from "react-router-dom"

import { Header } from "./header"
import { useEffect } from "react";
import BackgroundEffect from "../components/backgroundEffects";

export const Layout =()=>{

  
        const location = useLocation();
      
        useEffect(() => {
          if (location.pathname === '/') {
            document.body.classList.add('home-page');
          } else {
            document.body.classList.remove('home-page');
          }
        }, [location]);
      


    return(

        <>
<header className="headerContainer">
    <Header/>
</header>
<BackgroundEffect/>
<main>
    <Outlet/>
</main>


</>
    )
}