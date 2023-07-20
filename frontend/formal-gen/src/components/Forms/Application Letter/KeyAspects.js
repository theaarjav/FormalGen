import React, { useState } from 'react';
import './FormDesign.css';
import Input from '../Input';
import { Button } from '../../Button/Button';

const KeyAspects = (props) => {

    let arr = [];
    for (let i = 0; i < props.values.keyAspects.length; i++) {
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
        props.increase('keyAspects');
    }

    const subtractButton = () => {
        const arr = [...index];
        arr.pop();
        setIndex(arr);
        props.decrease('keyAspects');
    }

    return (
        <form onSubmit={props.formSubmitted}>
            <div className="title">{props.title}</div>
            {index && index.map((e, i) => <div key={e}>
                <div className='numbering'>{i + 1}</div>
                <Input field='Where' type='text' value={props.values.keyAspects[i].where} handleChangeInput={props.onChange(`keyAspects where ${i}`)} />
                <Input field='Situation you were in' type='text' value={props.values.keyAspects[i].situation} handleChangeInput={props.onChange(`keyAspects situation ${i}`)} />
                <Input field='Task assigned to you' type='text' value={props.values.keyAspects[i].task} handleChangeInput={props.onChange(`keyAspects task ${i}`)} />
                <Input field='What was the outcome of the task' type='text' value={props.values.keyAspects[i].outcome} handleChangeInput={props.onChange(`keyAspects outcome ${i}`)} />
                
                
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

export default KeyAspects;