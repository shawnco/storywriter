import React, {Component, Fragment} from 'react';
import SceneItem from './scene_item';
import NewScene from './new_scene';

class SceneTable extends Component {
    constructor(props) {
        super(props);
    }

    sortScenes(scenes) {
        return scenes.sort((a, b) => {
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
        const {scenes, story} = this.props;
        return <Fragment>
            <h2>Scene List</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Content (preview)</th>
                        <th>Position</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.sortScenes(scenes).map(s => <SceneItem key={s.id} scene={s} />)}
                    <NewScene story={story} />
                </tbody>
            </table>
        </Fragment>
    }
}

export default SceneTable;