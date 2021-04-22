import React, {Component} from "react"

export default class LanguageTag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: this.props.languages
        }
    }

    render() {
        let languages = [];
        if(this.state.languages){
            for(let i = 0; i < this.state.languages.length; i++){
                languages.push(
                    <div className="tagContainer" key={i}>
                        <div className={'tag'} key={i*10}>
                            <div>»</div> {this.state.languages[i]}
                        </div>
                    </div>
                )
            }
        }

        return (
            <div className={'tagcontainerCompartment'}>
                <div className={'tagRow row'}>
                    {languages}
                </div>
            </div>
        )
    }
}