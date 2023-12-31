require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
require('./passport');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const authRoute = require('./routes/auth');
const resumeRoute = require('./routes/resumeDataHandler');
const offerLetterRoute = require('./routes/offerLetterDataHandler');
const jobapplication=require('./routes/jobApplicationDataHandler')
const getRoutes = require("./routes/getRoutes");
const port = 5000 || process.env.PORT;
const connectDB = require('./config/db');
connectDB()

app.use(
    cookieSession({
        name:'FormalGenSession',
        keys:[`${process.env.genKey}`],
        maxAge:24*60*60*1000
    })
)

app.use(passport.initialize())
app.use(passport.session())

app.use(cors({
    origin:'http://localhost:3000',
    methods:'GET,PUT,POST,DELETE',
    credentials:true
}))

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())


app.use('/auth', authRoute)
// app.use('https://formalgen-backend.onrender.com/auth/google/callback', authRoute)
app.use('/resume', resumeRoute)
app.use('/offletter', offerLetterRoute)
app.use('/jobapplication', jobapplication)
app.use('/edit', getRoutes)

app.listen(port, ()=>{
    console.log(`App Listening at port ${port}`)
})