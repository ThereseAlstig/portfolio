export const AdventureRouter = () => {

    const project = {
        url: "https://adventure-router.vercel.app/",
        image: "/adventureRouter.png",  // Korrigerad bildväg
        title: "Projekt 2",
        h2: "Adventure Router – Interaktiv reseguide med ruttplanerare",
        p: "Adventure Router är en plattform som hjälper resenärer att planera och dela sina resor. Byggd med React och TypeScript i frontend samt Node.js och MySQL i backend, erbjuder den en stabil lösning. Integrerade API:er för resor och väder ger användarna rutter och relevant information. Användare kan spara resor, kommentera och dela bilder, vilket skapar en interaktiv och social reseupplevelse."
    }

return(

<>
    <h1 className="portfolio-h3">Adventure Router</h1>

    <div className="portfolio-container">

    <div className="project-language">
        <ul>
<li><a href="https://adventure-router.vercel.app/" target="_blank" rel="noopener noreferrer">
🔗 Live-demo: Adventure Router
</a></li>
<li><a href="https://github.com/ThereseAlstig/AdventureRouter.git">
💻 Kod på GitHub: GitHub Repository
</a></li>
<li>
Frontend: React, TypeScript, SCSS
</li>
<li>
Backend: Node.js, TypeScript
</li>
<li>
Databas: MySQL (hostad på Railway)
</li>
<li>
Hosting:
</li>
<li>Frontend: Vercel</li>
<li>
Backend: Render</li>
<li>Databas: Railway</li>
<li>
API-integrationer:
<li>Google Rese-API</li>
<li>Väder-API</li>
<li>
Auth0 (Google & GitHub-inloggning)</li>
<li>Stripe (Betalningar, Webhooks)</li>

</li>

<li><a href="https://github.com/ThereseAlstig/AdventureRouter.git">GitHub kod</a></li>
        </ul>
    </div>

    <div className="project-info">
    
        <a href="https://adventure-router.vercel.app/" target="_blank" rel="noopener noreferrer">
    <img className = "project-image" src={project.image} alt={project.title} />
</a>
  

   


    </div>
    </div>
    </>
)
}