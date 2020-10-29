import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {getStory} from './../../actions/story';
import {getChaptersByStory} from './../../actions/chapter';
import _ from 'lodash';
import PreviewChapter from './preview_chapter';

class Preview extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const id = _.get(this.props, 'match.params.id', '');
        if (id) {
            this.props.getStory(id);
            if (!this.props.chapter) {
                this.props.getChaptersByStory(id);
            }
        }
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
        const {story, chapters} = this.props;
        return <Fragment>
            <h2>{_.get(story, '.title', '')}</h2>
            {this.sortChapters(chapters).map(chapter => <PreviewChapter key={chapter.id} chapter={chapter} scenes={_.get(story, 'scenes', [])} />)}
        </Fragment>
    }
}

const mapStateToProps = ({story, chapter}) => {
    return {
        story: story.story,
        chapters: chapter.chapterList
    };
}

export default connect(mapStateToProps, {getStory})(Preview);