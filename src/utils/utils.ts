export interface FetchedCharacter {
    alsoAppearsIn: string[];
    availability: string;
    images: {
      icon: string;
      portrait: string;
    };
    name: string;
    order: string;
    series: {
      icon: string;
      name: string;
    }
}

// export interface CleanedCharacter {
//   images: {
//     characterIcon: string;
//     portrait: string;
//     seriesIcon: string;
//   };
//   name: string;
//   seriesName: string;
//   tier: number;
//   wins: number;
//   losses: number;
//   isMained: boolean;
// }

export const cleanFetchedCharacter = (character: FetchedCharacter): CleanedCharacter => {
  return {
    images: {
      characterIcon: character.images.icon,
      portrait: character.images.portrait,
      seriesIcon: character.series.icon,
    },
    name: character.name,
    seriesName: character.series.name,
    tier: 0,
    wins: 0,
    losses: 0,
    isMained: false
  }
}