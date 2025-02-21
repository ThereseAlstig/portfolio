
import { useEffect, useState } from "react";

export const AboutMe =()=>{
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        "./jag.jpg",
        "./sprak.jpg",
        "./koda.jpg",
        "./debuggin.jpg"
    ];

    useEffect(() => {
    const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 2000 ms = 2 sekunder

    return () => clearInterval(interval); // Rensa intervallet när komponenten avmonteras
}, [images.length]);


    return(
    <div className='container'>
    
     
        
        <div className="slider">
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Bild ${index + 1}`}
                            className={index === currentImageIndex ? "active" : ""}
                        />
                    ))}
    </div>
           
            <div className="content">
                <h2>Vem är jag!</h2>
                <p>Programmering har blivit en passion som växt fram under min utbildning på Medieinstitutet. Varje gång jag kodar, känner jag en glädje och ett engagemang som är svårt att beskriva. Jag fascineras av hur en enkel rad kod kan omvandlas till något så kraftfullt som en interaktiv webbapplikation. Det är en kreativ process där jag kan kombinera min tekniska kunskap med mina konstnärliga idéer, och det är en känsla jag aldrig vill vara utan.Jag ser programmering som en ständig lärprocess där man alltid kan sträva efter att förbättra sig själv och sina färdigheter. Det är en spännande utmaning som jag är redo att ta mig an. Jag ser fram emot att få möjlighet att fortsätta min resa inom programmering och bidra till er verksamhet med min kreativitet, pedagogiska bakgrund och tekniska kunskaper.</p>
            
        </div>
    </div>
    )
}

