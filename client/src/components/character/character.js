import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {updateCharacter} from './../../actions/character';
import {Editor} from 'primereact/editor';
import _ from 'lodash';
import {Button, Input} from '@material-ui/core';

class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: _.get(this.props, 'match.params.id'),
            name: '',
            description: '',
            story: '',
            series: ''
        };
        this.saveContent = this.saveContent.bind(this);
        this.updateContent = this.updateContent.bind(this);
    }

    componentDidMount() {
        const character = _.find(this.props.characters, c => c.id == this.state.id);
        if (character) {
            this.setState({...character})
        }
    }

    saveContent(e) {
        const {id, ...rest} = this.state;
        this.props.updateCharacter(id, rest);
    }

    updateContent(e) {
        this.setState({description: e.htmlValue});
    }

    render() {
        console.log(this.state)
        const {description, name} = this.state;
        return <Fragment>
            <h2>Editing Character</h2>
            <strong>Name:</strong> <Input
                type='text'
                name='name'
                value={name}
                onChange={this.updateContent}
            />
            <Editor
                style={{height: '75vh', width: '75vh'}}
                value={description}
                onTextChange={this.updateContent}
            />
            <Button variant='contained' color='primary' onClick={this.saveContent}>Save</Button>
        </Fragment>
    }
}

const mapStateToProps = ({character}) => {
    return {
        characters: character.characters
    };
}

export default connect(mapStateToProps, {updateCharacter})(Character);