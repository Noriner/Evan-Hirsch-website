import React from "react";
import { Link } from "react-router-dom";
import MainPageFooter from "../../Components/Footer/MainPageFooter/MainPageFooter";
import styles from "./MainPageView.module.scss";

import evan from "../../Pictures/ev-headshot.png";
import intervention from "../../Pictures/intervention.png";
import product from "../../Pictures/image-6.png";
import workshop from "../../Pictures/mask-group.png";

const MainPageView = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.grid}>
                    <div className={styles.text}>
                        <div className={styles.textup}>
                            I bring the power of storytelling to product
                            strategy and design to create compelling experiences, products and services that build emotional 
                            connections with users to drive adoption and growth.
                        </div> 
                        <div className={styles.textdown}>
                            I lead and build world-class product and design organizations that innovate and ship solutions to the most challenging 
                            and complex problems by bringing a relational approach through the lens of emotion to every step of every journey.
                        </div>
                    </div>
                    <div className={styles.borderdesignup}>
                        <div className={styles.bordertop}></div>
                        <div className={styles.borderleft}></div>
                    </div>
                    <div className={styles.borderdesigndown}>
                        <div className={styles.bordertop}></div>
                        <div className={styles.borderleft}></div>
                    </div>
                    <Link to="/workshops&thoughtleadership" className={styles.linkworkshop}>
                        <div>Workshops &</div>
                        <div>Thought Leadership</div>
                    </Link>
                    <Link to="/product&service" className={styles.linkproduct}>
                        <div>Product &</div>
                        <div>Service Design</div>
                    </Link>
                    <Link to="/interventiondesign" className={styles.linkintervention}>
                        <div>Intervention</div>
                        <div>Design</div>
                    </Link>
                    <Link to="/experience&bio" className={styles.linkexp}>
                        <div>Experience</div>
                        <div>& Bio</div>
                    </Link>
                    <img className={styles.evanimg} src={evan} alt="Evan Hirsch" />
                    <img className={styles.interimg} src={intervention} alt="Intervention" />
                    <img className={styles.prodimg} src={product} alt="Product" />
                    <img className={styles.workimg} src={workshop} alt="workshop" />
                </div>
            </div>
            <MainPageFooter></MainPageFooter>
        </>
    );
}

export default MainPageView;