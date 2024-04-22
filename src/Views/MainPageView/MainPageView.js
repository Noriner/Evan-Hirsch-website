import React from "react";
import { Link } from "react-router-dom";
import MainPageFooter from "../../Components/Footer/MainPageFooter/MainPageFooter";
import styles from "./MainPageView.module.scss";


const MainPageView = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.grid}>
                    <div className={styles.text}>
                        <div>
                            I bring the power of storytelling to product
                            strategy and design to create compelling experiences, products and services that build emotional 
                            connections with users to drive adoption and growth.
                        </div> 
                        <div>
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
                </div>
            </div>
            <MainPageFooter></MainPageFooter>
        </>
    );
}

export default MainPageView;