import React from "react";
import GithubSVG from './githubSVG'
import LinkedinSVG from './LinkedinSVG'
import EmailSVG from "./EmailSVG";

function sideLinks() {
    return (
        <div className="sideLinks">
            <ul>
                <li className="github icon">
                    <GithubSVG />
                </li>
                <li className={'linkedin icon'}>
                    <LinkedinSVG />
                </li>
                <li className={'email'}>
                    <EmailSVG/>
                </li>
                <div className={'vertBar'} />
            </ul>
        </div>
    );
}

export default sideLinks;