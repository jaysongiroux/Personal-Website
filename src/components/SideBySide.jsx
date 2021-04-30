import React, {Component} from "react"
import LanguageTag from './languageTag'

export default class SideBySide extends Component {
    constructor(props){
        super(props);
    }

    createParagraphs(){
        let para = this.props.info.map((item,index) =>
            <p key={index}>{item}</p>
        )
        return para
    }

    createTechnologies(){
        let techs = this.props.technologies.map((item,index) =>
            <p key={index}>{item}</p>
        )
        return techs
    }

    render() {
        return (
            <div className={'threeTileContainer container'}>
                <div className={'row'}>
                    <div className={'col leftside'}>
                        <img className={'aboutPicture'} alt={''} src={this.props.picture} />
                        {this.props.technologies &&
                        <   LanguageTag languages={this.props.technologies} />
                        }
                    </div>
                    <div className={'col'}>
                        {this.createParagraphs()}
                    </div>
                </div>

                <div className={'row updatedTexted'}>
                    <p>
                        Last Updated:    {this.props.updated}
                    </p>
                </div>
            </div>
        )
    }
}