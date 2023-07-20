import { React } from 'react';
import '../Resume/FormDesign.css';
import Input from '../Input';
import { Button } from '../../Button/Button';
import Form from '../Form';

const Available = (props) => {

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
            startDate: {
                type: String
            },
           
            expectedSalary: {
                type: String
            } */}


    return (
        <Form>
            <div className="title">{props.title}</div>
            <Input field='When are you available to join the company?' type='date' value={props.values.availableFrom} handleChangeInput={props.onChange('availableFrom')} />
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

export default Available;