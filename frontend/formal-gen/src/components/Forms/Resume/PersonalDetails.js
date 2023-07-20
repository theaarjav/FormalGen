import React from 'react';
import './FormDesign.css';
import Input from '../Input';
import { Button } from '../../Button/Button';
import Form from '../Form';

const PersonalDetails = (props) => {

    const continueForm = e => {
        e.preventDefault();
        props.nextStep();
    };

    return (
        <Form>
            <div className="title">{props.title}</div>
                <Input field='First Name' type='text' value={props.values.fname} handleChangeInput={props.onChange('fname')} />
                <Input field='Last Name' type='text' value={props.values.lname} handleChangeInput={props.onChange('lname')} />
                <Input field='Roll Number' type='text' value={props.values.rollno} handleChangeInput={props.onChange('rollno')} />
                <Input field='Email Address' type='email' value={props.values.email} handleChangeInput={props.onChange('email')} />
                <Input field='Phone Number' type='number' value={props.values.phone} handleChangeInput={props.onChange('phone')} />
                <div className='buttons'>
                    <span className='btn-right' onClick={continueForm}>
                        <Button content="Next" />
                    </span>
                </div>
        </Form>
    );
}

export default PersonalDetails;