import React from "react";
import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";

const Logo = () =>(
    <div className={styles.wrapper}>
        <Link to="/">
            <div className={styles.name}><h1>Evan Hirsch</h1></div>
            <div className={styles.profession}>Executive Design Leadership</div>
        </Link>
    </div>
)

export default Logo;