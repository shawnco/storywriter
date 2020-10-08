import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {createSeries} from './../../actions/series';
import {TableRow, TableCell, Button, Input, TextField} from '@material-ui/core';

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
        return <TableRow>
            <TableCell></TableCell>
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
                <Button variant='contained' color='primary' onClick={this.createSeries}>Create</Button>
            </TableCell>
            <TableCell></TableCell>
        </TableRow>
    }
}

export default connect(null, {createSeries})(NewSeries);