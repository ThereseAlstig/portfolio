import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/layout";
import { Homepage } from "../pages/homePage";
import { AboutMe } from "../pages/aboutMe";
import { Portfolio } from "../pages/portfoio";
import { Contact } from "../pages/contact";
import { AdventureRouter } from "../pages/adventureRouter";
import { KlaraKlassikern } from "../pages/klaraKlassikern";
import { TechStack } from "../pages/techStack";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
            children:[
                {
                    index: true,
                    element: <Homepage/>
                },{
                    path: "/about",
                    element: <AboutMe/>
                },{
                    path: "/portfolio",
                    element: <Portfolio/>
                },{
                    path: "/contact",
                    element: <Contact/>
                },{
                    path: "/AdventureRouter",
                    element: <AdventureRouter/>
                },{
                    path: "/klaraKlassikern",
                    element: <KlaraKlassikern/>
                },{
                    path: "/techStack",
                    element: <TechStack/>
                }

            ]
    }
])

export default Router;