import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home'
import Features from './components/Features/Features'
import Profile from './components/Profile/Profile';
import Resume from './components/Forms/Resume/Resume';
import Resume1 from './components/Templates/Resume/Resume1';
import Resume2 from './components/Templates/Resume/Resume2';
import OfferLetter from './components/Forms/Offer Letter/OfferLetter';
import Application from './components/Forms//Application Letter/Application'
import Application1 from './components/Templates/Job Application/JobApplication'
import OfferLetter1 from './components/Templates/Offer Letter/OfferLetter1';
import { SelectTemplate } from './components/Forms/Resume/SelectTemplate';
function App() {
  const [user, setuser] = useState(null);
  const [resume, setResume] = useState(null)
  const [offletter, setOffletter] = useState(null)
  const [jobApply, setjobApply] = useState(null)
  const getuser = async () => {
    try {
      const url = 'http://localhost:5000/auth/login/success';
      const data = await axios.get(url, { withCredentials: true });
      // console.log(data)
      // await fetch(url, {withCredentials:true}).then((data)=>{
      //   setuser(data.user._json)
      // })

      setuser(data.data.user._json)
      console.log(user)
      // try {
        
      //   const resume=await axios.get('/resume/history', {withCredentials:true})
      //     setResume(resume.data)
      // } catch (error) {
      //   console.log(error)
      // }
      // try {
      //   const ol=await axios.get('/offletter/history')
      //   setOffletter(ol.data)
        
      // } catch (error) {
      //   console.log(error)
      // }
      // try {
      //   const ja=await axios.get('/jobapplication/history')
      //   setjobApply(ja)
      // } catch (error) {
      //   console.log(error)
      // }
      console.log("user",user)
    } catch (err) {
      // await axios.get('https://formalgen-backend.onrender.com/auth/login/failure').then(
      //   (res)=>{
      //     console.log("Inside failure",res)
      //   }
      // )
      console.log(err)
    }
  }

  useEffect(() => {
    getuser();

  }, [])

  return (
    <>
      <BrowserRouter>
        {window.location.href !== "https://formalgen.netlify.app/login" && (
          <Navbar user={user} />
        )}
        <Routes>
          <Route exact path='/login' element={!user ? <Login /> : <Navigate to="/" />}></Route>
          <Route exact path='/' element={
            <div>
              <Home/>
              <Features/>
            </div>
          }></Route>
          <Route exact path='/profile' element={
            user?
            (
              <Profile
              resume={resume}
              offerLetter={offletter}
              jobApply={jobApply}
              email={user.email}
              setResume={setResume}
              setOffletter={setOffletter}
              setjobApply={setjobApply}
              />
            ):(
              <Navigate to='/login'/>
            )
          }></Route>
           <Route
          exact
          path="/edit/resume/:id"
          element={user ? <Resume /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/resume/details"
          element={user ? <Resume /> : <Navigate to="/login" />}
        />
        <Route
        exact
        path='/resume/templates'
        element={user?<SelectTemplate/>:<Navigate to='/login'/>}>

        </Route>
        <Route
          exact
          path="/resume/templates/1"
          element={user ? <Resume1 /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/resume/templates/2"
          element={user ? <Resume2 /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/edit/offletter/:id"
          element={user ? <OfferLetter /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/offer_letter/details"
          element={user ? <OfferLetter /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/offer_letter/templates/1"
          element={user ? <OfferLetter1 /> : <Navigate to="/login" />}
        />
        <Route exact
        path='/edit/jobapplication/:id'
        element={user ? <Application /> : <Navigate to="/login"/>}
        />
        <Route exact
        path='/job_application/details'
        element={user ? <Application /> : <Navigate to="/login"/>}
        />
        <Route exact
        path='/job_application/templates'
        // element={user? <Application1/>: <Navigate to='/login'/>}
        element={user?<Application1/>:<Navigate to='/login'/>}
        />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
