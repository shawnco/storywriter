import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {createScene} from './../../actions/scene';
import {TableRow, TableCell, Button, Input} from '@material-ui/core';

class NewScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            position: '',
            chapter: ''
        }
        this.updateState = this.updateState.bind(this);
        this.createScene = this.createScene.bind(this);
    }

    updateState(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    createScene() {
        this.props.createScene({story: this.props.story, ...this.state});
        this.setState({
            description: '',
            position: '',
            chatper: ''
        });
    }

    render() {
        const {description, position, chapter} = this.state;
        return <TableRow>
            <TableCell></TableCell>
            <TableCell>
                <Input
                    type='text'
                    name='description'
                    value={description}
                    onChange={this.updateState}
                />
            </TableCell>
            <TableCell></TableCell>
            <TableCell>
                <Input
                    type='text'
                    name='chapter'
                    value={chapter}
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
                <Button variant='contained' color='primary' onClick={this.createScene}>Create</Button>
            </TableCell>
            <TableCell></TableCell>
        </TableRow>
    }
}

export default connect(null, {createScene})(NewScene);