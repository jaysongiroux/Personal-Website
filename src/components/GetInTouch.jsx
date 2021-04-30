import React, {Component} from "react"

export default class GetInTouch extends Component {
    render() {
        const style = {
            "textDecoration": "none"
        }
        return (
            <div className={'getintouchContainer'}>
                <div className={'intouchsmallbio'}>
                    So, What Do You Think?
                </div>

                <div className={'intouchBigBio'}>
                    Get In Touch
                </div>
                <p className={'longbio'}>
                    I love connecting and networking so lets talk! I am always looking for new opportunities and challenges. My inbox is always open.
                </p>
                <a href={'mailto:jaysongiroux@gmail.com'} style={style}>
                    <div className={'contactmeButton'} >
                        Contact Me
                    </div>
                </a>

            </div>
        )
    }
}