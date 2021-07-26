import { FetchedCharacter, CleanedCharacter, cleanFetchedCharacter } from './utils/utils';

export const getCharacters = () => {
  return (
    fetch('https://my-tier-ultimate-api.herokuapp.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            fetchCharacters {
              name
              order
              portrait
              icon
              seriesIcon
              seriesName
            }
          }
        `,
        variables: {
          now: new Date().toISOString(),
        },
      }),
    })
    .then(response => response.json())
    .then(data => {
      const fetchedCharacters = data.data.fetchCharacters.map((character: FetchedCharacter) => {
        return cleanFetchedCharacter(character)
      })
      return fetchedCharacters.sort((a: CleanedCharacter, b: CleanedCharacter) => {
        console.log(`string: ${a.order}, number ${+a.order}`)
        return parseInt(a.order, 16) - parseInt(b.order, 16)
      });
    })
    .catch(error => console.error(error))
  )
}

export const getCharactersFromLocalStorage = async () => {
  let parsedCharacters;
  let storedCharacters = localStorage.getItem('characters');
  if (storedCharacters) {
    parsedCharacters = await JSON.parse(storedCharacters);
  }
  return parsedCharacters;
}