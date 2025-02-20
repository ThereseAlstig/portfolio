import { Link } from "react-router-dom"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Header=()=>{

    
        return(
                <>
<div className="header">
<div className="links header2">
        <Link to="/about" className="link hover"><h1>Therese Ålstig</h1></Link>
<div className="linksMedia">
<a href="https://www.instagram.com/theresealstig/"><FontAwesomeIcon icon={faInstagram} /></a>
<a href="https://www.linkedin.com/in/therese-ålstig-39a47622b"><FontAwesomeIcon icon={faLinkedin} /></a>
<a href="https://github.com/ThereseAlstig"><FontAwesomeIcon icon={faGithub} /></a>
</div>
        

</div>
<Link to="/contact" className="link hover">CONTACT</Link> 
<Link to="/portfolio" className="link hover"><h1>Fullstackutvecklare</h1></Link>          
</div>


</>
        )
    
}