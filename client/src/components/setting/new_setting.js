import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {createSetting} from './../../actions/setting';
import {TableRow, TableCell, Button, Input} from '@material-ui/core';

class NewSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: ''
        }
        this.updateState = this.updateState.bind(this);
        this.createSetting = this.createSetting.bind(this);
    }

    updateState(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    createSetting() {
        const {story, series} = this.props;
        this.props.createSetting({story, series, ...this.state});
        this.setState({
            name: '',
            description: ''
        });
    }

    render() {
        const {description, name} = this.state;
        return <TableRow>
            <TableCell></TableCell>
            <TableCell>
                <Input
                    type='text'
                    name='name'
                    value={name}
                    onChange={this.updateState}
                />
            </TableCell>
            <TableCell></TableCell>
            <TableCell>
                <Button variant='contained' color='primary' onClick={this.createSetting}>Create</Button>
            </TableCell>
            <TableCell></TableCell>
        </TableRow>
    }
}

export default connect(null, {createSetting})(NewSetting);