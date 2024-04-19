import React from "react";
import styles from "./ContactMe.module.scss";

function ContactMe(){
    return(
        <>
            <div className={styles.wrapper}>
                <a href="#"><div>Get in touch</div></a>
                <div className={styles.bordertop}></div>
                <div className={styles.borderright}></div>
            </div>
        </>
    )
}

export default ContactMe;