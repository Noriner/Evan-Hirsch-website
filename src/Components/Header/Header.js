import React from "react";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";


const Header = () => (
    <div className={styles.wrapper}>
        <Logo></Logo>
    </div>
)

export default Header;