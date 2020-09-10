import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {getStory} from './../../actions/story';
import _ from 'lodash';
import SceneTable from './../scene/scene_table';

class Story extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const id = _.get(this.props, 'match.params.id');
        if (id) {
            this.props.getStory(id);
        }
    }

    render() {
        const {story} = this.props;
        return <Fragment>
            <h2>{_.get(story, 'story.title', '')}</h2>
            <div>{_.get(story, 'story.description', '')}</div>
            <SceneTable story={_.get(story, 'story.id')} scenes={_.get(story, 'scenes', [])} />
        </Fragment>
    }
}

const mapStateToProps = ({story}) => {
    return {
        story: story.story
    };
}

export default connect(mapStateToProps, {getStory})(Story);