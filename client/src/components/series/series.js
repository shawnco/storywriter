import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {getSeries} from './../../actions/series';
import {getStoriesBySeries} from './../../actions/story';
import {getChaptersBySeries} from './../../actions/chapter';
import {getScenesBySeries} from './../../actions/scene';
import {getCharactersBySeries} from './../../actions/character';
import {getSettingsBySeries} from './../../actions/setting';
import _ from 'lodash';
import StoryTable from './../story/story_table';
import CharacterTable from './../character/character_table';
import SettingTable from './../setting/setting_table';

class Series extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const id = _.get(this.props, 'match.params.id');
        if (id) {
            this.props.getSeries(id);
            this.props.getStoriesBySeries(id);
            this.props.getCharactersBySeries(id);
            this.props.getSettingsBySeries(id);
        }
    }

    render() {
        const {series, stories, characters, settings} = this.props;
        console.log(this.props)
        const id = _.get(series, 'id', '');
        return <Fragment>
            <h2>{_.get(series, 'title', '')}</h2>
            <div>{_.get(series, 'description', '')}</div>
            <StoryTable series={id} stories={stories} />
            <CharacterTable series={id} characters={characters} />
            <SettingTable series={id} settings={settings} />
        </Fragment>
    }
}

const mapStateToProps = ({series, story, character, setting}) => {
    return {
        series: series.series,
        stories: story.storyList,
        characters: character.characterList,
        settings: setting.settingList
    };
}

export default connect(mapStateToProps, {
    getSeries,
    getStoriesBySeries,
    getScenesBySeries,
    getChaptersBySeries,
    getCharactersBySeries,
    getSettingsBySeries
})(Series);