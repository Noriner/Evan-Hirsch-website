import React from "react";
import styles from "./BottomNav.module.scss";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import BackToTop from "../BackToTop/BackToTop";
import arrowleft from "../../Pictures/navarrow.svg";
import arrowright from "../../Pictures/navarrow-1.svg";

function BottomNav (){

    const location = useLocation();
    
    let linkleft = '';
    let linkright = '';

    switch (location.pathname) {
        case '/experience&bio':
            linkleft = <Link className={styles.innergridleft} to="/workshops&thoughtleadership">
                    <img id={styles.arrowleft}src={arrowleft} alt="" />
                    <div id={styles.titletop}>Thinking</div>
                    <div id={styles.titlebottom}>About Design</div>
                </Link>;
            linkright = <Link className={styles.innergridright} to="/product&service">
                    <img id={styles.arrowright}src={arrowright} alt="" />
                    <div id={styles.titletop}>Product &</div>
                    <div id={styles.titlebottom}>Service Desig</div>
                </Link>;
        break;
        case '/interventiondesign':
            linkleft = <Link className={styles.innergridleft} to="/product&service">
                    <img id={styles.arrowleft}src={arrowleft} alt="" />
                    <div id={styles.titletop}>Product &</div>
                    <div id={styles.titlebottom}>Service Desig</div>
                </Link>;
            linkright = <Link className={styles.innergridright} to="/workshops&thoughtleadership">
                    <img id={styles.arrowright}src={arrowright} alt="" />
                    <div id={styles.titletop}>Thinking</div>
                    <div id={styles.titlebottom}>About Design</div>
                </Link>;
        break;
        case '/product&service':
            linkleft = <Link className={styles.innergridleft} to="/experience&bio">
                    <img id={styles.arrowleft}src={arrowleft} alt="" />
                    <div id={styles.titletop}>Experience</div>
                    <div id={styles.titlebottom}>& Bio</div>
                </Link>;
            linkright = <Link className={styles.innergridright} to="/interventiondesign">
                    <img id={styles.arrowright}src={arrowright} alt="" />
                    <div id={styles.titletop}>Intervention</div>
                    <div id={styles.titlebottom}>Design</div>
                </Link>;
        break;
        case '/workshops&thoughtleadership':
            linkleft = <Link className={styles.innergridleft} to="/interventiondesign">
                    <img id={styles.arrowleft}src={arrowleft} alt="" />
                    <div id={styles.titletop}>Intervention</div>
                    <div id={styles.titlebottom}>Design</div>
                </Link>;
            linkright = <Link className={styles.innergridright} to="/experience&bio">
                    <img id={styles.arrowright}src={arrowright} alt="" />
                    <div id={styles.titletop}>Experience</div>
                    <div id={styles.titlebottom}>& Bio</div>
                </Link>;
        break;
        default:
            linkleft = "";
            linkright = "";
    }

    return(
    <>
        <div className={styles.wrapper}>
            <div className={styles.grid}>
                <div id={styles.linkleft}>{linkleft}</div>
                <div id={styles.backtotop}><BackToTop ></BackToTop></div>
                <div id={styles.linkright}>{linkright}</div>  
            </div>
        </div>
    </>
    );
}

export default BottomNav;