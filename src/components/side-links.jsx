import React from "react";
import GithubSVG from './githubSVG'
import LinkedinSVG from './LinkedinSVG'
import EmailSVG from "./EmailSVG";

function sideLinks() {
    return (
        <div className="sideLinks">
            <ul>
                <li className="github icon">
                    <GithubSVG
                    link={'https://github.com/jaysongiroux'}/>
                </li>
                <li className={'linkedin icon'}>
                    <LinkedinSVG
                    link={'https://www.linkedin.com/in/jasongiroux/'}/>
                </li>
                <li className={'email'}>
                    <EmailSVG
                    link={'mailto:jaysongiroux@gmail.com'}/>
                </li>
                <div className={'vertBar'} />
            </ul>
        </div>
    );
}

export default sideLinks;