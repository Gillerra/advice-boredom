import { gsap } from "gsap";
import { useEffect, useRef } from 'react';
function Advices () {

    const textAnime = useRef();

    useEffect(() => {
        gsap.to(".heading", {y: -20,
        duration: 3
       
    });
    gsap.to(".text", {rotation: 360,
        duration: 2,
        delay: 0.7
    });
        
    }, []);

    return(<div>
    <div className="heading" ref={textAnime}> 
        <h1>Take advantage of our tips</h1>
    </div>
    
    <div className="text" ref={textAnime}>
        <h3>Are you bored? Don't know what to do?</h3>
        <h2>Look at the advice:</h2>
        
    </div>
    </div>
    )
}
    
export default Advices;

