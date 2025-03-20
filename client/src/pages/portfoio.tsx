import { useContext, useEffect, useState } from "react";
import LanguageContext from "../context/LanguageContext";
import { Link } from "react-router-dom";



export const Portfolio =()=>{

    const [currentIndex, setCurrentIndex] = useState(0);
    console.log(currentIndex);

    const projects = [
        // {
        //     url: "/klaraKlassikern",
        //     image: "/klaraKlassikern.png",
        //     title: "Projekt 1",
        //     h2: "Klara Klassiker – E-handelsplattform med sociala funktioner",
        //     p: "Klara Klassiker är en modern och interaktiv e-handelsplattform utvecklad med WooCommerce i WordPress, skapad som en del av ett skolprojekt med fokus på både köpupplevelse och social interaktion. Förutom en smidig och responsiv e-handel kan användare med konto dela tips, skapa egna tipskollektioner och inspirera andra. Plattformen erbjuder en personlig shoppingupplevelse, där kunder kan spara sina favoriter, bygga samlingar och interagera med andra användare. Projektet kombinerar intuitiv användarvänlighet med engagerande sociala funktioner, vilket skapar en dynamisk och inspirerande shoppingmiljö."
        // },
        {
            url: "/AdventureRouter",
            image: "/adventureRouter.png",
            title: { sv: "Projekt 2", en: "Project 2" },
            h2: {
                sv: "Adventure Router – Interaktiv reseguide med ruttplanerare",
                en: "Adventure Router – Interactive Travel Guide with Route Planner"
            },
            p: {
                sv: "Adventure Router är en plattform som hjälper resenärer att planera och dela sina resor. Byggd med React och TypeScript i frontend samt Node.js och MySQL i backend, erbjuder den en stabil lösning. Integrerade API:er för resor och väder ger användarna rutter och relevant information. Användare kan spara resor, kommentera och dela bilder, vilket skapar en interaktiv och social reseupplevelse.",
                en: "Adventure Router is a platform that helps travelers plan and share their journeys. Built with React and TypeScript in the frontend and Node.js and MySQL in the backend, it offers a stable solution. Integrated travel and weather APIs provide users with routes and relevant information. Users can save trips, comment, and share pictures, creating an interactive and social travel experience."
            }
        }
    ];
    
    const languageContext = useContext(LanguageContext);
    const language: 'sv' | 'en' = (languageContext?.language as 'sv' | 'en') || "sv";
   
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
        }, 4000); 

        return () => clearInterval(interval);
    }, [projects.length]);


    return(
        <>
        <div className="container2">
          
              
                    {projects.map((project, index) => (
                        <Link
                        key={index}
                        to={project.url} // Byt från href till to
                        className="project-card"
                      >
                            <div className= "prooject-content">
                            <div className="image-container">
                            <img src={project.image} alt={project.title[language]} />
                        </div>

                            <div className="text-content">
                                <h2>{project.h2[language]}</h2>
                                <p>{project.p[language]}</p>
                                </div></div>
                                </Link>
                    ))}
                  

        </div>
        </>
    )
}