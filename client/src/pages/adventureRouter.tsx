import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

export const AdventureRouter = () => {
    const languageContext = useContext(LanguageContext);
    const { language} = languageContext as { language: 'sv' | 'en'; };

    const project = {
        url: "https://adventure-router.vercel.app/",
        image: "/adventureRouter.png", // Korrigerad bildväg
        title: {
          sv: "Projekt 2",
          en: "Project 2"
        },
        h3: {
          sv: "Adventure Router – Interaktiv reseguide med ruttplanerare",
          en: "Adventure Router – Interactive Travel Guide with Route Planner"
        },
        p: {
          sv: "Adventure Router är en plattform som hjälper resenärer att planera och dela sina resor. Byggd med React och TypeScript i frontend samt Node.js och MySQL i backend, erbjuder den en stabil lösning. Integrerade API:er för resor och väder ger användarna rutter och relevant information. Användare kan spara resor, kommentera och dela bilder, vilket skapar en interaktiv och social reseupplevelse.",
          en: "Adventure Router is a platform that helps travelers plan and share their journeys. Built with React and TypeScript in the frontend and Node.js and MySQL in the backend, it offers a robust solution. Integrated travel and weather APIs provide users with routes and relevant information. Users can save trips, comment, and share pictures, creating an interactive and social travel experience."
        },
        links: {
          liveDemo: {
            sv: "🔗 Live-demo: Adventure Router",
            en: "🔗 Live Demo: Adventure Router"
          },
          github: {
            sv: "💻 Kod på GitHub: GitHub Repository",
            en: "💻 Code on GitHub: GitHub Repository"
          }
        },
        stack: {
          frontend: {
            sv: "Frontend: React, TypeScript, SCSS",
            en: "Frontend: React, TypeScript, SCSS"
          },
          backend: {
            sv: "Backend: Node.js, TypeScript",
            en: "Backend: Node.js, TypeScript"
          },
          database: {
            sv: "Databas: MySQL (hostad på Railway)",
            en: "Database: MySQL (hosted on Railway)"
          },
          hosting: {
            sv: "Hosting:",
            en: "Hosting:"
          },
          frontendHosting: {
            sv: "Frontend: Vercel",
            en: "Frontend: Vercel"
          },
          backendHosting: {
            sv: "Backend: Render",
            en: "Backend: Render"
          },
          databaseHosting: {
            sv: "Databas: Railway",
            en: "Database: Railway"
          }
        },
        apiIntegrations: {
          title: {
            sv: "API-integrationer:",
            en: "API Integrations:"
          },
          googleAPI: {
            sv: "Google Rese-API",
            en: "Google Travel API"
          },
          weatherAPI: {
            sv: "Väder-API",
            en: "Weather API"
          },
          auth0: {
            sv: "Auth0 (Google & GitHub-inloggning)",
            en: "Auth0 (Google & GitHub Login)"
          },
          stripe: {
            sv: "Stripe (Betalningar, Webhooks)",
            en: "Stripe (Payments, Webhooks)"
          }
        }
      };


  return (
    <>
      <h1 className="portfolio-h3">{project.h3[language]}</h1>

      <div className="portfolio-container">
        <div className="project-language">
          <ul>
            <li>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.links.liveDemo[language]}
              </a>
            </li>
            <li>
              <a href="https://github.com/ThereseAlstig/AdventureRouter.git">
                {project.links.github[language]}
              </a>
            </li>
            <li>{project.stack.frontend[language]}</li>
            <li>{project.stack.backend[language]}</li>
            <li>{project.stack.database[language]}</li>
            <li>{project.stack.hosting[language]}</li>
            <li>{project.stack.frontendHosting[language]}</li>
            <li>{project.stack.backendHosting[language]}</li>
            <li>{project.stack.databaseHosting[language]}</li>
            <li>{project.apiIntegrations.title[language]}</li>
            <li>{project.apiIntegrations.googleAPI[language]}</li>
            <li>{project.apiIntegrations.weatherAPI[language]}</li>
            <li>{project.apiIntegrations.auth0[language]}</li>
            <li>{project.apiIntegrations.stripe[language]}</li>
          </ul>
        </div>

        <div className="project-info">
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <img className="project-image" src={project.image} alt={project.title[language]} />
          </a>
        </div>
      </div>
    </>
)
}