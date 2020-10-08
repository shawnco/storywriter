import React, {Component, Fragment} from 'react';
import SettingItem from './setting_item';
import NewSetting from './new_setting';

class SettingTable extends Component {
    constructor(props) {
        super(props);
    }

    sortSettings(settings) {
        return settings.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            } else if (a.name > b.name) {
                return 1;
            } else {
                return 0;
            }
        });
    }

    render() {
        const {settings, story, series} = this.props;
        return <Fragment>
            <h2>Setting List</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description (preview)</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.sortSettings(settings).map(s => <SettingItem key={s.id} setting={s} />)}
                    <NewSetting story={story} series={series} />
                </tbody>
            </table>
        </Fragment>
    }
}

export default SettingTable;