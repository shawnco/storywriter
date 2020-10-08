import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {createCharacter} from './../../actions/character';
import {TableRow, TableCell, Button, Input} from '@material-ui/core';

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
                <Button variant='contained' color='primary' onClick={this.createCharacter}>Create</Button>
            </TableCell>
            <TableCell></TableCell>
        </TableRow>
    }
}

export default connect(null, {createCharacter})(NewCharacter);