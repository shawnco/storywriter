import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {createStory} from './../../actions/story';

class NewStory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }
        this.updateState = this.updateState.bind(this);
        this.createStory = this.createStory.bind(this);
    }

    updateState(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    createStory() {
        this.props.createStory({series: this.props.series, ...this.state});
        this.setState({
            title: '',
            description: ''
        });
    }

    render() {
        const {title, description} = this.state;
        return <tr>
            <td></td>
            <td>
                <input
                    type='text'
                    name='title'
                    value={title}
                    onChange={this.updateState}
                />
            </td>
            <td>
                <textarea
                    name='description'
                    value={description}
                    onChange={this.updateState}
                />
            </td>
            <td>
                <button onClick={this.createStory}>Create</button>
            </td>
            <td></td>
        </tr>
    }
}

export default connect(null, {createStory})(NewStory);