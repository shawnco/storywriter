import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {updateSeries, deleteSeries} from './../../actions/series';

class SeriesItem extends Component {
    constructor(props) {
        super(props);
        const {series} = this.props;
        this.state = {
            id: series.id,
            title: series.title,
            description: series.description
        };
        this.updateState = this.updateState.bind(this);
        this.updateSeries = this.updateSeries.bind(this);
        this.deleteSeries = this.deleteSeries.bind(this);
    }

    updateState(e) {
        this.setState({[e.target.name]:  e.target.value});
    }

    updateSeries() {
        const {id, ...rest} = this.state;
        this.props.updateSeries(id, rest);
    }

    deleteSeries() {
        if (window.confirm('Are you sure you want to delete the series?')) {
            this.props.deleteSeries(this.state.id);
        } else {
            return false;
        }
    }

    render() {
        const {id, title, description} = this.state;
        return <tr>
            <td>
                <Link to={`/series/${id}`}>{id}</Link>
            </td>
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
                <button onClick={this.updateSeries}>Update</button>
            </td>
            <td>
                <button onClick={this.deleteSeries}>Delete</button>
            </td>
        </tr>
    }
}

export default connect(null, {
    updateSeries,
    deleteSeries
})(SeriesItem);