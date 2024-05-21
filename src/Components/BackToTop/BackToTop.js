import React from "react";
import styles from "./BackToTop.module.scss";
import arrow from "../../Pictures/vector-1.svg"

function BackToTop (){

    const scrollToTop = () =>{ 
        window.scrollTo({ 
          top: 0,  
          behavior: 'smooth'
        }); 
    }; 

    return(
        <>
            <div className={styles.wrapper}>                
                <div onClick={scrollToTop}><img src={arrow} alt="" /></div>                
            </div>
        </>
    );
}
export default BackToTop;