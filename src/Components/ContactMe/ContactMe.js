import React from "react";
import styles from "./ContactMe.module.scss";
import mail from "../../Pictures/mailicon.png";

function ContactMe(){
    return(
        <>
            <div className={styles.wrapper}>
                <a className={styles.mail} href="mailto:ev@evhirsch.com"><div>Get in touch</div></a>
                <div className={styles.mailicon}><a href="mailto:ev@evhirsch.com"><img src={mail} alt="" /></a></div>
                <div className={styles.bordertop}></div>
                <div className={styles.borderright}></div>
            </div>
        </>
    )
}

export default ContactMe;