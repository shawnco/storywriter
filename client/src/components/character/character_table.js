import React, {Component, Fragment} from 'react';
import CharacterItem from './character_item';
import NewCharacter from './new_character';
import {Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core';

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
            <Table border={1}>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Description (preview)</TableCell>
                        <TableCell>Update</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.sortCharacters(characters).map(s => <CharacterItem key={s.id} character={s} />)}
                    <NewCharacter story={story} series={series} />
                </TableBody>
            </Table>
        </Fragment>
    }
}

export default CharacterTable;