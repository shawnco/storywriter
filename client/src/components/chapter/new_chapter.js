import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {createChapter} from './../../actions/chapter';

class NewChapter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            title: '',
            position: ''
        }
        this.updateState = this.updateState.bind(this);
        this.createChapter = this.createChapter.bind(this);
    }

    updateState(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    createChapter() {
        this.props.createChapter({story: this.props.story, ...this.state});
        this.setState({
            description: '',
            title: '',
            position: ''
        });
    }

    render() {
        const {title, description, position} = this.state;
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
                <input
                    type='text'
                    name='description'
                    value={description}
                    onChange={this.updateState}
                />
            </td>
            <td>
                <input
                    type='text'
                    name='position'
                    value={position}
                    onChange={this.updateState}
                />
            </td>
            <td>
                <button onClick={this.createChapter}>Create</button>
            </td>
            <td></td>
        </tr>
    }
}

export default connect(null, {createChapter})(NewChapter);