import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {updateSetting, deleteSetting} from './../../actions/setting';
import {TableRow, TableCell, Button, Input} from '@material-ui/core';

class SettingItem extends Component {
    constructor(props) {
        super(props);
        const {setting} = this.props;
        this.state = {
            id: setting.id,
            description: setting.description,
            name: setting.name,
            story: setting.story,
            series: setting.series
        };
        this.updateState = this.updateState.bind(this);
        this.updateSetting = this.updateSetting.bind(this);
        this.deleteSetting = this.deleteSetting.bind(this);
    }

    updateState(e) {
        this.setState({[e.target.name]:  e.target.value});
    }

    updateSetting() {
        const {id, ...rest} = this.state;
        this.props.updateSetting(id, rest);
    }

    deleteSetting() {
        if (window.confirm('Are you sure you want to delete the setting?')) {
            this.props.deleteSetting(this.state.id);
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
                <Link to={`/setting/${id}`}>{id}</Link>
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
                <Button variant='contained' color='primary' onClick={this.updateSetting}>Update</Button>
            </TableCell>
            <TableCell>
                <Button variant='contained' color='primary' onClick={this.deleteSetting}>Delete</Button>
            </TableCell>
        </TableRow>
    }
}

export default connect(null, {
    updateSetting,
    deleteSetting
})(SettingItem);