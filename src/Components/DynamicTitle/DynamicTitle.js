import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./DynamicTitle.module.scss";

function DynamicTitle(){
    const location = useLocation();
    let subtitle = '';

    switch (location.pathname) {
        case '/experience&bio':
            subtitle = "Experience & Bio";
        break;
        case '/interventiondesign':
            subtitle = "Intervention Design";
        break;
        case '/product&service':
            subtitle = "Product & Service Design";
        break;
        case '/workshops&thoughtleadership':
            subtitle = "Thinking About Design";
        break;
        default:
            subtitle = ""
    }
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.border}></div>
                <h2>{subtitle}</h2>
            </div>
        </>
    )
}

export default DynamicTitle;