import React from "react";
import {useState, useEffect} from 'react';

const BackToTop =()=>{
    const [visible, setVisible] = useState(false)

    useEffect(() =>{
        const toggleVisible = () => {
            if(window.scrollY > 300){
                setVisible (true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisible);

        return () => {
            window.removeEventListener('scroll', toggleVisible);
            };
        },
    [])
    

    const top = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    };

 return(
    <div>
        <i className={`fa-solid fa-arrow-up btn btn-primary back-to-top ${visible ? 'visible' : 'hidden'} `} onClick={top}></i>
    </div>
 )
}

export default BackToTop