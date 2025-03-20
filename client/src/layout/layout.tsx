import { Outlet, useLocation } from "react-router-dom"

import { Header } from "./header"
import { useEffect, useRef } from "react";
import BackgroundEffect from "../components/backgroundEffects";
import { CSSTransition, SwitchTransition} from "react-transition-group";


export const Layout =()=>{

  
        const location = useLocation();
        const nodeRef = useRef(null);
      
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
        {/* 🚀 SwitchTransition möjliggör smidiga byten mellan sidor */}
        <SwitchTransition>
          <CSSTransition key={location.pathname} classNames="page"   nodeRef={nodeRef}  timeout={500}>
          <div ref={nodeRef}>
              <Outlet />
            </div>
          </CSSTransition>
        </SwitchTransition>
      </main>


</>
    )
}