import React, { useEffect, useState } from "react";



export const Portfolio =()=>{

    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = [
        {
            url: "/klaraKlassikern",
            image: "/klaraKlassikern.png",
            title: "Projekt 1",
            h2: "Klara Klassiker – E-handelsplattform med sociala funktioner",
            p: "Klara Klassiker är en modern och interaktiv e-handelsplattform utvecklad med WooCommerce i WordPress, skapad som en del av ett skolprojekt med fokus på både köpupplevelse och social interaktion. Förutom en smidig och responsiv e-handel kan användare med konto dela tips, skapa egna tipskollektioner och inspirera andra. Plattformen erbjuder en personlig shoppingupplevelse, där kunder kan spara sina favoriter, bygga samlingar och interagera med andra användare. Projektet kombinerar intuitiv användarvänlighet med engagerande sociala funktioner, vilket skapar en dynamisk och inspirerande shoppingmiljö."
        },
        {
            url: "/AdventureRouter",
            image: "/adventureRouter.png",  // Korrigerad bildväg
            title: "Projekt 2",
            h2: "Adventure Router – Interaktiv reseguide med ruttplanerare",
            p: "Adventure Router är en plattform som hjälper resenärer att planera och dela sina resor. Byggd med React och TypeScript i frontend samt Node.js och MySQL i backend, erbjuder den en stabil lösning. Integrerade API:er för resor och väder ger användarna rutter och relevant information. Användare kan spara resor, kommentera och dela bilder, vilket skapar en interaktiv och social reseupplevelse."
        }
    ];
    

   
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
        }, 4000); 

        return () => clearInterval(interval);
    }, [projects.length]);


    return(
        <>
        <div className="container2">
          
              
                    {projects.map((project: { url: string; image: string; title: string; h2?: string; p?: string }, index) => (
                        <a
                            key={index}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card"
                        >
                            <div className= "prooject-content">
                            <div className="image-container">
                            <img src={project.image} alt={project.title} />
                        </div>

                            <div className="text-content">
                                <h2>{project.h2}</h2>
                                <p>{project.p}</p>
                                </div></div>
                        </a>
                    ))}
                  

        </div>
        </>
    )
}