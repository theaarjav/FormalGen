const mongoose = require('mongoose');

const jobApplySchema = new mongoose.Schema (
    {
        loggedIn: {
            type: String
        },
        candidateDetails: {
            fname: {
                type: String
            },
            lname: {
                type: String
            },
            currCompanyName:{
                type: String
            },
            currDesignation:{
                type:String
            },
            email:{
                
            }
        },
        
        
        jobDetails: {
            jobPostingOn:{
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
            }
        },
        skills:[
            {
                type:String
            }
        ],
        keyAspects:[
            {
                where:{
                    type:String
                },
                situation:{
                    type:String
                },
                task:{
                    type:String
                },
                outcome:{
                    type:String
                }
            }
        ],
        availableFrom:{
            type:String
        },
        dateToday: {
            dateToday: {
                type: String
            }
        },
        date:{
            type:String
        }
    }
);
const JobApplication=mongoose.model('jobApplication', jobApplySchema)
module.exports = JobApplication;