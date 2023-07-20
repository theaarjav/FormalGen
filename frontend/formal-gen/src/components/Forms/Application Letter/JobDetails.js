import { React } from 'react';
import '../Resume/FormDesign.css';
import Input from '../Input';
import { Button } from '../../Button/Button';
import Form from '../Form';

const JobDetails = (props) => {

    const continueForm = e => {
        e.preventDefault();
        props.nextStep();
    };

    const backForm = e => {
        e.preventDefault();
        props.prevStep();
    };
{/**jobPostingOn:{
                type:String
            },
            joiningCompanyName: {
                type: String
            },
            jobType: {
                type: String
            },
            jobTitle: {
                type: String
            },
            expectedSalary: {
                type: String
            } */}


    return (
        <Form>
            <div className="title">{props.title}</div>
            <Input field='Job Posted on' type='text' value={props.values.jobDetails.jobPostingOn} handleChangeInput={props.onChange('jobDetails jobPostingOn')} />
            <Input field='Company you are Joining' type='text' value={props.values.jobDetails.joiningCompanyName} handleChangeInput={props.onChange('jobDetails joiningCompanyName')} />
            <Input field='Job Title' type='text' value={props.values.jobDetails.jobTitle} handleChangeInput={props.onChange('jobDetails jobTitle')} />
            <Input field='Job Type (Full Time / Part Time / Internship)' type='text' value={props.values.jobDetails.jobType} handleChangeInput={props.onChange('jobDetails jobType')} />
            {/* <Input field='Start Date' type='date' value={props.values.jobDetails.startDate} handleChangeInput={props.onChange('jobDetails startDate')} /> */}
            <Input field='Expected Salary per annum (Please Mention in Rupees)' type='text' value={props.values.jobDetails.expectedSalary} handleChangeInput={props.onChange('jobDetails expectedSalary')} />
            <div className='buttons'>
                <span className='btn-left' onClick={backForm}>
                    <Button content="Previous" />
                </span>
                <span className='btn-right' onClick={continueForm}>
                    <Button content="Next" />
                </span>
            </div>
        </Form>
    );
};

export default JobDetails;