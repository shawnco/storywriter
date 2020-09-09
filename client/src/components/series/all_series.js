import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {getAllSeries} from './../../actions/series';
import SeriesTable from './series_table';


class AllSeries extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAllSeries();
    }

    render() {
        const {series} = this.props;
        console.log(series)
        return <Fragment>
            <SeriesTable series={series} />
        </Fragment>
    }
}

const mapStateToProps = ({series}) => {
    return {
        series: series.seriesList
    }
};

export default connect(mapStateToProps, {getAllSeries})(AllSeries);