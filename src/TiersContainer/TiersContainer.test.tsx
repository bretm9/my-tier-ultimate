import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import TiersContainer from './TiersContainer';
import { CleanedCharacter } from '../utils/utils';
import { notDeepEqual } from 'assert';

describe('TiersContainer', () => {
  let characters1: CleanedCharacter[];
  let characters2: [];
  let displayError: boolean;
  let mockToggleMained: any;
  let mockUpdateWinsAndLosses: any;
  beforeEach(() => {
    characters1 = [
      {
        images: {
            characterIcon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1594501674/Ultimate%20Characters/Icons/120px-MarioHeadSSBUWebsite_hkzzpq.png",
            portrait: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1594501176/Ultimate%20Characters/Portraits/350_emjsmz.png",
            seriesIcon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1594501902/Series/mario_ncgezx.svg"
          },
          name: "Mario",
          seriesName: "Mario",
          tier: 4,
          wins: 1,
          losses: 0,
          isMained: false
      },
      {
        images: {
          characterIcon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595199027/Ultimate%20Characters/Icons/bhciash4n90qbxy4bu3e.png",
          portrait: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595199028/Ultimate%20Characters/Portraits/m7dhe7mnktqp3n5lurch.png",
          seriesIcon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1594501902/Series/mario_ncgezx.svg"
        },
        name: "Luigi",
        seriesName: "Mario",
        tier: 4,
        wins: 2,
        losses: 0,
        isMained: false
      },
      {
        images: {
            characterIcon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1594501674/Ultimate%20Characters/Icons/120px-MarioHeadSSBUWebsite_hkzzpq.png",
            portrait: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1594501176/Ultimate%20Characters/Portraits/350_emjsmz.png",
            seriesIcon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1594501902/Series/mario_ncgezx.svg"
          },
          name: "Bowser",
          seriesName: "Mario",
          tier: 0,
          wins: 0,
          losses: 0,
          isMained: false
      },
      {
        images: {
          characterIcon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595199027/Ultimate%20Characters/Icons/bhciash4n90qbxy4bu3e.png",
          portrait: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595199028/Ultimate%20Characters/Portraits/m7dhe7mnktqp3n5lurch.png",
          seriesIcon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1594501902/Series/mario_ncgezx.svg"
        },
        name: "Donkey Kong",
        seriesName: "Mario",
        tier: 0,
        wins: 0,
        losses: 0,
        isMained: false
      }
    ];
    characters2 = [];
    displayError = false;
    mockToggleMained = jest.fn();
    mockUpdateWinsAndLosses = jest.fn();
  });
  test('should render a disclaimer explaining how to use tier-list', () => {
    render(
      <MemoryRouter>
        <TiersContainer characters={characters1} displayError={displayError} toggleMained={mockToggleMained} updateWinsAndLosses={mockUpdateWinsAndLosses}/>
      </MemoryRouter>
    )
    expect(screen.getByText('Once you track a character\'s wins they will appear here!')).toBeInTheDocument();
  });
  test('should render a container of character containers', () => {
    render(
      <MemoryRouter>
        <TiersContainer characters={characters1} displayError={displayError} toggleMained={mockToggleMained} updateWinsAndLosses={mockUpdateWinsAndLosses}/>
      </MemoryRouter>
    )
    expect(screen.getByText('Mario')).toBeInTheDocument();
    expect(screen.getByText('Luigi')).toBeInTheDocument();
  });

  test('should not render an error if no characters were found', () => {
    render(
      <MemoryRouter>
        <TiersContainer characters={characters2} displayError={displayError} toggleMained={mockToggleMained} updateWinsAndLosses={mockUpdateWinsAndLosses}/>
      </MemoryRouter>
    )
    expect(screen.queryByText('No characters found!')).not.toBeInTheDocument();
  });
});