import React from 'react'
import styles from './Resume1Template.module.css'
export const Resume1Template = () => {
  return (
    <div><div className={styles.resume} id="resume">
    <div className={styles.left}>
      <div className={styles.left_section_title}>Contact</div>
      <hr></hr>
      <div className={styles.section_content}>
        <div className={styles.left_section_content_heading}>Phone</div>
        {/* <div>{props.phoneNo}</div> */}
        <div className={styles.left_section_content_heading}>Email</div>
        <div>
          {/* <a className={styles.email" href={"mailto:" + props.email}> */}
            {/* {props.email} */}
          {/* </a> */}
        </div>
      </div>
      
          <div className={styles.left_section_title}>Education</div>
          <hr></hr>
          {/* {props.educationRef.map((education) => (
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
          ))} */}
       
      
          <div className={`${styles.left_section_title} last`}>Skills</div>
          <hr></hr>
          <ul className={styles.list}>
            
                <li className={styles.li}>Languages</li>
                
            
           
                <li className={styles.li}>Tools, Frameworks and Databases</li>
                
            
            
                <li className={styles.li}>Subjects</li>
               
          </ul>
        
    
    </div>
    <div className={styles.right}>
      <div className={styles.name}>
        fname lname
      </div>
      
          <div className={styles.section_title}>Work Experience</div>
          <hr></hr>
          
        
      
          <div className={styles.section_title}>Academic Projects</div>
          <hr></hr>
          
      
          <div className={styles.section_title}>
            Academic Achievements and Awards
          </div>
          <hr></hr>
         
     
          <div className={styles.section_title}>Positions of Responsibility</div>
          <hr></hr>
          
    </div>
  </div></div>
  )
}
