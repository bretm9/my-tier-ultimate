import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import CharacterCard from './CharacterCard';
import { CleanedCharacter } from '../utils/utils';

describe('CharacterCard', () => {
  let character1: CleanedCharacter;
  let character2: CleanedCharacter;
  let mockToggleMained: any;
  let mockUpdateWinsAndLosses: any;
  beforeEach(() => {
    character1 = {
      images: {
          characterIcon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1594501674/Ultimate%20Characters/Icons/120px-MarioHeadSSBUWebsite_hkzzpq.png",
          portrait: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1594501176/Ultimate%20Characters/Portraits/350_emjsmz.png",
          seriesIcon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1594501902/Series/mario_ncgezx.svg"
        },
        name: "Mario",
        seriesName: "Mario",
        tier: 5,
        wins: 1,
        losses: 0,
        isMained: false
    };
    character2 = {
      images: {
        characterIcon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595199027/Ultimate%20Characters/Icons/bhciash4n90qbxy4bu3e.png",
        portrait: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595199028/Ultimate%20Characters/Portraits/m7dhe7mnktqp3n5lurch.png",
        seriesIcon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1594501902/Series/mario_ncgezx.svg"
      },
      name: "Luigi",
      seriesName: "Mario",
      tier: 2,
      wins: 0,
      losses: 0,
      isMained: false
    };
    mockToggleMained = jest.fn();
    mockUpdateWinsAndLosses = jest.fn();
  });
  test('should render a character card', () => {
    render(
      <MemoryRouter>
        <CharacterCard character={character1} toggleMained={mockToggleMained} updateWinsAndLosses={mockUpdateWinsAndLosses}/>
      </MemoryRouter>
    )
    expect(screen.getByText('Mario')).toBeInTheDocument();
    expect(screen.getByText('Main')).toBeInTheDocument();
    expect(screen.getByText('-')).toBeInTheDocument();
    expect(screen.getByText('+')).toBeInTheDocument();
    expect(screen.getByAltText('Mario-portrait')).toBeInTheDocument();
  });
  test('should fire toggleMained', () => {
    render(
      <MemoryRouter>
        <CharacterCard character={character1} toggleMained={mockToggleMained} updateWinsAndLosses={mockUpdateWinsAndLosses}/>
      </MemoryRouter>
    )
    userEvent.click(screen.getByText('Main'));
    expect(mockToggleMained).toHaveBeenCalledTimes(1);
  });
  test('should render a tier rank based on the character\'s tier', () => {
    render(
      <MemoryRouter>
        <CharacterCard character={character1} toggleMained={mockToggleMained} updateWinsAndLosses={mockUpdateWinsAndLosses}/>
        <CharacterCard character={character2} toggleMained={mockToggleMained} updateWinsAndLosses={mockUpdateWinsAndLosses}/>
      </MemoryRouter>
    )
    expect(screen.getByText('A+')).toBeInTheDocument();
    expect(screen.getByText('C')).toBeInTheDocument();
  });
  test('should fire updateWinsAndLosses when clicking + or -', () => {
    render(
      <MemoryRouter>
        <CharacterCard character={character1} toggleMained={mockToggleMained} updateWinsAndLosses={mockUpdateWinsAndLosses}/>
      </MemoryRouter>
    )
    userEvent.click(screen.getByText('-'));
    userEvent.click(screen.getByText('+'));
    expect(mockUpdateWinsAndLosses).toHaveBeenCalledTimes(2);
  });
});