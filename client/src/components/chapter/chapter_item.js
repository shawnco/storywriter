import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {updateChapter, deleteChapter} from './../../actions/chapter';
import ChapterScene from './chapter_scene';

class ChapterItem extends Component {
    constructor(props) {
        super(props);
        const {chapter} = this.props;
        this.state = {
            id: chapter.id,
            description: chapter.description,
            title: chapter.title,
            story: chapter.story,
            position: chapter.position
        };
        this.updateState = this.updateState.bind(this);
        this.updateChapter = this.updateChapter.bind(this);
        this.deleteChapter = this.deleteChapter.bind(this);
    }

    updateState(e) {
        this.setState({[e.target.name]:  e.target.value});
    }

    updateChapter() {
        const {id, ...rest} = this.state;
        this.props.updateChapter(id, rest);
    }

    deleteChapter() {
        if (window.confirm('Are you sure you want to delete the chapter?')) {
            this.props.deleteChapter(this.state.id);
        } else {
            return false;
        }
    }

    getChapterScenes(id, scene) {
        return scene.filter(a => a.chapter == id).sort((a, b) => {
            if (a.position < b.position) {
                return -1;
            } else if (a.position > b.position) {
                return 1;
            } else {
                return 0;
            }
        });
    }

    render() {
        const {id, description, title, position} = this.state;
        const {scenes} = this.props;
        return <Fragment>
            <tr>
                <td>
                    {id}
                </td>
                <td>
                    <input
                        type='text'
                        name='title'
                        value={title}
                        onChange={this.updateState}
                    />
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
                    <input
                        type='text'
                        name='position'
                        value={position}
                        onChange={this.updateState}
                    />
                </td>
                <td>
                    <button onClick={this.updateChapter}>Update</button>
                </td>
                <td>
                    <button onClick={this.deleteChapter}>Delete</button>
                </td>
            </tr>
            {this.getChapterScenes(id, scenes).map(scene => <ChapterScene scene={scene} />)}
        </Fragment>
    }
}

export default connect(null, {
    updateChapter,
    deleteChapter
})(ChapterItem);