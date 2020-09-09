import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {getSeries} from './../../actions/series';
import _ from 'lodash';

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
        console.log(series);
        return <Fragment>
            placeholder
        </Fragment>
    }
}

const mapStateToProps = ({series}) => {
    return {
        series: series.series
    };
}

export default connect(mapStateToProps, {getSeries})(Series);