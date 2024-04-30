import React from "react";
import SubPageFooter from "../../Components/Footer/SubPageFooter/SubPageFooter";
import styles from "./ProductView.module.scss";
import centrum from "../../Pictures/centrumpackage.jpg";
import surface from "../../Pictures/surfacecutout.png";
import movie from "../../Videos/SurfaceVideo.mp4";
import kimmie from "../../Pictures/KimmiePathExtract.png";
import appscreen from "../../Pictures/AppScreen.png";
import drmovie from "../../Videos/DoctorVideo.mp4";
import background from "../../Pictures/Background/background_productview.png";

const  ProductView = () => {
    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.grid}>
                    <div className={styles.backgroundimg}><img src={background} alt="" /></div>
                    <div id={styles.title1} className={styles.title}>
                        <div>Centrum Vitamins</div>
                        <div className={styles.subtitle}>Child Resistant Packing</div>    
                    </div>
                    <div id={styles.title2} className={styles.title}>
                        <div>Microsoft</div>
                        <div>Surface v1.0</div>
                    </div>
                    <div id={styles.title3} className={styles.title}>
                        <div>USC/PATH</div>
                        <div className={styles.subtitle}>Intelligent Agent</div>
                    </div>
                    <div id={styles.title4} className={styles.title}>
                        <div>Elevance Health</div>
                        <div className={styles.subtitle}>(Formely Anthem.Ai)</div>
                    </div>
                    <div id={styles.text1} className={styles.text}>
                        <div className={styles.imgholder}>
                            <img src={centrum} alt="Centrum Vitamins package" />
                        </div>
                        <div>
                            This patented design is the first and only child safety package 
                            to pass CPSC protocols with 100% child failure and 100% adult 
                            success in multiple studies.
                        </div>
                        <div>
                            In continuous production since 1994.
                        </div>
                    </div>
                    <div id={styles.text2} className={styles.text}>
                        <div className={styles.imgholder}><img src={surface} alt="Microsoft Surface screen" /></div>
                        <div>Design Director for the first multi-touch computer with a ground breaking multi-user interface.</div>
                        <div><video src={movie} className={styles.videoincase} autoPlay loop></video></div>
                    </div>
                    <div id={styles.text3} className={styles.text}>
                        <div>
                            Character and behavior design of a life-size avatar demonstrating USC’s 
                            utterance and facial analysis to interact with DoD leaders in real-time.
                        </div>
                        <div className={styles.imgholder}><img src={kimmie} alt="Character standing in front of camera" /></div>
                    </div>
                    <div id={styles.text4} className={styles.text}>
                        <div><video src={drmovie} className={styles.videoincase} autoPlay loop></video></div>
                        <div>
                            Design and product leadership for AI and machine learning, 
                            cloud native platform and tools to augment clinical expertise 
                            and personalize patient care.
                        </div>
                        <div className={styles.imgholder}><img src={appscreen} alt="Screen of the application" /></div>
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

export default ProductView;