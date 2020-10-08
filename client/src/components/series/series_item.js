import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {updateSeries, deleteSeries} from './../../actions/series';
import {TableRow, TableCell, Button, Input, TextField} from '@material-ui/core';

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
        return <TableRow>
            <TableCell>
                <Link to={`/series/${id}`}>{id}</Link>
            </TableCell>
            <TableCell>
                <Input
                    type='text'
                    name='title'
                    value={title}
                    onChange={this.updateState}
                />
            </TableCell>
            <TableCell>
                <TextField
                    multiline
                    name='description'
                    value={description}
                    onChange={this.updateState}
                />
            </TableCell>
            <TableCell>
                <Button variant='contained' color='primary' onClick={this.updateSeries}>Update</Button>
            </TableCell>
            <TableCell>
                <Button variant='contained' color='secondary' onClick={this.deleteSeries}>Delete</Button>
            </TableCell>
        </TableRow>
    }
}

export default connect(null, {
    updateSeries,
    deleteSeries
})(SeriesItem);