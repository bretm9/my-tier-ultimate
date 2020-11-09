import React from 'react';
import { CleanedCharacter } from '../utils/utils'
import CharacterContainer from "../CharacterContainer/CharacterContainer";

import './TiersContainer.scss'

interface IProps {
  characters: CleanedCharacter[];
  displayError: boolean;
  toggleMained: (character: CleanedCharacter) => void;
  updateWinsAndLosses: (character: CleanedCharacter, isWin: boolean) => void;
}

const filterCharactersByTier = (characters: CleanedCharacter[], tier: number) => {
  return characters.filter(character => {
    return character.tier === tier;
  })
}

const displayCharacterContainers = (characters: CleanedCharacter[], displayError: boolean, toggleMained: (character: CleanedCharacter) => void, updateWinsAndLosses: (character: CleanedCharacter, isWin: boolean) => void) => {
  let elementsToReturn = []
  for(let i = 1; i <= 5; i++) {
    let charactersInTier = filterCharactersByTier(characters, i);
    let characterContainer = <CharacterContainer key={i} characters={charactersInTier} displayError={displayError} toggleMained={toggleMained} updateWinsAndLosses={updateWinsAndLosses} />
    elementsToReturn.unshift(characterContainer);
  }
  return elementsToReturn;
}

function TiersContainer(props: IProps) {
  const characterContainers = displayCharacterContainers(props.characters, props.displayError, props.toggleMained, props.updateWinsAndLosses)
  return(
    <section>
      <p className='disclaimer'>Once you track a character's wins they will appear here!</p>
      <section className='tiers-view'>
        <section  className='tiers-container' id='tier-a-plus'>
          <h2 className='tiers-title'>A+</h2>
          {characterContainers[0]}
        </section>
        <section  className='tiers-container' id='tier-a'>
          <h2 className='tiers-title'>A</h2>
          {characterContainers[1]}
        </section>
        <section  className='tiers-container' id='tier-b'>
          <h2 className='tiers-title'>B</h2>
          {characterContainers[2]}
        </section>
        <section  className='tiers-container' id='tier-c'>
          <h2 className='tiers-title'>C</h2>
          {characterContainers[3]}
        </section>
        <section  className='tiers-container' id='tier-f'>
          <h2 className='tiers-title'>F</h2>
          {characterContainers[4]}
        </section>
      </section>
    </section>
  );
}


export default TiersContainer;