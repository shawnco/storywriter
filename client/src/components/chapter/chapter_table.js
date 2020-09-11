import React, {Component, Fragment} from 'react';
import ChapterItem from './chapter_item';
import NewChapter from './new_chapter';

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
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Position</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.sortChapters(chapters).map(s => <ChapterItem key={s.id} chapter={s} scenes={scenes} />)}
                    <NewChapter story={story} />
                </tbody>
            </table>
        </Fragment>
    }
}

export default ChapterTable;