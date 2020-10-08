import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {updateCharacter, deleteCharacter} from './../../actions/character';
import {TableRow, TableCell, Button, Input} from '@material-ui/core';

class CharacterItem extends Component {
    constructor(props) {
        super(props);
        const {character} = this.props;
        this.state = {
            id: character.id,
            description: character.description,
            name: character.name,
            story: character.story,
            series: character.series
        };
        this.updateState = this.updateState.bind(this);
        this.updateCharacter = this.updateCharacter.bind(this);
        this.deleteCharacter = this.deleteCharacter.bind(this);
    }

    updateState(e) {
        this.setState({[e.target.name]:  e.target.value});
    }

    updateCharacter() {
        const {id, ...rest} = this.state;
        this.props.updateCharacter(id, rest);
    }

    deleteCharacter() {
        if (window.confirm('Are you sure you want to delete the character?')) {
            this.props.deleteCharacter(this.state.id);
        } else {
            return false;
        }
    }

    previewContent(description) {
        ['p', 'li', 'ul'].map(tag => {
            while (description.indexOf(`<${tag}></${tag}>`) > -1) {
                description = description.replace(`<${tag}></${tag}>`, '  ');
            }
            while (description.indexOf(`<${tag}>`) > -1) {
                description = description.replace(`<${tag}>`, ' ');
            }
            while (description.indexOf(`</${tag}>`) > -1) {
                description = description.replace(`</${tag}>`, ' ');
            }            
        });
        return description.substring(0, 250);
    }

    render() {
        const {id, description, name} = this.state;
        return <TableRow>
            <TableCell>
                <Link to={`/character/${id}`}>{id}</Link>
            </TableCell>
            <TableCell>
                <Input
                    type='text'
                    name='name'
                    value={name}
                    onChange={this.updateState}
                />
            </TableCell>
            <TableCell>
                {this.previewContent(description)}
            </TableCell>
            <TableCell>
                <Button variant='contained' color='primary' onClick={this.updateCharacter}>Update</Button>
            </TableCell>
            <TableCell>
                <Button variant='contained' color='secondary' onClick={this.deleteCharacter}>Delete</Button>
            </TableCell>
        </TableRow>
    }
}

export default connect(null, {
    updateCharacter,
    deleteCharacter
})(CharacterItem);