import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {getSeries} from './../../actions/series';
import _ from 'lodash';
import StoryTable from './../story/story_table';

class Series extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const id = _.get(this.props, 'match.params.id');
        if (id) {
            this.props.getSeries(id);
        }
    }

    render() {
        const {series} = this.props;
        return <Fragment>
            <h2>{_.get(series, 'series.title', '')}</h2>
            <div>{_.get(series, 'series.description', '')}</div>
            <StoryTable series={_.get(series, 'series.id', '')} stories={_.get(series, 'stories', [])} />
        </Fragment>
    }
}

const mapStateToProps = ({series}) => {
    return {
        series: series.series
    };
}

export default connect(mapStateToProps, {getSeries})(Series);