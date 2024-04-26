import React from "react";
import SubPageFooter from "../../Components/Footer/SubPageFooter/SubPageFooter";
import styles from "./ProductView.module.scss";
import phone from "../../Pictures/genericphone.png";
import movie from "../../Videos/Phonevideo.mov";

const  ProductView = () => {
    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.grid}>
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
                    <div id={styles.title3} className={styles.title}>CounterNet</div>
                    <div id={styles.title4} className={styles.title}>
                        <div>BioChill</div>
                        <div>(Dutch National Police)</div>
                    </div>

                </div>
            </div>
            
            <SubPageFooter />
        </>
    )
}

export default ProductView;