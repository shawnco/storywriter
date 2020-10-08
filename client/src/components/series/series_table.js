import React, {Component, Fragment} from 'react';
import SeriesItem from './series_item';
import NewSeries from './new_series';
import {Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core';

class SeriesTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {series} = this.props;
        return <Fragment>
            <h2>Series List</h2>
            <Table border={1}>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Update</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {series.map(s => <SeriesItem key={s.id} series={s} />)}
                    <NewSeries />
                </TableBody>
            </Table>
        </Fragment>
    }
}

export default SeriesTable;