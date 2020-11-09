import React from 'react';
import { CleanedCharacter } from '../utils/utils'
import CharacterCard from '../CharacterCard/CharacterCard'
import './CharacterContainer.scss'

interface IProps {
	characters: CleanedCharacter[] | [];
	displayError: boolean;
  toggleMained: (character: CleanedCharacter) => void;
  updateWinsAndLosses: (character: CleanedCharacter, isWin: boolean) => void;
}

const displayCharacters = (characters: any, displayError: boolean, toggleMained: (character: CleanedCharacter) => void, updateWinsAndLosses: (character: CleanedCharacter, isWin: boolean) => void) => {
	if (characters.length) {
		return characters.map((character: CleanedCharacter, index: number) => {
			return <CharacterCard key={index} character={character} toggleMained={toggleMained} updateWinsAndLosses={updateWinsAndLosses} />
		})
	} if (displayError) {
		return <h1 className='character-fetch-error'>No characters found!</h1>
	}
}

function CharacterContainer(props: IProps) {
	return (
		<section className='character-container'>
			{displayCharacters(props.characters, props.displayError, props.toggleMained, props.updateWinsAndLosses)}
		</section>
	);
}

export default CharacterContainer;