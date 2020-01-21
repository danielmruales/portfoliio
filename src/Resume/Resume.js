import React from 'react';
import Navbar from '../Navbar/Navbar'
// import resumePic from '../DanielResume.pdf'
import resume from '../DanielRualesResume2.png'
import './Resume.css'


const Resume = () => {
    return (
        <div>
            <Navbar/>
            <div className='mainResumeDiv'>
            {/* <h1 className='view'>View My Resume Below</h1> */}
                {/* <embed src={resumePic} type="application/pdf" className='resume'/> */}
                <img src={resume} alt='resume' className='resume'/> 
            </div>
        </div>
    );
};

export default Resume;