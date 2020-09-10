import React, {Component, Fragment} from 'react';
import _ from 'lodash';

class PreviewScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: -1
        };
        this.updateState = this.updateState.bind(this);
    }

    updateState(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const {selected} = this.state;
        const {scenes} = this.props;
        console.log('WAIT',scenes)
        if (scenes.length == 1) {
            return <span dangerouslySetInnerHTML={{__html: scenes[0].content}} />
        } else {
            const find = _.find(scenes, s => s.id == selected);
            return <span>
                <select name='selected' value={selected} onChange={this.updateState}>
                    <option value={-1}></option>
                    {scenes.map(scene => <option key={scene.id} value={scene.id}>{scene.description}</option>)}
                </select><br />
                {find ? <span dangerouslySetInnerHTML={{__html: find.content}} /> : null}
            </span>
        }
    }
}

export default PreviewScene;