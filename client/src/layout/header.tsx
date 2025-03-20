import { Link } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import LanguageContext from "../context/LanguageContext";
import { useContext } from "react";

export const Header=()=>{


        const languageContext = useContext(LanguageContext);

        if (!languageContext) {
          throw new Error("LanguageContext must be used within a LanguageProvider");
        }
        const { language, toggleLanguage } = languageContext;

        return(
                <>
<div className="header">
<div className="links header2">
        <Link to="/about" className="link hover"><h1>THERESE ÅLSTIG</h1></Link>
<div className="linksMedia">
<a href="https://www.instagram.com/theresealstig/"><FontAwesomeIcon icon={faInstagram} /></a>
<a href="https://www.linkedin.com/in/therese-ålstig-39a47622b"><FontAwesomeIcon icon={faLinkedin} /></a>
<a href="https://github.com/ThereseAlstig"><FontAwesomeIcon icon={faGithub} /></a>
</div>
<div className="language-switch">
        <button
          onClick={() => toggleLanguage("sv")}
          className={language === "sv" ? "active" : ""}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="#0057B7"/>
  <rect x="153.6" width="76.8" height="512" fill="#FFD700"/>
  <rect y="217.6" width="512" height="76.8" fill="#FFD700"/>
</svg>

        </button>
        <button
          onClick={() => toggleLanguage("en")}
          className={language === "en" ? "active" : ""}
        ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <rect width="512" height="512" fill="#012169"/>
        <polygon points="0,0 512,512 512,480 32,0" fill="#FFF"/>
        <polygon points="512,0 0,512 0,480 480,0" fill="#FFF"/>
        <polygon points="0,480 480,0 512,0 32,480" fill="#C8102E"/>
        <polygon points="512,480 32,0 0,0 480,480" fill="#C8102E"/>
        <polygon points="208,0 304,0 304,208 512,208 512,304 304,304 304,512 208,512 208,304 0,304 0,208 208,208" fill="#FFF"/>
        <polygon points="224,0 288,0 288,224 512,224 512,288 288,288 288,512 224,512 224,288 0,288 0,224 224,224" fill="#C8102E"/>
      </svg>
      
        </button>
      </div>

</div>
<Link to="/contact" className="link hover"> {language === "sv" ? "KONTAKT" : "CONTACT"}</Link> 
<Link to="/techStack" className="link hover">TECH STACK</Link> 
<Link to="/portfolio" className="link hover"><h1>{language === "sv" ? "PROJEKT" : "PROJECTS"}</h1></Link>          
</div>


</>
        )
    
}

