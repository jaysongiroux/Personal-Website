import React, {Component} from "react";

class Greeting extends Component{
    constructor(props) {
        super(props);

        this.state = {
            loaded: ""
        }
    }

    componentDidMount() {
        this.setState((state) => ({ ...state, loaded: "loaded"}));
    }

    render(){
        if(this.state.loaded === 'loaded'){
            return (
                <div className={'greeting'}>
                    <div className={this.state.loaded ? "hello helloLoaded" : "hello"}>
                        Hi! My Name is
                    </div>
                    <div className={this.state.loaded ? "name nameLoaded" : "name"}>
                        Jason Giroux.
                    </div>
                    <div className={this.state.loaded ? "desc descLoaded" : "desc"}>
                        I code things for people to use.
                    </div>
                    <div className={this.state.loaded ? "small-desc small-descLoaded" : "small-desc"}>
                        I'm a Rhode Island based software engineer who specializes in building exceptional digital experiences.
                        I currently work at <a href="https://www.ainfosec.com/">Assured Information Security</a> as a Computer Engineer E1 on the Computer Architecture team along with being on various research and devlopment teams. Motivated by making a difference and driven by growing as an engineer!
                    </div>
                    <br />
                    <div className={this.state.loaded ? "inTouch inTouchLoaded" : "inTouch"}>
                        Get In Touch!
                    </div>
                </div>
            );
        } else {
            return null
        }

    }
}

export default Greeting;