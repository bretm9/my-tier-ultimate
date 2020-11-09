import { FetchedCharacter, cleanFetchedCharacter } from './utils/utils';

export const getCharacters = () => {
  return (
    fetch('https://fe-cors-proxy.herokuapp.com', {
      headers: {
        "Target-URL": "https://smashbros-unofficial-api.vercel.app/api/v1/ultimate/characters"
      }
    })
      .then(response => response.json())
      .then(data => {
        return data.map((character: FetchedCharacter) => {
          return cleanFetchedCharacter(character)
        })
      })
      .catch(error => console.error(error))
  )
}

