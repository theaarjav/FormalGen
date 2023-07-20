import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import axios from 'axios';

const Profile = (props) => {

    const updateItems = async () => {
        try {
            // await fetch('http://localhost:5000/resume/history').then(
            //     (data)=>{
            //         props.setResume(data);
            //         console.log(data)
            //     }
            // ).catch((err)=>{
            //     console.log(err)
            // })
            const { data } = await axios.get('http://localhost:5000/resume/history/')

            props.setResume(data);
            console.log('data received!');
        }

        catch (err) {
            console.log(err)
            alert('error!');

        }
        try {

            const { data } = await axios.get('http://localhost:5000/offletter/history/');

            props.setOffletter(data);
            console.log('data received!');
        }

        catch (error) {
            console.log(error)
        }
        try {

            const { data } = await axios.get('http://localhost:5000/jobapplication/history/');

            props.setjobApply(data);
            console.log('data received!', data);
        }

        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        updateItems()
    }, [])

    return (
        <div className='profile'>
            <div className='header'>Your History for email id <b>{props.email}</b></div>
            <div className='table-area'>
                <table>
                    <tbody>
                        <tr>
                            <th>Date Created</th>
                            <th>Type of Document</th>
                            <th>Edit Link</th>
                        </tr>
                        {props.resume && props.resume.length && props.resume.map((resume, index) => (
                            <tr key={index}>
                                <td>{resume.date}</td>
                                <td>Resume</td>
                                <td><Link to={`/edit/resume/${resume._id}`}>edit</Link></td>
                            </tr>
                        ))}
                        {props.offerLetter && props.offerLetter.map((ol, index) => (
                            <tr key={index}>
                                <td>{ol.date}</td>
                                <td>Offer Letter</td>
                                <td><Link to={`/edit/offletter/${ol._id}`}>edit</Link></td>
                            </tr>
                        ))}
                        {props.jobApply && props.jobApply.map((ja, index) => (
                            <tr key={index}>
                                <td>{ja.date}</td>
                                <td>Job Application</td>
                                <td><Link to={`/edit/jobapplication/${ja._id}`}>edit</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Profile;