import React, {Component, Fragment} from 'react';
import StoryItem from './story_item';
import NewStory from './new_story';
import {Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core';

class StoryTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {stories, series} = this.props;
        return <Fragment>
            <h2>Story List</h2>
            <Table border={1}>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Update</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {stories.map(s => <StoryItem key={s.id} story={s} />)}
                    <NewStory series={series} />
                </TableBody>
            </Table>
        </Fragment>
    }
}

export default StoryTable;