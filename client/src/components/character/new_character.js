import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {createCharacter} from './../../actions/character';

class NewCharacter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: ''
        }
        this.updateState = this.updateState.bind(this);
        this.createCharacter = this.createCharacter.bind(this);
    }

    updateState(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    createCharacter() {
        const {story, series} = this.props;
        this.props.createCharacter({story, series, ...this.state});
        this.setState({
            name: '',
            description: ''
        });
    }

    render() {
        const {description, name} = this.state;
        return <tr>
            <td></td>
            <td>
                <input
                    type='text'
                    name='name'
                    value={name}
                    onChange={this.updateState}
                />
            </td>
            <td></td>
            <td>
                <button onClick={this.createCharacter}>Create</button>
            </td>
            <td></td>
        </tr>
    }
}

export default connect(null, {createCharacter})(NewCharacter);