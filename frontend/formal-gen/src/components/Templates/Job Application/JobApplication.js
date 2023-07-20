import React from 'react'
import { useLocation } from 'react-router-dom';
import styles from './JobApplication.module.css';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import _ from 'lodash';

const OfferLetter1 = () => {

    const props = useLocation().state;
    console.log(props)
    



    const downloadHandler = async () => {
        const download = document.getElementById('offer_letter');
        html2canvas(download)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF("p", "mm", "a4");
                var width = pdf.internal.pageSize.getWidth();
                var height = pdf.internal.pageSize.getHeight();
                pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
                pdf.save(`${props.candidateDetails.fname} ${props.candidateDetails.lname} Offer Letter.pdf`);
            })
    }

    return (
        <div>
            <div className={`${styles.offer_letter}`} id='offer_letter'>
                <div className={`${styles.header}`}>

                <span className={`${styles.bold}`}>
                    {/* Subject: Assistant Communications Director */}
                    Subject: {`${props.jobDetails.jobTitle}`}
                    </span> - <span className={`${styles.bold}`}>
                        {/* Joseph Green */}
                        {props.candidateDetails.fname} {props.candidateDetails.lname}
                    </span>
                </div>
                <hr />


                <div className={`${styles.main_body}`}>
                    <div className={`${styles.date} ${styles.para}`}>
                        {props.dateToday.dateToday}
                    </div>
                    <div className={`${styles.title}`}>Job Application</div>
                    <div className={`${styles.subtitle}`}>For {props.jobDetails.jobTitle}</div>
                    <div className={`${styles.content}`}>
                        <div className={`${styles.para}`}>Dear <span className={`${styles.bold}`}>
                            {/* {props.candidateDetails.fname} {props.candidateDetails.lname} */}
                            Hiring Manager
                        </span>,</div>
                        <div className={`${styles.para}`}>Your job posting on  <span className={`${styles.bold}`}>
                                {props.jobDetails.jobPostingOn} 
                            </span> for <span className={`${styles.bold}`}>
                                {/* Assistant Communications Director */}
                                {props.jobDetails.jobTitle}
                                 </span> piqued my interest.
                            Your description of the work responsibilities for the     <span className={`${styles.bold}`}>
                            {props.jobDetails.jobTitle}
                                {/* Assistant Director */}
                            </span>  role closely matches my experience,
                            and I am excited to submit my resume to you for your consideration.
                            {props.candidateDetails.currCompanyName?
                            <div>
                            Currently, I am working as <span className={`${styles.bold}`}>

                            {props.candidateDetails.currDesignation}
                            </span> for  <span className={`${styles.bold}`}>
                                {props.candidateDetails.currCompanyName}.
                            </span>
                            </div>:""
                            }
                            
                        </div>
                        {props.skills.length && props.skills[0]!==''?
                        <div className={`${styles.para}`}>
                            
                            My skillset includes {props.skills.map(skill=>{
                                return skill+', '
                                })}. And I always look to apply them most optimally so that it enhances my throuput to maximum.
                        </div>
                        :""}
                        <div className={`${styles.para}`}>
                            <span className={`${styles.bold}`}>

                                {
                                props.keyAspects.length && props.keyAspects[0].where!=='' ?props.keyAspects.map((aspect)=>{
                                    return <div>
                                        When I was working for {aspect.where},  {aspect.situation}. So I decided to take it up and did {aspect.task}, due to which {aspect.outcome}
                                    </div>
                                }):""}
                            </span>

                        </div>
                        <div className={`${styles.para}`}>
                            {props.availableFrom!==''?<span>
                                    I'll be able to join <span className={`${styles.bold}`}>{props.jobDetails.joiningCompanyName}</span> as a <span className={`${styles.bold}`}>{props.jobDetails.jobType} Employee </span>
                                    from {props.availableFrom} {props.jobDetails.expectedSalary!==""?' and ':". "}
                                </span>:""
                                }
                            {props.jobDetails.expectedSalary?<div>
                                I expect <b>annual </b>salary of 
                                <span className={`${styles.bold}`}>
                                    {props.jobDetails.expectedSalarya}
                                </span>
                                </div>:<></>}
                            My resume is attached. If I can provide you with any further information
                            on my background and qualifications, please let me know.
                            <br />
                            I look forward to hearing from you. Thank you for your consideration.

                        </div>
                        <div className={`${styles.para}`}>
                            Sincerely,
                            <div className={`${styles.para}`}>
                            {/* Joseph Green */}
                            {props.candidateDetails.fname}
                            <br/>
                            {/* Joseph.Green@email.com */}
                            {props.candidateDetails.email}
                            <br/>
                            202-555-5252
                            </div>
                        </div>
                       </div>
                </div>
            </div>
            <div className={`${styles.btn_div}`}>
                <button className={`${styles.btn}`}
                onClick={downloadHandler}
                >Download as PDF</button>
                <div className={`${styles.para} ${styles.bold}`} style={{
                    color:"white"
                }}>

                Make sure to attach your resume while mailing this letter!!!
                </div>
            </div>


        </div>
    )
}

export default OfferLetter1;