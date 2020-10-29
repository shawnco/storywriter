import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {updateSetting} from './../../actions/setting';
import {Editor} from 'primereact/editor';
import _ from 'lodash';

class Setting extends Component {
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
        const setting = _.find(settings, s => s.id == this.state.id);
        if (setting) {
            this.setState({...setting});
        }
    }

    saveContent(e) {
        const {id, ...rest} = this.state;
        this.props.updateSetting(id, rest);
    }

    updateContent(e) {
        this.setState({description: e.htmlValue});
    }

    render() {
        const {description, name} = this.state;
        return <Fragment>
            <h2>Editing Setting</h2>
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

const mapStateToProps = ({setting}) => {
    return {
        settings: setting.settings
    };
}

export default connect(mapStateToProps, {updateSetting})(Setting);