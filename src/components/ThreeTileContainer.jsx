import React, {Component} from "react"

export default class ThreeTileContainer extends Component {
    render() {
        return (
            <div className={'threeTileContainer container'}>
                <div className={'row'}>
                    <div className={'col'}>
                        {this.props.elementOne}
                    </div>
                    <div className={'col'}>
                        {this.props.elementTwo}
                    </div>
                    <div className={'col'}>
                        {this.props.elementThree}
                    </div>
                </div>
            </div>
        )
    }
}