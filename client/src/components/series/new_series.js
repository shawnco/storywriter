import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {createSeries} from './../../actions/series';

class NewSeries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }
        this.updateState = this.updateState.bind(this);
        this.createSeries = this.createSeries.bind(this);
    }

    updateState(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    createSeries() {
        this.props.createSeries(this.state);
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
                <button onClick={this.createSeries}>Create</button>
            </td>
            <td></td>
        </tr>
    }
}

export default connect(null, {createSeries})(NewSeries);