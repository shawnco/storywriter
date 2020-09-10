import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {createScene} from './../../actions/scene';

class NewScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            position: '',
            chapter: ''
        }
        this.updateState = this.updateState.bind(this);
        this.createScene = this.createScene.bind(this);
    }

    updateState(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    createScene() {
        this.props.createScene({story: this.props.story, ...this.state});
        this.setState({
            description: '',
            position: '',
            chatper: ''
        });
    }

    render() {
        const {description, position} = this.state;
        return <tr>
            <td></td>
            <td>
                <input
                    type='text'
                    name='description'
                    value={description}
                    onChange={this.updateState}
                />
            </td>
            <td></td>
            <td>
                <input
                    type='text'
                    name='position'
                    value={position}
                    onChange={this.updateState}
                />
            </td>
            <td>
                <button onClick={this.createScene}>Create</button>
            </td>
            <td></td>
        </tr>
    }
}

export default connect(null, {createScene})(NewScene);