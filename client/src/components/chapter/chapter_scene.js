import React, {Component, Fragment} from 'react';
import {TableRow, TableCell} from '@material-ui/core';

class ChapterScene extends Component {
    constructor(props) {
        super(props);
    }

    previewContent(content) {
        ['p', 'li', 'ul'].map(tag => {
            while (content.indexOf(`<${tag}></${tag}>`) > -1) {
                content = content.replace(`<${tag}></${tag}>`, '  ');
            }
            while (content.indexOf(`<${tag}>`) > -1) {
                content = content.replace(`<${tag}>`, ' ');
            }
            while (content.indexOf(`</${tag}>`) > -1) {
                content = content.replace(`</${tag}>`, ' ');
            }            
        });
        return content.substring(0, 250);
    }    

    render() {
        const {scene} = this.props;
        return <TableRow>
            <TableCell></TableCell>
            <TableCell colSpan={2}>{scene.description}</TableCell>
            <TableCell colspan={2} dangerouslySetInnerHTML={{__html: this.previewContent(scene.content)}} />
        </TableRow>
    }
}

export default ChapterScene;