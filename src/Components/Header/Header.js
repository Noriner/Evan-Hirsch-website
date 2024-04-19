import React from "react";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import ContactMe from "../ContactMe/ContactMe";


const Header = () => (
    <div className={styles.wrapper}>
        <Logo></Logo>
        <ContactMe></ContactMe>
    </div>
)

export default Header;