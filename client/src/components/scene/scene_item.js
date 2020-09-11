import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {updateScene, deleteScene} from './../../actions/scene';

class SceneItem extends Component {
    constructor(props) {
        super(props);
        const {scene} = this.props;
        this.state = {
            id: scene.id,
            description: scene.description,
            content: scene.content,
            story: scene.story,
            position: scene.position,
            chapter: scene.chapter
        };
        this.updateState = this.updateState.bind(this);
        this.updateScene = this.updateScene.bind(this);
        this.deleteScene = this.deleteScene.bind(this);
    }

    updateState(e) {
        this.setState({[e.target.name]:  e.target.value});
    }

    updateScene() {
        const {id, ...rest} = this.state;
        this.props.updateScene(id, rest);
    }

    deleteScene() {
        if (window.confirm('Are you sure you want to delete the scene?')) {
            this.props.deleteScene(this.state.id);
        } else {
            return false;
        }
    }

    previewContent(content) {
        while (content.indexOf('<p></p>') > -1) {
            content = content.replace('<p></p>', '  ');
        }
        while (content.indexOf('<p>') > -1) {
            content = content.replace('<p>', '');
        }
        while (content.indexOf('</p>') > -1) {
            content = content.replace('</p>', '');
        }
        return content.substring(0, 250);
    }

    render() {
        const {id, description, content, position, chapter} = this.state;
        return <tr>
            <td>
                <Link to={`/scene/${id}`}>{id}</Link>
            </td>
            <td>
                <input
                    type='text'
                    name='description'
                    value={description}
                    onChange={this.updateState}
                />
            </td>
            <td>
                {this.previewContent(content)}
            </td>
            <td>
                <input
                    type='text'
                    name='chapter'
                    value={chapter}
                    onChange={this.updateState}
                />
            </td>
            <td>
                <input
                    type='text'
                    name='position'
                    value={position}
                    onChange={this.updateState}
                />
            </td>
            <td>
                <button onClick={this.updateScene}>Update</button>
            </td>
            <td>
                <button onClick={this.deleteScene}>Delete</button>
            </td>
        </tr>
    }
}

export default connect(null, {
    updateScene,
    deleteScene
})(SceneItem);