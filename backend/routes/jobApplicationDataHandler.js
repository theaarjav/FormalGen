const express = require('express');
const  mongoose  = require('mongoose');
const router = express.Router();
const JobApplication = require('../models/jobApplicationSchema');
const passport = require('../passport');

router.post('/', async (req, res) => {
    // console.log(req.body);
    const loggedIn = await passport.getUserEmail();
    console.log(loggedIn);
    const { id, candidateDetails, jobDetails, keyAspects, availableFrom, dateToday,date } = req.body;
    const obj = {
        loggedIn: loggedIn,
        candidateDetails: candidateDetails,
        jobDetails: jobDetails,
        keyAspects: keyAspects,
        availableFrom: availableFrom,
        dateToday: dateToday,
        date:date
    };
    // console.log
    if (!id) {
        console.log("Rntered post", obj)
      const jobApplication = new JobApplication({loggedIn,candidateDetails, jobDetails, keyAspects, availableFrom, dateToday,date}); //  new JobApplication(obj);
      await jobApplication.save()
      if (jobApplication) {
        console.log(`Data posted with mongoose id = ${jobApplication._id}`);
      }
    }
    else {
        const jobApplication = await JobApplication.updateOne({ _id: mongoose.Types.ObjectId(id) }, obj);
        if (jobApplication) {
            console.log(`Offer Letter updated with mongoose id = ${id}`);
        }
    }
});

router.get('/history', async (req, res) => {
    const loggedIn = await passport.getUserEmail();
    await JobApplication.find({ loggedIn: loggedIn }).then((data) => {
        res.json(data);
    })
        .catch((error) => {
            console.log(error);
        });
});

module.exports = router;