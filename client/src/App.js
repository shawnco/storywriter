import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import AllSeries from './components/series/all_series';
import Series from './components/series/series';
import Story from './components/story/story';
import Scene from './components/scene/scene';
import Preview from './components/preview/preview';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className='app' style={{width: '100%'}}>
            <Route path='/series' component={AllSeries} exact />
            <Route path='/series/:id' component={Series} exact />
            <Route path='/story/:id' component={Story} exact />
            <Route path='/scene/:id' component={Scene} exact />
            <Route path='/preview/:id' component={Preview} exact />
        </div>
    }
}

export default App;