import React, {Component, Fragment} from 'react';
import CharacterItem from './character_item';
import NewCharacter from './new_character';

class CharacterTable extends Component {
    constructor(props) {
        super(props);
    }

    sortCharacters(characters) {
        return characters.sort((a, b) => {
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
        const {characters, story, series} = this.props;
        return <Fragment>
            <h2>Character List</h2>
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
                    {this.sortCharacters(characters).map(s => <CharacterItem key={s.id} character={s} />)}
                    <NewCharacter story={story} series={series} />
                </tbody>
            </table>
        </Fragment>
    }
}

export default CharacterTable;