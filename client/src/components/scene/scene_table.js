import React, {Component, Fragment} from 'react';
import SceneItem from './scene_item';
import NewScene from './new_scene';
import {Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core';

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
            <Table border={1}>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Content (preview)</TableCell>
                        <TableCell>Chapter</TableCell>
                        <TableCell>Position</TableCell>
                        <TableCell>Update</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.sortScenes(scenes).map(s => <SceneItem key={s.id} scene={s} />)}
                    <NewScene story={story} />
                </TableBody>
            </Table>
        </Fragment>
    }
}

export default SceneTable;