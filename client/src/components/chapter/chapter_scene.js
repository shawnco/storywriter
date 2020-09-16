import React, {Component, Fragment} from 'react';

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
        return <tr>
            <td></td>
            <td colSpan={2}>{scene.description}</td>
            <td colspan={2} dangerouslySetInnerHTML={{__html: this.previewContent(scene.content)}} />
        </tr>
    }
}

export default ChapterScene;