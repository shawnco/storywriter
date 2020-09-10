import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {updateScene} from './../../actions/scene';
import {Editor} from 'primereact/editor';
import _ from 'lodash';

class Scene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: _.get(this.props, 'match.params.id'),
            content: '',
            description: '',
            position: '',
            chapter: ''
        };
        this.saveContent = this.saveContent.bind(this);
        this.updateContent = this.updateContent.bind(this);
    }

    componentDidMount() {
        const scenes = _.get(this.props, 'story.scenes', []);
        const scene = _.find(scenes, s => s.id == this.state.id);
        if (scene) {
            this.setState({ ...scene });
        }
    }

    saveContent(e) {
        const {id, ...rest} = this.state;
        this.props.updateScene(id, rest);
    }

    updateContent(e) {
        this.setState({content: e.htmlValue});
    }

    render() {
        const {description, content} = this.state;
        return <Fragment>
            <h2>Editing Scene: {description}</h2>
            <Editor
                style={{height: '75vh', width: '75vh'}}
                value={content}
                onTextChange={this.updateContent}
            />
            <button onClick={this.saveContent}>Save</button>
        </Fragment>
    }
}

const mapStateToProps = ({story}) => {
    return {
        story: story.story
    };
}

export default connect(mapStateToProps, {updateScene})(Scene);