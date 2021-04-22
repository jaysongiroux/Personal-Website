import React from "react";
import GithubSVG from './githubSVG'
import LinkedinSVG from './LinkedinSVG'
import EmailSVG from './EmailSVG'

function Footer() {
    return (
        <div className="footer">
            <footer className="py-5">
                <div className="container">
                    <div className="m-0 text-center text-white">
                        Copyright &copy;  <a href={window.location.host}>{window.location.host}</a>
                        <br />
                        <div className={'socialMediaLinks'}>
                            <GithubSVG link={"https://github.com/jaysongiroux"}/>
                            <LinkedinSVG link={"https://www.linkedin.com/in/jasongiroux/"}/>
                            <EmailSVG/>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;