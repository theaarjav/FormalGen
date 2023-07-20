import React, { useState } from 'react';
import './FormDesign.css';
import Input from '../Input';
import { Button } from '../../Button/Button';

const Skills = (props) => {

    let arr = [];
    for (let i = 0; i < props.values.skills.length; i++) {
        arr.push(i + 1);
    }
    const [index, setIndex] = useState(arr);

    const backForm = e => {
        e.preventDefault();
        props.prevStep();
    };

    const continueForm = e => {
        e.preventDefault();
        props.nextStep();
    };

    const addButton = () => {
        setIndex(index => [...index, index.length + 1]);
        props.increase('skills');
    }

    const subtractButton = () => {
        const arr = [...index];
        arr.pop();
        setIndex(arr);
        props.decrease('skills');
    }

    return (
        <form onSubmit={props.formSubmitted}>
            <div className="title">{props.title}</div>
            {index && index.map((e, i) => <div key={e}>
                <div className='numbering'>{i + 1}</div>
                <Input field='Describe your skill' type='text' value={props.values.skills[i]} handleChangeInput={props.onChange(`skills ${i}`)} />
            </div>
            )}
            <div className='add-sub'>
                <span className='add'>
                    <button type='button' className='add-btn' onClick={addButton}>+</button>
                </span>
                <span className='subtract'>
                    <button type='button' className='add-btn' onClick={subtractButton}>-</button>
                </span>
            </div>
            <div className='buttons'>
                <span className='btn-left' onClick={backForm}>
                    <Button content="Previous" />
                </span>
                <span className='btn-right' onClick={continueForm}>
                    <Button content="Next" />
                </span>
            </div>
        </form>
    );
};

export default Skills;