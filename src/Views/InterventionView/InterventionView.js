import React from "react";
import SubPageFooter from "../../Components/Footer/SubPageFooter/SubPageFooter";
import styles from "./InterventionView.module.scss";
import phone from "../../Pictures/genericphone.png";
import movie from "../../Videos/Phonevideo.mov";
import bravemind from "../../Pictures/bravemind.png";
import hotel from "../../Pictures/hotelgamescene.png";
import mail from "../../Pictures/mail.png";
import biochill from "../../Pictures/Biochill.png";
import background from "../../Pictures/Background/BackgroundImg2.png"

const  InterventionView = () => {
    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.grid}>
                    <div className={styles.backgroundimg}><img src={background} alt="" /></div>
                    <div id={styles.title1} className={styles.title}>
                        <div>University Behavioral</div>
                        <div>Health Companion</div>
                    </div>
                    <div id={styles.text1} className={styles.text}>
                        <div>
                            Partnering with European  psychology researchers, 
                            led design of a stepped-care mobile based behavioral 
                            health program (currently in RCTs).
                        </div>
                        <div className={styles.videophone}>
                            <img src={phone} alt="phone case" className={styles.phonecase} />
                            <video src={movie} className={styles.videoincase} autoPlay loop></video>
                        </div>
                    </div>
                    <div id={styles.title2} className={styles.title}>BraveMind MST</div>
                    <div id={styles.text2} className={styles.text}>
                        <div className={styles.imgholder}><img src={bravemind} alt="Video game scene" /></div>
                        <div className={styles.textbetween}>
                            Working with USC & Dept of Veterans Affairs (VA), 
                            designed a new version of Bravemind (VR exposure therapy), 
                            to help Military Sex Trauma survivors overcome 
                            their Post-Traumatic Stress Disorder (PTSD).
                        </div>
                        <div className={styles.imgholder}><img src={hotel} alt="Hotel game scene" /></div>
                    </div>
                    <div id={styles.title3} className={styles.title}>CounterNet</div>
                    <div id={styles.text3} className={styles.text}>
                        <div>
                            Designed and produced a training simulation game with USC for 
                            the US Naval Postgraduate School to train  operators and 
                            policymakers to identify and disrupt internet terrorist recruitment. 
                        </div>
                        <div className={styles.imgholder}><img src={mail} alt="Mail text" /></div>
                    </div>
                    <div id={styles.title4} className={styles.title}>
                        <div>BioChill</div>
                        <div className={styles.subtitle}>(Dutch National Police)</div>
                    </div>
                    <div id={styles.text4} className={styles.text}>
                        <div className={styles.imgholder}><img src={biochill} alt="Policeman" /></div>
                        <div>
                            Working with neuroscience and psychology researchers, 
                            lead design of a biofeedback VR training system to investigate officers’ 
                            ability to improve decision making in high-stress, 
                            high-stakes situations (currently in RCTs).
                        </div>
                    </div>
                    <div id={styles.breaker1} className={styles.breakerbox}><div className={styles.breaker}></div></div>
                    <div id={styles.breaker2} className={styles.breakerbox}><div className={styles.breaker}></div></div>
                    <div id={styles.breaker3} className={styles.breakerbox}><div className={styles.breaker}></div></div>
                </div>
            </div>
            <SubPageFooter />
        </>
    )
}

export default InterventionView;