
import { useContext, useEffect, useState } from "react";
import LanguageContext from "../context/LanguageContext";

export const AboutMe =()=>{
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const languageContext = useContext(LanguageContext);
    const language = languageContext?.language || "en"; // Default to "en" if undefined

    
    const images = [
        "./jag.jpg",
        // "./sprak.jpg",
        // "./koda.jpg",
        // "./debuggin.jpg"
    ];

    useEffect(() => {
    const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex: number) => (prevIndex + 1) % images.length);
    }, 4000); // 2000 ms = 2 sekunder

    return () => clearInterval(interval); // Rensa intervallet när komponenten avmonteras
}, [images.length]);


    return(
        <div className="aboutMe">
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
                <h2>{language === "sv" ? "Vem är jag!" : "Who am I!"}</h2>
                <p>{language === 'sv' ? 'Programmering har blivit en passion som växt fram under min utbildning på Medieinstitutet. Varje gång jag kodar, känner jag en glädje och ett engagemang som är svårt att beskriva. Jag fascineras av hur en enkel rad kod kan omvandlas till något så kraftfullt som en interaktiv webbapplikation. Det är en kreativ process där jag kan kombinera min tekniska kunskap med mina konstnärliga idéer, och det är en känsla jag aldrig vill vara utan.Jag ser programmering som en ständig lärprocess där man alltid kan sträva efter att förbättra sig själv och sina färdigheter. Det är en spännande utmaning som jag är redo att ta mig an. Jag ser fram emot att få möjlighet att fortsätta min resa inom programmering och bidra till er verksamhet med min kreativitet, pedagogiska bakgrund och tekniska kunskaper.' : 'Programming has become a passion that has grown throughout my education at Medieinstitutet. Every time I code, I feel a joy and engagement that is hard to describe. I am fascinated by how a simple line of code can transform into something as powerful as an interactive web application. It is a creative process where I can combine my technical knowledge with my artistic ideas, and it is a feeling I never want to be without. I see programming as a continuous learning journey where there is always room for improvement and growth. It is an exciting challenge that I am ready to take on. I look forward to the opportunity to continue my journey in programming and contribute to your company with my creativity, pedagogical background, and technical skills.'}</p>
            
        </div>
    </div>
    </div>
    )
}

