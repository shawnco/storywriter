import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {updateCharacter} from './../../actions/character';
import {Editor} from 'primereact/editor';
import _ from 'lodash';

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
        const characters = _.get(this.props, 'story.characters', []);
        const character = _.find(characters, c => c.id == this.state.id);
        if (character) {
            this.setState({ ...character });
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
        const {description, name} = this.state;
        return <Fragment>
            <h2>Editing Character</h2>
            <strong>Name:</strong> <input
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
            <button onClick={this.saveContent}>Save</button>
        </Fragment>
    }
}

const mapStateToProps = ({story}) => {
    return {
        story: story.story
    };
}

export default connect(mapStateToProps, {updateCharacter})(Character);