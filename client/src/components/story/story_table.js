import React, {Component, Fragment} from 'react';
import StoryItem from './story_item';
import NewStory from './new_story';

class StoryTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {stories, series} = this.props;
        return <Fragment>
            <h2>Story List</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {stories.map(s => <StoryItem key={s.id} story={s} />)}
                    <NewStory series={series} />
                </tbody>
            </table>
        </Fragment>
    }
}

export default StoryTable;