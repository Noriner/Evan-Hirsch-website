import React from "react";
import styles from "./Logo.module.scss";

const Logo = () =>(
    <div className={styles.wrapper}>
        <a href="#">
            <div className={styles.name}><h1>Evan Hirsch</h1></div>
            <div className={styles.profession}>Executive Design Leadership</div>
        </a>
    </div>
)

export default Logo;