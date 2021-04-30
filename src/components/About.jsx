import React from 'react';
import SideBySide from "./SideBySide"
import {information} from './data-files/information'

function About() {
    const style = {
        "paddingRight":"0"
    }
    return (
        <div className="about">
                <div className="container" style={style}>
                    <SideBySide
                        info={information.bio.paragraphs}
                        picture={information.bio.picture}
                        updated={information.bio.updated}
                        technologies={information.bio.technologies}
                    />
                </div>
        </div>
    );
}

export default About;