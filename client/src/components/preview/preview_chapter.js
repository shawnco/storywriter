import React, {Component, Fragment} from 'react';
import PreviewScene from './preview_scene';
import {Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core';

class PreviewChapter extends Component {
    constructor(props) {
        super(props);
    }

    getChapterScenes(chapter, scenes) {
        return scenes.filter(a => a.chapter == chapter.id).reduce((acc, current) => {
            (acc[current.position] || (acc[current.position] = [])).push(current);
            return acc;
        }, []);
    }

    render() {
        const {chapter, scenes} = this.props;
        return <Fragment>
            <hr />
            <h3>{chapter.title}</h3>
            {this.getChapterScenes(chapter, scenes).map(s => <PreviewScene scenes={s} />)}
        </Fragment>
    }
}

export default PreviewChapter;