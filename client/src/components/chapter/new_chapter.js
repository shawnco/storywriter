import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {createChapter} from './../../actions/chapter';
import {TableRow, TableCell, Button, Input} from '@material-ui/core';

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
                <Input
                    type='text'
                    name='description'
                    value={description}
                    onChange={this.updateState}
                />
            </TableCell>
            <TableCell>
                <Input
                    type='text'
                    name='position'
                    value={position}
                    onChange={this.updateState}
                />
            </TableCell>
            <TableCell>
                <Button variant='contained' color='primary' onClick={this.createChapter}>Create</Button>
            </TableCell>
            <TableCell></TableCell>
        </TableRow>
    }
}

export default connect(null, {createChapter})(NewChapter);