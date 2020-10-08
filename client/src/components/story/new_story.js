import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {createStory} from './../../actions/story';
import {TableRow, TableCell, Button, Input, TextField} from '@material-ui/core';

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
                <Button variant='contained' color='primary' onClick={this.createStory}>Create</Button>
            </TableCell>
            <TableCell></TableCell>
        </TableRow>
    }
}

export default connect(null, {createStory})(NewStory);