import React, {Component, Fragment} from 'react';

class ChapterScene extends Component {
    constructor(props) {
        super(props);
    }

    previewContent(content) {
        while (content.indexOf('<p></p>') > -1) {
            content = content.replace('<p></p>', '  ');
        }
        while (content.indexOf('<p>') > -1) {
            content = content.replace('<p>', '');
        }
        while (content.indexOf('</p>') > -1) {
            content = content.replace('</p>', '');
        }
        return content.substring(0, 250);
    }    

    render() {
        const {scene} = this.props;
        return <tr>
            <td></td>
            <td colspan={2}>{scene.description}</td>
            <td colspan={2} dangerouslySetInnerHTML={{__html: this.previewContent(scene.content)}} />
        </tr>
    }
}

export default ChapterScene;