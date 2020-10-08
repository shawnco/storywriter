import React, {Component, Fragment} from 'react';
import ChapterItem from './chapter_item';
import NewChapter from './new_chapter';
import {Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core';

class ChapterTable extends Component {
    constructor(props) {
        super(props);
    }

    sortChapters(chapters) {
        return chapters.sort((a, b) => {
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
        const {chapters, scenes, story} = this.props;
        return <Fragment>
            <h2>Chapter List</h2>
            <Table border={1}>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Position</TableCell>
                        <TableCell>Update</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.sortChapters(chapters).map(s => <ChapterItem key={s.id} chapter={s} scenes={scenes} />)}
                    <NewChapter story={story} />
                </TableBody>
            </Table>
        </Fragment>
    }
}

export default ChapterTable;