import React from 'react'
import './SelectTemplate.css'
import { Resume1Template } from './Resume1Template'
import Resume2Template from './Resume2Template'
import { useLocation, useNavigate } from 'react-router-dom'
export const SelectTemplate = () => {
    const props=useLocation().state;
    const navigate=useNavigate();
  return (
    <div className='resume-templates-holder p-3'>
        Select a template for your resume:
        <hr></hr>
        <div className='resumes'>
            <div className='resume-1 template'  onClick={()=>{navigate('/resume/templates/1', {state:props})}}>

            <Resume1Template/>
            </div>
            <div className='resume-2 template' onClick={()=>{navigate('/resume/templates/2',{state:props})}}>

            <Resume2Template/>
            </div>
        </div>
    </div>
  )
}
