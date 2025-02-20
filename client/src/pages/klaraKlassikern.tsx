export const KlaraKlassikern = () => {
    const project = {
        url: "http://178.62.212.132/",
        image: "/klaraKlassikern.png",  // Uppdaterad bildväg
        title: "Klara Klassikern",
        h2: "WooCommerce-tema & plugin för e-handelsoptimering",
        p: "Klara Klassikern är en anpassad e-handelslösning byggd med WordPress och WooCommerce. Projektet inkluderar ett specialutvecklat tema skrivet i PHP och JavaScript, samt ett skräddarsytt WooCommerce-plugin för utökad funktionalitet. Styling hanteras genom CSS för en responsiv och modern design. Stripe har implementerats för smidiga betalningar, inklusive hantering av webhooks för automatiserade processer."
    }

    return (
        <>
            <h1 className="portfolio-h3">{project.title}</h1>

            <div className="portfolio-container">
                <div className="project-language">
                    <ul>
                        <li><a href={project.url} target="_blank" rel="noopener noreferrer">
                        🔗 Live-demo: Klara Klassikern
                        </a></li>
                        <li><a href="https://github.com/ThereseAlstig/KlaraKlassikern">
                        💻 Kod på GitHub: GitHub Repository
                        </a></li>
                        <li>
                            <strong>Plattform:</strong> WordPress, WooCommerce
                        </li>
                        <li>
                            <strong>Utveckling:</strong> PHP, JavaScript
                        </li>
                        <li>
                            <strong>Styling:</strong> CSS
                        </li>
                        <li>
                            <strong>Hosting:</strong> DigitalOcean
                        </li>
                        <li>
                            <strong>Betalningslösning:</strong> Stripe (inkl. webhooks)
                        </li>
                    </ul>
                </div>

                <div className="project-info">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <img className="project-image" src={project.image} alt={project.title} />
                    </a>
                </div>
            </div>
        </>
    );
}
