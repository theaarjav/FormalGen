import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Resume1.module.css';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const Resume1 = () => {
  const props = useLocation().state;
  console.log(props);

  const downloadHandler = async () => {
    const download = document.getElementById('resume');
    html2canvas(download)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF("p", "mm", "a4");
        var width = pdf.internal.pageSize.getWidth();
        var height = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
        pdf.save(`${props.fname} ${props.lname} Resume.pdf`);
      })
  }

  return (
      <>
        <div className={styles.resume} id="resume">
          <div className={styles.left}>
            {((props.phoneNo && props.phoneNo.trim().length) || (props.email&& props.email.trim().length))?
              <>
            <div className={styles.left_section_title}>Contact</div>
            <hr></hr>
            <div className={styles.section_content}>
              {props.phoneNo.length?
              <>
              <div className={styles.left_section_content_heading}>Phone</div>
              <div>{props.phoneNo}</div>
              </>
              :""}
              {props.email&& props.email.trim().length?
              <>
              <div className={styles.left_section_content_heading}>Email</div>
              <div>
                <a className={styles.email} href={"mailto:" + props.email}>
                  {props.email}
                </a>
              </div>
              </>:
              <>
              </>
              }
            </div>
              </>:
              <></>}
            {props.educationRef.length > 0 && props.educationRef[0].degree && (
              <>
                <div className={styles.left_section_title}>Education</div>
                <hr></hr>
                {props.educationRef.map((education) => (
                  <div className={styles.left_section_content}>
                    <div className={styles.left_section_content_subheading}>
                      {education.year}
                    </div>
                    <div className={styles.left_section_content_heading}>
                      {education.degree}{" "}
                      {education.course ? `(${education.course})` : ""}
                    </div>
                    <div className={styles.left_section_content_subheading}>
                      {education.grade}
                    </div>
                  </div>
                ))}
              </>
            )}
            {(props.skillsRef.languages.length > 0 ||
              props.skillsRef.frameworksLibrariesAndDatabases.length > 0 ||
              props.skillsRef.subjects.length > 0) && (
              <>
                <div className={`${styles.left_section_title} last`}>Skills</div>
                <hr></hr>
                <ul className={styles.list}>
                  {props.skillsRef.languages.length > 0 && props.skillsRef.languages[0] && (
                    <>
                      <li className={"li"}>Languages</li>
                      {props.skillsRef.languages.map((language, index) => (
                        <span key={index} className={styles.item}>
                          {language}{" "}
                        </span>
                      ))}
                    </>
                  )}
                  {props.skillsRef.frameworksLibrariesAndDatabases.length >
                    0 && props.skillsRef.frameworksLibrariesAndDatabases[0] && (
                    <>
                      <li className={styles.li}>Tools, Frameworks and Databases</li>
                      {props.skillsRef.frameworksLibrariesAndDatabases.map(
                        (flad, index) => (
                          <span key={index} className={styles.item}>
                            {flad}{" "}
                          </span>
                        )
                      )}
                    </>
                  )}
                  {props.skillsRef.subjects.length > 0 && props.skillsRef.subjects[0] && (
                    <>
                      <li className={styles.li}>Subjects</li>
                      {props.skillsRef.subjects.map((subject, index) => (
                        <span key={index} className={styles.item}>
                          {subject}{" "}
                        </span>
                      ))}
                    </>
                  )}
                </ul>
              </>
            )}
          </div>
          <div className={styles.right}>
            <div className={styles.name}>
              {props.fname} {props.lname}
            </div>
            {props.workexRef.length > 0 && props.workexRef[0].title &&  (
              <>
                <div className={styles.section_title}>Work Experience</div>
                <hr></hr>
                {props.workexRef.map((work) => (
                  <div className={styles.section_content} key={Math.random()}>
                    <div className={styles.section_content_heading}>
                      {work.duration}
                    </div>
                    <div className={styles.section_content_subheading}>
                      {work.organisation}
                    </div>
                    <div className={styles.section_content_heading}>{work.title}</div>
                    <li>{work.contributions}</li>
                  </div>
                ))}
              </>
            )}
            {props.projectsRef.length > 0 && props.projectsRef[0].name && (
              <>
                <div className={styles.section_title}>Academic Projects</div>
                <hr></hr>
                {props.projectsRef.map((project) => (
                  <div className={styles.section_content}>
                    <div className={styles.section_content_heading}>
                      {project.name}
                    </div>
                    <li>{project.description}</li>
                  </div>
                ))}
              </>
            )}
            {props.achievementsRef.length > 0 && props.achievementsRef[0].achievement && (
              <>
                <div className={styles.section_title}>
                  Academic Achievements and Awards
                </div>
                <hr></hr>
                {props.achievementsRef.map((achievement) => (
                  <div className={styles.section_content}>
                    <div className={styles.section_content_heading}>
                      {achievement.achievement}
                    </div>
                    <li>{achievement.description}</li>
                  </div>
                ))}
              </>
            )}
            {props.porRef.length > 0 && props.porRef[0].position && (
              <>
                <div className={styles.section_title}>Positions of Responsibility</div>
                <hr></hr>
                {props.porRef.map((por) => (
                  <div className={styles.section_content}>
                    <div className={styles.section_content_heading}>
                      {por.position} at {por.organisation}
                    </div>
                    <li>{por.work}</li>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        <div className={styles.btn_div}>
          <button className={styles.btn} onClick={downloadHandler}>
            Download as PDF
          </button>
        </div> 
      </>
    );
}

export default Resume1;