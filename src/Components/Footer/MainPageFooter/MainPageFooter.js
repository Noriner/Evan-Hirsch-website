import React from "react";
import styles from "../Footer.module.scss";

function MainPageFooter(){
    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.borderleft}></div>
                <div className={styles.borderbottom}></div>
            </div>
        </>
    );
}

export default MainPageFooter;