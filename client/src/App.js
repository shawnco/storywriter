import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import AllSeries from './components/series/all_series';
import Series from './components/series/series';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className='app' style={{width: '100%'}}>
            <Route path='/series' component={AllSeries} exact />
            <Route path='/series/:id' component={Series} exact />
        </div>
    }
}

export default App;