import React from "react";

function Footer() {
    return (
        <div className="footer">
            <footer className="py-5 bg-dark fixed-bottom">
                <div className="container">
                    <p className="m-0 text-center text-white">
                        Copyright &copy;  <a href={window.location.host}>{window.location.host}</a>
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;