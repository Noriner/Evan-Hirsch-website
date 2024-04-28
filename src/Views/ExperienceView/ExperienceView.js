import React from "react";
import SubPageFooter from "../../Components/Footer/SubPageFooter/SubPageFooter";
import styles from "./ExperienceView.module.scss";
import ama from "../../Pictures/ama-logo.png";
import aha from "../../Pictures/amheartlogo.png";
import anthem from "../../Pictures/anthemlogo.png"; 
import ea from "../../Pictures/ea.svg";
import erasmus from "../../Pictures/erasmuslogo.png";
import immersion from "../../Pictures/immersionlogo.png";
import livongo from "../../Pictures/livongo.png";
import mind from "../../Pictures/mind-logo-1.png";
import pokemon from "../../Pictures/pokelogo.png";
import redbull from "../../Pictures/redbulllogo.png";
import trimbos from "../../Pictures/trimbos-whiteblock-1.png";
import ubi from "../../Pictures/ubi.svg";
import usc from "../../Pictures/usclogo.png";
import carnegie from "../../Pictures/cmu-logo.png";
import gemhlab from "../../Pictures/gemh-logo.png";
import linkedin from "../../Pictures/li-in-bug-1.png";

const  ExperienceView = () => {
    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.grid}>
                    <div id={styles.title1} className={styles.title}>Bio</div>
                    <div id={styles.text} className={styles.text}>
                        <div className={styles.left}>
                            <div>
                                Evan Hirsch is an accomplished design and business leader whose career spans 
                                consumer products, entertainment, and healthcare. His portfolio includes patented 
                                designs in products that have collectively shipped billions of units, the first 
                                Microsoft Surface and over 25 games including such iconic titles as Madden Football 
                                and FIFA. He co-founded PlayNice, a developer of fun, evidence-based games for 
                                adolescents with anxiety and depression.
                            </div>                            
                            <div>
                                As VP of Design and UX at Carelon 
                                Health Platforms his multi-disciplinary team researched and designed AI and GenAI 
                                tools to improve clinical care and workflows. Prior to Carelon, Evan 
                                led Engine Co. 4, a design and
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div>
                                product strategy studio with a diverse client list ranging from entertainment 
                                to healthcare. In 2015, Evan founded and launched Health2047, the American 
                                Medical Association’s innovation lab. He has also held senior leadership 
                                positions at Microsoft and Electronic Arts.
                            </div>
                            <div>
                                Evan has taught workshops on Designing Emotional Interactions and Creative 
                                Leadership for DARPA, NASA, WHO, Lloyds Group, University of and is a guest 
                                Lecturer at the Stanford dSchool. He has served on ACM SIGGRAPH’s Executive 
                                Committee and is a member of the British Academy of Film and Television Arts. 
                                He lives with his family in San Francisco where he is an avid rower.
                            </div>
                        </div>
                    </div>
                    <div id={styles.breaker1} className={styles.breakerbox}><div className={styles.breaker}></div></div>
                    <div id={styles.title2} className={styles.title}>Partial Client List</div>
                    <div id={styles.logobox} className={styles.logobox}>
                        <img src={ama} alt="Ama logo" />
                        <img src={aha} alt="American Heart Associantion logo" />
                        <img src={anthem} alt="Anthem logo" />
                        <img id={styles.ea} src={ea} alt="EA logo" />
                        <img src={erasmus} alt="Erasmus logo" />
                        <img src={immersion} alt="Immersion logo" />
                        <img src={livongo} alt="Livongo logo" />
                        <img src={mind} alt="Mind logo" />
                        <img src={pokemon} alt="Pokemon Company logo" />
                        <img src={redbull} alt="Redbull logo" />
                        <img src={trimbos} alt="Trimbos Instituut logo" />
                        <img id={styles.ubi} src={ubi} alt="Ubisoft logo" />
                        <img src={usc} alt="USC institute logo" />
                    </div>
                    <div id={styles.title3} className={styles.title}>University Relationships</div>
                        <div id={styles.unibox} className={styles.unibox}>
                            <div className={styles.leftbox}>
                                <img src={carnegie} alt="Carnegie Mellon University logo" />
                                <div className={styles.subtitle}>
                                    Carnegie Mellon University  
                                    Entertainment Technology Center
                                    Visiting Scholar
                                </div>
                            </div>
                            <div className={styles.rightbox}>
                                <img src={gemhlab} alt="Games for Emotional & Mental Health Lab logo" />
                                <div className={styles.subtitle}>
                                    Games for Emotional & Mental Health Lab 
                                    McMaster University
                                    Advisor and Design Partner
                                </div>
                            </div>
                        </div>
                    <div id={styles.link} className={styles.link}>
                        <a href="https://www.linkedin.com/in/evhirsch/" target="_blank" rel="noreferrer"><img src={linkedin} alt="" /></a>
                    </div>
                </div>
            </div>
            <SubPageFooter />
        </>
    )
}

export default ExperienceView;