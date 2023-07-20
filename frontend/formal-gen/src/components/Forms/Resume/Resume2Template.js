import React from 'react'
import styles from './Resume2Template.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { ExternalLink } from "react-external-link";

const Resume2Template = () => {

    const props = useLocation().state;
    console.log(props);

   

    

    

    return (
        <div>
            <div className={`${styles.resume}`} id="resume">
                <div className={`${styles.header}`}>
                    <span className={`${styles.left}`}>
                        <div className={`${styles.name}`}>
                            fname lname
                        </div>

                        <div>{"Degree"}</div>
                        <div>{"Course"}</div>
                        <div>{"university"}</div>

                    </span>
                    <span className={`${styles.right}`}>
                        <div>
                            <FontAwesomeIcon icon={faPhone} /> Phone
                        </div>
                        <a className={`${styles.mail}`} href="#">
                            <FontAwesomeIcon icon={faEnvelope} /> Email
                        </a>

                        <ExternalLink
                            className={`${styles.link}`}
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Links
                        </ExternalLink>

                    </span>
                </div>
                <div className={`${styles.main_body}`}>

                    <div className={`${styles.section}`}>
                        <div className={`${styles.title}`}>Education</div>
                        <hr></hr>
                        <ul className={`${styles.list}`}>

                            <div className={`${styles.flexbox} ${styles.subsection}`}>
                                <div className={`${styles.flex_left}`}>
                                    <li className={`${styles.li}`}>
                                        University
                                    </li>
                                    Degree, Course
                                </div>
                            </div>
                            <div className={`${styles.flex_right}`}>
                                <div>Year</div>
                                <div>Grade</div>
                            </div>


                        </ul>
                    </div>


                    <div className={`${styles.section}`}>
                        <div className={`${styles.title}`}>Work Experience</div>
                        <hr></hr>

                    </div>


                    <div className={`${styles.section}`}>
                        <div className={`${styles.title}`}>Academic Projects</div>
                        <hr></hr>

                    </div>


                    <div className={`${styles.section}`}>
                        <div className={`${styles.title}`}>Technical Skills</div>
                        <hr></hr>
                        <ul className={`${styles.list}`}>

                            <li className={`${styles.li}`}>Languages</li>


                            <br />


                            <li className={`${styles.li}`}>
                                Tools, Frameworks and Databases
                            </li>

                            <br />


                            <li className={`${styles.li}`}>Subjects</li>


                        </ul>
                    </div>

                    <div className={`${styles.section}`}>
                        <div className={`${styles.title}`}>
                            Positions of Responsibility
                        </div>
                        <hr></hr>

                    </div>

                    <div className={`${styles.section}`}>
                        <div className={`${styles.title}`}>
                            Academic Achievements and Awards
                        </div>
                        <hr></hr>

                    </div>

                </div>
            </div >

        </div >
    );
}

export default Resume2Template;