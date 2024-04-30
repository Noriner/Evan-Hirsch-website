import React from "react";
import styles from "../Footer.module.scss";
import { NavLink } from "react-router-dom";

function SubPageFooter(){
    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.borderleft}></div>
                <div className={styles.borderbottom}></div>

                <div className={styles.grid}>
                    <NavLink to="/workshops&thoughtleadership" className={styles.linkthought}>
                        <div>Thought Leadership & Speaking</div></NavLink>
                    <NavLink to="/product&service" className={styles.linkproduct}><div>Product & Service Design</div></NavLink>
                    <NavLink to="/interventiondesign" className={styles.linkintervention}><div>Intervention Design</div></NavLink>
                    <NavLink to="/experience&bio" className={styles.linkexperience}><div>Experience & Bio</div></NavLink>                   
                </div>
            </div>
        </>
    );
}

export default SubPageFooter;