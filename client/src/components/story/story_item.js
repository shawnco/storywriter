import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {updateStory, deleteStory} from './../../actions/story';
import {TableRow, TableCell, Button, Input, TextField} from '@material-ui/core';

class StoryItem extends Component {
    constructor(props) {
        super(props);
        const {story} = this.props;
        this.state = {
            id: story.id,
            title: story.title,
            description: story.description
        };
        this.updateState = this.updateState.bind(this);
        this.updateStory = this.updateStory.bind(this);
        this.deleteStory = this.deleteStory.bind(this);
    }

    updateState(e) {
        this.setState({[e.target.name]:  e.target.value});
    }

    updateStory() {
        const {id, ...rest} = this.state;
        this.props.updateStory(id, rest);
    }

    deleteStory() {
        if (window.confirm('Are you sure you want to delete the story?')) {
            this.props.deleteStory(this.state.id);
        } else {
            return false;
        }
    }

    render() {
        const {id, title, description} = this.state;
        return <TableRow>
            <TableCell>
                <Link to={`/story/${id}`}>{id}</Link>
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
                <Button variant='contained' color='primary' onClick={this.updateStory}>Update</Button>
            </TableCell>
            <TableCell>
                <Button variant='contained' color='secondary' onClick={this.deleteStory}>Delete</Button>
            </TableCell>
        </TableRow>
    }
}

export default connect(null, {
    updateStory,
    deleteStory
})(StoryItem);