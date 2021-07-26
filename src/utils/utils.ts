export interface FetchedCharacter {
  icon: string;
  name: string;
  order: string;
  portrait: string;
  series_icon: string;
  series_name: string;
}

export interface CleanedCharacter {
  images: {
    characterIcon: string;
    portrait: string;
    seriesIcon: string;
  };
  name: string;
  seriesName: string;
  tier: number;
  wins: number;
  losses: number;
  isMained: boolean;
  order: string;
}

export const cleanFetchedCharacter = (character: FetchedCharacter): CleanedCharacter => {
  return {
    images: {
      characterIcon: character.icon,
      portrait: character.portrait,
      seriesIcon: character.series_icon,
    },
    name: character.name,
    seriesName: character.series_name,
    tier: 0,
    wins: 0,
    losses: 0,
    isMained: false,
    order: character.order
  }
}