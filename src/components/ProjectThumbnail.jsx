import React, {Component} from "react"
import GithubSVG from "./githubSVG";
import LinkedinSVG from "./LinkedinSVG";
import LanguageTag from './languageTag'

export default class ProjectThumbnail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: ""
        }
    }

    componentDidMount() {
        this.setState((state) => ({ ...state, loaded: "loaded"}));
    }

    render() {
        return (
            <div className={this.state.loaded ? 'projectThumbnailContainer projectThumbnailContainerLoaded': "projectThumbnailContainer"}>
                <h6 className={'thumbnailTitle'}>
                    <div className={'number'}>{this.props.number}</div>
                    {this.props.title}
                </h6>

                <img alt={''} className='thumbnailImage' src={this.props.image} />
                <div className={'languageContainers'}>
                    <LanguageTag languages={this.props.languages} />
                </div>

                <div className={'thumbnailBio'}>
                    {this.props.bio}
                </div>

                <ul className={'thumbnailListContainer'}>
                    {this.props.githubUrl &&
                        <li>
                            <div className={'icon thumbnailIcon'}>
                                <GithubSVG link={this.props.githubUrl}/>
                            </div>
                        </li>
                    }
                    {this.props.linkedinUrl &&
                        <li>
                            <div className={'icon thumbnailIcon'}>
                                <LinkedinSVG link={this.props.linkedinUrl}/>
                            </div>
                        </li>
                    }

                </ul>
            </div>
        )
    }
}