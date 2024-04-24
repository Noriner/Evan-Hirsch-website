import React from "react";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import ContactMe from "../ContactMe/ContactMe";
import DynamicTitle from "../DynamicTitle/DynamicTitle";


const Header = () => (
    <div className={styles.wrapper}>
        <div className={styles.leftside}>
            <Logo></Logo>
            <DynamicTitle />
        </div>
        <ContactMe></ContactMe>
    </div>
)

export default Header;