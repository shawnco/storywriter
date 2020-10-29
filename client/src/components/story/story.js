import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getStory} from './../../actions/story';
import {getScenesByStory} from './../../actions/scene';
import {getChaptersByStory} from './../../actions/chapter';
import {getCharactersByStory} from './../../actions/character';
import {getSettingsByStory} from './../../actions/setting';
import _ from 'lodash';
import SceneTable from './../scene/scene_table';
import ChapterTable from './../chapter/chapter_table';
import CharacterTable from './../character/character_table';
import SettingTable from './../setting/setting_table';

class Story extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const id = _.get(this.props, 'match.params.id');
        if (id) {
            this.props.getStory(id);
            this.props.getScenesByStory(id);
            this.props.getChaptersByStory(id);
            this.props.getCharactersByStory(id);
            this.props.getScenesByStory(id);
        }
    }

    render() {
        const {story, scenes, chapters, characters, settings} = this.props;
        console.log('chaptas',_.get(story, 'id'))
        const id = _.get(story, 'id', '');
        return <Fragment>
            <h2>{_.get(story, 'title', '')}</h2>
            <div>{_.get(story, 'description', '')}</div>
            <div><Link to={`/preview/${id}`}>Preview</Link></div>
            <ChapterTable 
                story={_.get(story, 'id')} 
                chapters={chapters}
                scenes={scenes} 
            />
            <SceneTable story={id} scenes={scenes} />
            <CharacterTable story={id} characters={characters} />
            <SettingTable story={id} settings={settings} />
        </Fragment>
    }
}

const mapStateToProps = ({story, scene, chapter, character, setting}) => {
    return {
        story: story.story,
        scenes: scene.sceneList,
        chapters: chapter.chapterList,
        characters: character.characterList,
        settings: setting.settingList
    };
}

export default connect(mapStateToProps, {
    getStory,
    getScenesByStory,
    getChaptersByStory,
    getCharactersByStory,
    getSettingsByStory
})(Story);