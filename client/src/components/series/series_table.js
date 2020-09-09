import React, {Component, Fragment} from 'react';
import SeriesItem from './series_item';
import NewSeries from './new_series';

class SeriesTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {series} = this.props;
        return <Fragment>
            <h2>Series List</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {series.map(s => <SeriesItem key={s.id} series={s} />)}
                    <NewSeries />
                </tbody>
            </table>
        </Fragment>
    }
}

export default SeriesTable;