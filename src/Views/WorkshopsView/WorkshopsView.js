import React from "react";
import SubPageFooter from "../../Components/Footer/SubPageFooter/SubPageFooter";
import styles from "./WorkshopsView.module.scss";
import ted from "../../Pictures/TedEvan.png";
import critclass from "../../Pictures/critclass.png";
import workshop from "../../Pictures/workshops.jpg";
import presentation from "../../Pictures/presentation.png";
import BottomNav from "../../Components/BottomNav/BottomNav";

const WorkshopsView = () => {
    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.grid}>
                    <div id={styles.title1} className={styles.title}>Talks and Workshops</div>
                    <div id={styles.title2} className={styles.title}>Growing Creative Leaders & Studio Culture</div>
                    <div id={styles.title3} className={styles.title}>Advising Executive & Investor Teams</div>
                    <div id={styles.img1}><img src={ted} alt="Ted talk poster" /></div>
                    <div id={styles.img2}><img src={presentation} alt="Presentation" /></div>
                    <div id={styles.img3}><img src={critclass} alt="Workshop in class" /></div>
                    <div id={styles.img4}><img src={workshop} alt="Workshop in the field" /></div>
                    <div id={styles.text1} className={styles.text}>
                        <div>
                            Making great design a strategic tool to grow businesses and teams 
                            is my passion.   I love  sharing my experience, and the methods 
                            I’ve developed with leadership teams, design and product leaders, 
                            and students.
                        </div>
                    </div>
                    <div className={styles.borderdesignup}>
                        <div className={styles.bordertop}></div>
                        <div className={styles.borderright}></div>
                    </div>
                    <div className={styles.borderdesigndown}>
                        <div className={styles.bordertop}></div>
                        <div className={styles.borderright}></div>
                    </div>
                    <div id={styles.text2} className={styles.text}>
                        <div>X, Why in 5:  A Roadmap Framework for Product & Service Adoption</div>
                        <div>Delivering Creative Feedback: Critique Skills</div>
                        <div>Emotional Currencies and Driving Engagement</div>
                        <div>Efficacy = Engagement x Trust</div>
                    </div>
                    <div id={styles.text3} className={styles.text}>
                        <div>
                            <div>
                                For over 20 years, I’ve been providing assessments and strategic 
                                guidance to company leaders, investors, venture capital and 
                                private equity firms on:
                            </div>
                            <ul>
                                <li>Product/market fit, user acquisition portfolio </li>
                                <li>Corporate innovation strategy and culture </li>
                                <li>Productization of applied research</li>
                                <li>Creating high performing design/creative teams</li>
                                <li>Project and company turn-arounds</li>
                            </ul>
                        </div>
                    </div>
                    <div id={styles.text4} className={styles.text}>
                        <div>
                            Teaching leaders the elements of designcraft and culture that help teams consistently
                            deliver innovative products, services  and experiences that  gaining and retaining users.
                        </div>
                    </div>
                </div>
            </div>
            <BottomNav />
            <SubPageFooter />
        </>
    )
}

export default WorkshopsView;