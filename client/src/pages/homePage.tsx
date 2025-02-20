import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export const Homepage = ()=>{
const navigate = useNavigate();

useEffect (()=>{
    const handleAnimationEnd =()=>{
        setTimeout(()=>{
          navigate('/about')  
        }, 2000);
        
    }


const titleElement = document.querySelector('.typing-animation');

if(titleElement){
titleElement.addEventListener('animationend', handleAnimationEnd);

return () => {
  titleElement.removeEventListener('animationend', handleAnimationEnd);
};
}
}, [navigate]);


    return(

        <div className="MyName">
        <h1 className="typing-animation">Therese Ålstig</h1>
        </div>
    )
}