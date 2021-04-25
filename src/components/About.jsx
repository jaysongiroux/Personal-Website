import React from "react";
import SideBySide from "./SideBySide"

function About() {
    return (
        <div className="about">
            <div className="container">
                <SideBySide
                    left={"I WILL PUT MY BIO HERE"}
                    right={'./selfPicture.png'}
                    />
            </div>
        </div>
    );
}

export default About;