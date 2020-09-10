import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {getStory} from './../../actions/story';
import _ from 'lodash';
import PreviewScene from './preview_scene';

class Preview extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const id = _.get(this.props, 'match.params.id', '');
        if (id) {
            this.props.getStory(id);
        }
    }

    groupScenes(scenes) {
        const groupedScenes = _.reduce(scenes, (acc, current) => {
            (acc[current.position] || (acc[current.position] = [])).push(current);
            return acc;
        }, [])
        return groupedScenes;
    }

    render() {
        const {story} = this.props;
        const groupedScenes = this.groupScenes(_.get(story, 'scenes', []));
        return <Fragment>
            <h2>{_.get(story, 'story.title', '')}</h2>
            {groupedScenes.map((scenes, idx) => <PreviewScene key={idx} scenes={scenes} />)}
        </Fragment>
    }
}

const mapStateToProps = ({story}) => {
    return {
        story: story.story
    };
}

export default connect(mapStateToProps, {getStory})(Preview);