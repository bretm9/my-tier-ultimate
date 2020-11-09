import React from 'react';
import { CleanedCharacter } from '../utils/utils';
import './CharacterCard.scss'

// import ../image/logo.png

interface IProps {
  character: CleanedCharacter;
  toggleMained: (character: CleanedCharacter) => void;
  updateWinsAndLosses: (character: CleanedCharacter, isWin: boolean) => void
}

function convertTierNumberToGrade(tierNumber: number): string | undefined {
  const letters: string[] = ['', 'F', 'C', 'B', 'A', 'A+'];
  return letters.find((_letter, index) => {
    return index === tierNumber;
  });
}

function convertWinRateToPercentage(character: CleanedCharacter): string {
  const percentage = ((character.wins / (character.wins + character.losses)) * 100);
  if (percentage) {
    return percentage.toFixed(1);
  }
  return '';
}

function CharacterCard(props: IProps) {
  return (
    <section className='character-card'>
      <section className='character-card-header'>
        <p>{props.character.name}</p>
        {props.character.isMained && <button className='button-unmain' onClick={() => props.toggleMained(props.character)}>Unmain</button>}
        {!props.character.isMained && <button className='button-main' onClick={() => props.toggleMained(props.character)}>Main</button>}
      </section>
      <img src={props.character.images.portrait} alt={`${props.character.name}-portrait`}/>
      <section className='character-card-buttons'>
        <button onClick={() => props.updateWinsAndLosses(props.character, false)}>-</button>
        <p>{convertTierNumberToGrade(props.character.tier)}</p>
        <button onClick={() => props.updateWinsAndLosses(props.character, true)}>+</button>
      </section>
      <section className='character-card-footer'>
        <h2>{props.character.losses}</h2>
        <h2>{convertWinRateToPercentage(props.character)}</h2>
        <h2>{props.character.wins}</h2>
      </section>
    </section>
  )
}

export default CharacterCard;