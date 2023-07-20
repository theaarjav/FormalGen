import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import CandidateDetails from './CandidateDetails';
import JobDetails from './JobDetails';
import Skills from './Skills';
import KeyAspects from './KeyAspects';
import Available from './AvailableFrom';
// import CompanyDetails from './CompanyDetails';
import DateToday from './DateToday';
// import Deadline from './Deadline';
import FinalPage from './FinalPage';
// import JobDetails from './JobDetails';
// import PersonalDetails from './PersonalDetails';

const Application = () => {

    const { id } = useParams();

    const navigate = useNavigate();
    const [index, setIndex] = useState(1);

    const [refs, setRefs] = useState({
        candidateDetails: {
            fname: '', //done
            lname: '', //done,
            currCompanyName: '',
            currDesignation: '',
            email:' '
        },
        availableFrom: '',

        jobDetails: {
            jobPostingOn: '',
            joiningCompanyName: '',
            jobType: '', //done
            jobTitle: '', //done
            expectedSalary: ''
        },
        keyAspects: [
            {
                where: '',
                situation: '',
                task: '',
                outcome: ''
            }
        ],
        skills: [''],
        dateToday: {
            dateToday: ''//done
        },
        date:''
    })

    useEffect(() => {
        if (id) {
            axios.get(`http://localhosr:5000/edit/jobapplication/${id}`)
                .then((response) => {
                    console.log(response.data);
                    setRefs(response.data);
                })
                .catch(() => {
                    alert('error!');
                })
        }
    }, [id]);

    const fieldChangeHandler = input => e => {
        const split = input.split(' ');
        if(split[0]=='keyAspects'){
            const cat = split[0], subCat = split[1], ind=split[2];
        
        const copy = { ...refs };
        copy[cat][ind][subCat] = e.target.value;
        setRefs(copy);
        }
         if(split[0]==='availableFrom'){
            setRefs({...refs, availableFrom:e.target.value})
        }else{
       const cat = split[0], subCat = split[1];
        
        const copy = { ...refs };
        copy[cat][subCat] = e.target.value;
        setRefs(copy);}
    }

    const fieldSubChangeHandler = input => e => {
        const split = input.split(' ');
        const cat = split[0], subCat = split[1], index = split[2];
        const copy = { ...refs };
        copy[cat][subCat][index] = e.target.value;
        setRefs(copy);
    }

    const fieldAddHandler = (name) => {
        const copy = { ...refs };
        console.log(copy[name]);
        const obj = {};
        copy[name].keys(key => {
            // console.log(key);
            if (key === 'links') {
                obj[key] = {
                    name: '',
                    link: ''
                }
            }
            else obj[key] = ''
        });
        console.log(obj);
        copy[name].push(obj);
        setRefs(copy);
    }

    const fieldArrayAddHandler = (name) => {
        let obj = {};
        if (name === 'skills') {
            obj = ' '
        } else if (name === 'keyAspects') {
            obj = {
                where: '',
                situation: '',
                task: '',
                outcome: '',
            }
        } 
        const copy = { ...refs };
        copy[name].push(obj);
        setRefs(copy);
    }

    const fieldRemoveHandler = (name) => {
        const copy = { ...refs };
        copy[name].pop();
        setRefs(copy);
    }

    const imageHandler = (src) => {
        const split = src.split(' ');
        const copy = { ...refs };
        copy[split[0]][split[1]] = split[2];
        setRefs(copy);
        console.log(copy);
    }

    const nextStep = () => {
        setIndex(index + 1);
    }

    const prevStep = () => {
        setIndex(index - 1);
    }

    const formatDate = () => {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();
        let hrs = today.getHours();
        let mins = today.getMinutes();
        var ampm = hrs >= 12 ? 'pm' : 'am';
        hrs = hrs % 12;
        hrs = hrs ? hrs : 12; // the hour '0' should be '12'
        mins = mins < 10 ? '0' + mins : mins;
        var strTime = hrs + ':' + mins + ' ' + ampm;
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = strTime + ', ' + dd + '/' + mm + '/' + yyyy;
        console.log(formattedToday);
        return formattedToday;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(refs);
        const obj = {
            candidateDetails: {
                fname: refs.candidateDetails.fname,
                lname: refs.candidateDetails.lname,
                currCompanyName: refs.candidateDetails.currCompanyName,
                currDesignation: refs.candidateDetails.currDesignation,
                email: refs.candidateDetails.email
            },
            jobDetails: {
                jobType: refs.jobDetails.jobType,
                jobPostingOn: refs.jobDetails.jobPostingOn,
                joiningCompanyName: refs.jobDetails.joiningCompanyName,
                jobTitle: refs.jobDetails.jobTitle,
                expectedSalary: refs.jobDetails.expectedSalary,
                
            },
            keyAspects:refs.keyAspects
            ,
            skills:refs.skills,
            dateToday: {
                dateToday: refs.dateToday.dateToday
            },
            date: formatDate()
        }
        // console.log(obj.date)
        setRefs({
            candidateDetails: {
                fname: '', //done
                lname: '', //done,
                currCompanyName: '',
                currDesignation: '',
                email:''
            },
            availableFrom: '',

            jobDetails: {
                jobPostingOn: '',
                joiningCompanyName: '',
                jobType: '', //done
                jobTitle: '', //done
                expectedSalary: ''
            },
            keyAspects: [
                {
                    where: '',
                    situation: '',
                    task: '',
                    outcome: ''
                }
            ],
            skills: [''],
            dateToday: {
                dateToday: ''//done
            },
            date:''
        });
        navigate('/job_application/templates', { state: refs });

        await fetch("http://localhost:5000/jobapplication", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: id, ...obj }),
        })
            .catch(error => {
                window.alert(error);
                console.log("error");
                return;
            });

    }

    let content = '';

    switch (index) {
        case 1:
            content = (
                <CandidateDetails title='Candidate Details' values={refs} onChange={fieldChangeHandler} nextStep={nextStep}></CandidateDetails>
            );
            break;
        // case 2:
        //   content = (
        //     <CompanyDetails title='Company Details' values={refs} onChange={fieldChangeHandler} nextStep={nextStep} prevStep={prevStep} onImageChange={imageHandler} />
        //   );
        //   break;
        case 2:
            content = (
                <JobDetails title='Job Details' values={refs} onChange={fieldChangeHandler} nextStep={nextStep} prevStep={prevStep} onChangeSub={fieldSubChangeHandler} />
            );
            break;
        case 3:
            content = (
                <Skills title='Skills' values={refs} onChange={fieldChangeHandler} increase={fieldArrayAddHandler} decrease={fieldRemoveHandler} nextStep={nextStep} prevStep={prevStep} onChangeSub={fieldSubChangeHandler} />
            );
            break;
        case 4:
            content = (
                <KeyAspects title='Key Aspects' values={refs} increase={fieldArrayAddHandler} decrease={fieldRemoveHandler} onChange={fieldChangeHandler} nextStep={nextStep} prevStep={prevStep} onChangeSub={fieldSubChangeHandler} />
            );
            break;
        case 5:
            content = (
                <Available title='Available From' values={refs} onChange={fieldChangeHandler} nextStep={nextStep} prevStep={prevStep} />
            );
            break;
        // case 4:
        //   content = (
        //     <Deadline title='Deadline' values={refs} onChange={fieldChangeHandler} nextStep={nextStep} prevStep={prevStep} />
        //   );
        //   break;
        // case 5:
        //   content = (
        //     <PersonalDetails title='Personal Details' values={refs} onChange={fieldChangeHandler} nextStep={nextStep} prevStep={prevStep} onImageChange={imageHandler} />
        //   );
        //   break;
        case 6:
            content = (
                <DateToday title='Date Today' values={refs} onChange={fieldChangeHandler} nextStep={nextStep} prevStep={prevStep} formSubmitted={handleSubmit} />
            );
            break;
        default:
            content = (
                <FinalPage title='Thank You!' values={refs} />
                // <></>
            );
    }
    return <>{content}</>
}

export default Application;