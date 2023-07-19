const express = require('express');
const  mongoose  = require('mongoose');
const router = express.Router();
const Resume = require('../models/resumeSchema');
const OfferLetter = require('../models/offerLetterSchema');
const JobApplication = require('../models/jobApplicationSchema');

router.get('/resume/:id', async (req, res) => {
    const id = req.params.id;
    const getResume = await Resume.findOne({ _id: mongoose.Types.ObjectId(id) });
    if (getResume) {
        const obj = {
            fname: getResume.fname,
            lname: getResume.lname,
            phoneNo: getResume.phoneNo,
            email: getResume.email,
            rollNo: getResume.rollNo,
            linksRef: getResume.links,
            educationRef: getResume.education,
            workexRef: getResume.workex,
            projectsRef: getResume.projects,
            achievementsRef: getResume.achievements,
            skillsRef: getResume.skills,
            porRef: getResume.por
        };
        res.json(obj);
    } else {
        res.json("No data found!");
    }
});

router.get('/offletter/:id', async (req, res) => {
    const id = req.params.id;
    const getOfferLetter = await OfferLetter.findOne({ _id: mongoose.Types.ObjectId(id) });
    if (getOfferLetter) {
        const obj = {
            candidateDetails: getOfferLetter.candidateDetails,
            companyDetails: getOfferLetter.companyDetails,
            jobDetails: getOfferLetter.jobDetails,
            deadline: getOfferLetter.deadline,
            personalDetails: getOfferLetter.personalDetails,
            dateToday: getOfferLetter.dateToday,
            date: getOfferLetter.date
        };
        res.json(obj);
    } else {
        res.json('No data found!');
    }
});

router.get('/jobapplication/:id', async(req, res)=>{
    const id=req.params.id;
    const getJobApply=await JobApplication.findOne({_id:mongoose.Types.ObjectId(id)});
    if(getJobApply){
        const obj={
            candidateDetails:getJobApply.candidateDetails,
            jobDetails: getJobApply.jobDetails,
            skills:getJobApply.skills,
            keyAspects:getJobApply.keyAspects,
            availableFrom:getJobApply.availableFrom,
            dateToday:getJobApply.dateToday,
            date:getJobApply.date
        };
        res.json(obj);
    } else {
        res.json('No data found!');
    }
})
module.exports = router;