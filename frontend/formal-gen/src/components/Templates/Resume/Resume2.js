import React from 'react'
import styles from './Resume2.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { ExternalLink } from "react-external-link";

const Resume2 = () => {

  const props = useLocation().state;
  console.log("Inside resume2",props);

  const educationHandler = (degree, course) => {
    // console.log(degree + ' ' + course);
    let res = '' + degree;
    if (course) res += (', ' + course);
    return res;
  }

  const porHandler = (pos, org) => {
    if (pos.trim() !== '' && org.trim() !== '') return pos + " at " + org;
    else if(pos.trim()!=='')return pos
    else return '';
  }

  const downloadHandler = async () => {
    const download = document.getElementById('resume');
    html2canvas(download)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF("p", "mm", "a4");
        var width = pdf.internal.pageSize.getWidth();
        var height = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
        pdf.save(`${props.fnameRef} ${props.lnameRef} Resume.pdf`);
      })
  }

  return (
    <div>
      <div className={`${styles.resume2}`} id="resume">
        <div className={`${styles.header}`}>
          <span className={`${styles.left}`}>
            <div className={`${styles.name2}`}>
              {props.fname} {props.lname}
            </div>
            {props.educationRef[0] && (
              <>
                <div>{props.educationRef[0].degree}</div>
                <div>{props.educationRef[0].course}</div>
                <div>{props.educationRef[0].university}</div>
              </>
            )}
          </span>
          <span className={`${styles.right}`}>
            <div>
              <FontAwesomeIcon icon={faPhone} /> {props.phoneNo}
            </div>
            <a className={`${styles.mail}`} href={"mailto:" + props.email}>
              <FontAwesomeIcon icon={faEnvelope} /> {props.email}
            </a>
            {props.linksRef.length > 0 && props.linksRef[0] &&  (
              <>
                {props.linksRef.map((link, index) => (
                  <div key={index}>
                    <ExternalLink
                      className={`${styles.link}`}
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </ExternalLink>
                  </div>
                ))}
              </>
            )}
          </span>
        </div>
        <div className={`${styles.main_body}`}>
          {props.educationRef.length > 0 && props.educationRef[0].degree  && (
            <>
              <div className={`${styles.section2}`}>
                <div className={`${styles.title2}`}>Education</div>
                <hr></hr>
                <ul className={`${styles.list2}`}>
                  {props.educationRef.map((education, index) => (
                    <div key={index}>
                      <div className={`${styles.flexbox} ${styles.subsection2}`}>
                        <div className={`${styles.flex_left}`}>
                          <li className={`${styles.li}`}>
                            {education.university}
                          </li>
                          <div className={`${styles.italics}`}>
                            {educationHandler(
                              education.degree,
                              education.course
                            )}
                          </div>
                        </div>
                        <div className={`${styles.flex_right}`}>
                          <div>{education.year}</div>
                          <div>{education.grade}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            </>
          )}
          {props.workexRef.length > 0 && props.workexRef[0].title && (
            <>
              <div className={`${styles.section2}`}>
                <div className={`${styles.title2}`}>Work Experience</div>
                <hr></hr>
                <ul className={`${styles.list2}`}>
                  {props.workexRef.map((work, i) => (
                    <div key={i}>
                      <div className={`${styles.subsection2}`}>
                        <div className={`${styles.flexbox}`}>
                          <div className={`${styles.flex_left}`}>
                            <li className={`${styles.li}`}>
                              {work.organisation} 
                              {props.workexRef[i].links.map((link, index) => (
                                <a
                                  key={index}
                                  className={`${styles.link}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  href={link.link}
                                >
                                  {" "}
                                  {link.name}{" "}
                                </a>
                              ))}
                              
                            </li>
                            <div className={`${styles.italics}`}>
                              {work.title}
                            </div>
                          </div>
                          <div className={`${styles.flex_right}`}>
                            <div>{work.duration}</div>
                            <div>Location</div>
                          </div>
                        </div>
                        <ul className={`${styles.sublist2}`}>
                          <li>{work.contributions}</li>
                        </ul>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            </>
          )}
          {props.projectsRef.length > 0&& props.projectsRef[0].name && (
            <>
              <div className={`${styles.section2}`}>
                <div className={`${styles.title2}`}>Academic Projects</div>
                <hr></hr>
                <ul className={`${styles.list2}`}>
                  {props.projectsRef.map((project, i) => 
                    <div key={i}>
                      <div className={`${styles.subsection2}`}>
                        <div className={`${styles.flexbox}`}>
                          <div className={`${styles.flex_left}`}>
                            <li className={`${styles.li}`}>
                              {project.name} 
                              {props.projectsRef[i].links && props.projectsRef[i].links.length && props.projectsRef[i].links[0]  && props.projectsRef[i].links.map((link, index) => (
                                <a
                                  key={index}
                                  className={`${styles.link}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  href={link.link}
                                >
                                  {" "}
                                  {link.name}{" "}
                                </a>
                              ))}
                              
                            </li>
                          </div>
                          {project.duration && project.duration.trim()!==''?
                          <div className={`${styles.flex_right}`}>
                            <div>Duration</div>
                          </div>
:""}
                        </div>
                        <ul className={`${styles.sublist2}`}>
                          <li>{project.description}</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </ul>
              </div>
            </>
          )}
          {(props.skillsRef.languages.length > 0 ||
            props.skillsRef.frameworksLibrariesAndDatabases.length > 0 ||
            props.skillsRef.subjects.length > 0) && (
            <>
              <div className={`${styles.section2}`}>
                <div className={`${styles.title2}`}>Technical Skills</div>
                <hr></hr>
                <ul className={`${styles.list2}`}>
                  {props.skillsRef.languages.length > 0 && props.skillsRef.languages[0] && (
                    <>
                      <li className={`${styles.li}`}>Languages</li>
                      {props.skillsRef.languages.map((language, index) => (
                        <span key={index} className={`${styles.item2}`}>
                          {" "}
                          {language}{" "}
                        </span>
                      ))}
                      <br />
                    </>
                  )}
                  {props.skillsRef.frameworksLibrariesAndDatabases.length >
                    0 && props.skillsRef.frameworksLibrariesAndDatabases[0] && (
                    <>
                      <li className={`${styles.li}`}>
                        Tools, Frameworks and Databases
                      </li>
                      {props.skillsRef.frameworksLibrariesAndDatabases.map(
                        (flad, index) => (
                          <span key={index} className={`${styles.item2}`}>
                            {" "}
                            {flad}{" "}
                          </span>
                        )
                      )}
                      <br />
                    </>
                  )}
                  {props.skillsRef.subjects.length > 0 && props.skillsRef.subjects[0] && (
                    <>
                      <li className={`${styles.li}`}>Subjects</li>
                      {props.skillsRef.subjects.map((subject, index) => (
                        <span key={index} className={`${styles.item2}`}>
                          {" "}
                          {subject}{" "}
                        </span>
                      ))}
                    </>
                  )}
                </ul>
              </div>
            </>
          )}
          {props.porRef.length > 0 && props.porRef[0].position && (
            <div className={`${styles.section2}`}>
              <div className={`${styles.title2}`}>
                Positions of Responsibility
              </div>
              <hr></hr>
              <ul className={`${styles.list2}`}>
                {props.porRef.map((por, i) => (
                  <div key={i}>
                    <div className={`${styles.subsection2}`}>
                      <div className={`${styles.flexbox}`}>
                        <div className={`${styles.flex_left}`}>
                          <li className={`${styles.li}`}>
                            {porHandler(por.position, por.organisation)} 
                            {/* {por.position} at {por.organisation} */}
                            {props.porRef[i].links.map((link, index) => (
                              <a
                                key={index}
                                className={`${styles.link}`}
                                target="_blank"
                                rel="noreferrer"
                                href={link.link}
                              >
                                {" "}
                                {link.name}{" "}
                              </a>
                            ))}
                            
                          </li>
                        </div>
                        <div className={`${styles.flex_right}`}>
                          <div>{por.duration}</div>
                        </div>
                      </div>
                      <ul className={`${styles.sublist2}`}>
                        <li>{por.work}</li>
                      </ul>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          )}
          {props.achievementsRef.length > 0 && props.achievementsRef[0].achievement && (
            <div className={`${styles.section2}`}>
              <div className={`${styles.title2}`}>
                Academic Achievements and Awards
              </div>
              <hr></hr>
              <ul className={`${styles.list2}`}>
                {props.achievementsRef.map((ac, i) => (
                  <div key={i}>
                    <div className={`${styles.subsection2}`}>
                      <div className={`${styles.flexbox}`}>
                        <div className={`${styles.flex_left}`}>
                          <li className={`${styles.li}`}>
                            {ac.achievement} 
                            {props.achievementsRef[i].links.map(
                              (link, index) => (
                                <a
                                  key={index}
                                  className={`${styles.link}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  href={link.link}
                                >
                                  {" "}
                                  {link.name}{" "}
                                </a>
                              )
                            )}
                            
                          </li>
                        </div>
                      </div>
                      <ul className={`${styles.sublist2}`}>
                        {ac.description ? <li>{ac.description}</li> : ""}
                      </ul>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className={`${styles.btn_div}`}>
        <button className={`${styles.btn}`} onClick={downloadHandler}>
          Download as PDF
        </button>
      </div>
    </div>
  );
}

export default Resume2;