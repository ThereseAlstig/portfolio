import { Link } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import LanguageContext from "../context/LanguageContext";
import { useContext, useState } from "react";

export const Header=()=>{
    const [menuOpen, setMenuOpen] = useState(false);


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
    <img
      src="https://flagcdn.com/w80/se.png"
      alt="Svenska"
    />
  </button>
  <button
    onClick={() => toggleLanguage("en")}
    className={language === "en" ? "active" : ""}
  >
  <img src="https://flagcdn.com/w40/gb.png" alt="English" />

  </button>
      </div>

</div>

<div className="nav-container">
  <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
    <span className="bar"></span>
    <span className="bar"></span>
    <span className="bar"></span>
  </button>

  <div className={`nav-links ${menuOpen ? "open" : ""}`}>
    <Link to="/contact" className="link hover">
      {language === "sv" ? "KONTAKT" : "CONTACT"}
    </Link>
    <Link to="/techStack" className="link hover">TECH STACK</Link>
    <Link to="/portfolio" className="link hover">
      {language === "sv" ? "PROJEKT" : "PROJECTS"}
    </Link>
  </div>
</div>
</div>


</>
        )
    
}

