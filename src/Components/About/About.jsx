import React from "react";
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'


const About = () => {
    return (
        <div className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt=""/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a software developer with over two years of experience, contributing to the success and growth of various projects. My diverse skill set allows me to adapt to different needs, ensuring effective solutions and strong collaboration with my team.</p>
                        <p>I am passionate about development and approach each project with enthusiasm. My goal is to create impactful user experiences while continuously improving my skills.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>React</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>.Net</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>C++</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>React</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}}/></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>2</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>2</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>2</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>                
            </div>
        </div>
    )
}

export default About