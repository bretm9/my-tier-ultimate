import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { CleanedCharacter } from '../utils/utils';
import { getCharacters } from '../apiCalls';
import userEvent from '@testing-library/user-event';

jest.mock('../apiCalls')

describe('App', () => {
  let mockCharacters1: CleanedCharacter[];
  beforeEach(() => {
    mockCharacters1 = [
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
  })
  test('should render the header', () => {
    (getCharacters as jest.Mock).mockResolvedValue(mockCharacters1)
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByAltText('my-tier-ultimate-logo')).toBeInTheDocument();
  })
  test('should render character cards', async () => {
    (getCharacters as jest.Mock).mockResolvedValue(mockCharacters1)
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    const mario = await waitFor(() => screen.getByText('Mario'));
    const luigi = await waitFor(() => screen.getByText('Luigi'));
    expect(mario).toBeInTheDocument();
    expect(luigi).toBeInTheDocument();
  })

  test('should be able to search a character', async () => {
    (getCharacters as jest.Mock).mockResolvedValue(mockCharacters1)
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    const mario = await waitFor(() => screen.getByText('Mario'));
    userEvent.type(screen.getByPlaceholderText('Search a character!'), 'MaRiO')
    expect(mario).toBeInTheDocument()
  })
  test('should be able to filter out a character', () => {
    (getCharacters as jest.Mock).mockResolvedValue(mockCharacters1)
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    userEvent.type(screen.getByPlaceholderText('Search a character!'), 'luIgi')
    expect(screen.queryByText('Mario')).not.toBeInTheDocument()
  })
  test('should be able to main a character and view it on the mains screen', async () => {
    (getCharacters as jest.Mock).mockResolvedValue(mockCharacters1)
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    userEvent.click(await waitFor(() => screen.getAllByText('Main')[0]))
    userEvent.click(screen.getByText('Mains'))
    expect(screen.getByText('Mario')).toBeInTheDocument()
  })
  test('should not render unmained on the mains screen', async () => {
    (getCharacters as jest.Mock).mockResolvedValue(mockCharacters1)
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    userEvent.click(await waitFor(() => screen.getAllByText('Main')[0]))
    userEvent.click(screen.getByText('Mains'))
    expect(screen.queryByText('Luigi')).not.toBeInTheDocument()
  })
  test('should be able to search a character on the mains screen', async () => {
    (getCharacters as jest.Mock).mockResolvedValue(mockCharacters1)
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    userEvent.click(await waitFor(() => screen.getAllByText('Main')[0]))
    userEvent.click(await waitFor(() => screen.getAllByText('Main')[1]))
    userEvent.click(screen.getByText('Mains'))
    const mario = await waitFor(() => screen.getByText('Mario'));
    userEvent.type(screen.getByPlaceholderText('Search a character!'), 'MaRiO')
    expect(mario).toBeInTheDocument()
  })
  test('should be able to filter out a character on the mains screen', async () => {
    (getCharacters as jest.Mock).mockResolvedValue(mockCharacters1)
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    userEvent.click(await waitFor(() => screen.getAllByText('Main')[0]))
    userEvent.click(await waitFor(() => screen.getAllByText('Main')[1]))
    userEvent.click(screen.getByText('Mains'))
    userEvent.type(screen.getByPlaceholderText('Search a character!'), 'LuIgi')
    expect(screen.queryByText('Mario')).not.toBeInTheDocument()
  });
  test('should be able to remove a character from the mains screen and see it disappear', async () => {
    (getCharacters as jest.Mock).mockResolvedValue(mockCharacters1)
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    userEvent.click(await waitFor(() => screen.getAllByText('Main')[0]))
    userEvent.click(await waitFor(() => screen.getAllByText('Main')[1]))
    userEvent.click(screen.getByText('Mains'))
    userEvent.click(await waitFor(() => screen.getAllByText('Unmain')[0]))
    expect(screen.queryByText('Mario')).not.toBeInTheDocument()
  })
  test('should render a character on the tier list screen if their wins have been tracked', async () => {
    (getCharacters as jest.Mock).mockResolvedValue(mockCharacters1)
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    userEvent.click(await waitFor(() => screen.getAllByText('+')[0]))
    userEvent.click(screen.getByText('Tier-List'))
    const mario = await waitFor(() => screen.getByText('Mario'));
    expect(screen.getByText('Once you track a character\'s wins they will appear here!')).toBeInTheDocument()
    expect(mario).toBeInTheDocument()
  })
  test('should not render a character on the tier list screen if their wins have not been tracked', async () => {
    (getCharacters as jest.Mock).mockResolvedValue(mockCharacters1)
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    userEvent.click(screen.getByText('Tier-List'))
    expect(screen.getByText('Once you track a character\'s wins they will appear here!')).toBeInTheDocument()
    expect(screen.queryByText('Mario')).not.toBeInTheDocument()
  })
})
