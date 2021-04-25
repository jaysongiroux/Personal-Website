import React, {Component} from "react"

export default class SideBySide extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className={'threeTileContainer container'}>
                <div className={'row'}>
                    <div className={'col'}>
                        {this.props.left}
                    </div>
                    <div className={'col'}>
                        {this.props.right}
                    </div>
                </div>
            </div>
        )
    }
}