import React from "react";
import Greeting from './Greeting'
import ProjectThumbnail from './ProjectThumbnail'
import ThreeTileContainer from './ThreeTileContainer'
import GetInTouch from "./GetInTouch";

function Home() {
    return (
        <div className="home">
            <Greeting />
            <div className={'container'}>
                <h1 className={'featureProjects'}>Featured Projects</h1>
            </div>

            <ThreeTileContainer
                title={'Feature Projects'}
                elementOne={<ProjectThumbnail
                    number={'00. '}
                    title={'Move Mouse'}
                    bio={'Move Mouse uses the Azure Kinect Camera and Microsoft body tracking library to recognize hand positions and control the computer\'s mouse movement and buttons. The right hand controls the mouse\'s movements while the left hand controls clicking, dragging, and right clicking. If you click the Linkedin Button below, you can see a demonstration video.'}
                    image={'./bluebody.jpeg'}
                    githubUrl={'https://github.com/jaysongiroux/MoveMouse'}
                    linkedinUrl={'https://www.linkedin.com/feed/update/urn:li:activity:6671834721229537280/'}
                    languages={['C++ / QT5', 'Make/QMake','Kinect']}
                />}
                elementTwo={<ProjectThumbnail
                    number={'01. '}
                    title={'Sakai Google Integration'}
                    bio={'Roger Williams University utilizes Sakai\'s platform to manage student\'s grades, assignments and out-of-classroom communication. Using Sakai\'s REST API I was able to integrate Sakai\'s assignment, calendar, and announcment features into google calendar\'s API. This Python script is able to detect duplicates, create new reminders, and enter assignments into google calendar'}
                    image={'./google_cal.gif'}
                    githubUrl={'https://github.com/jaysongiroux/Sakai-Google-integration'}
                    languages={['Python']}
                />}
                elementThree={<ProjectThumbnail
                    number={'02. '}
                    title={'Personal Portfolio'}
                    bio={'This is ironic, This website IS the project! Using React, babel, webpack, and jest. I will be uploading new projects, demos and information as the site gets developed!'}
                    image={'./react.png'}
                    githubUrl={'https://github.com/jaysongiroux/Personal-Website'}
                    languages={['React', 'Webpack', 'Jest']}
                />}
            />
            <GetInTouch />
        </div>
    );
}

export default Home;