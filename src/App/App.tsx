import React, { Component } from 'react';
import './App.scss';
import { getCharacters, getCharactersFromLocalStorage } from '../apiCalls';
import { CleanedCharacter } from '../utils/utils';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from '../Header/Header';
import Search from '../Search/Search';
import CharacterContainer from '../CharacterContainer/CharacterContainer';
import TiersContainer from '../TiersContainer/TiersContainer';

interface IProps {}

interface IState {
  characters: CleanedCharacter[] | [];
  query: string;
}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      characters: [],
      query: ''
    }
  }

  componentDidMount = async () => {
    const parsedCharacters = await getCharactersFromLocalStorage();
    if (parsedCharacters) {
      this.setState({ characters: parsedCharacters });
    }
    if(this.state.characters.length < 1) {
      getCharacters()
      .then(data => {
        this.setState({ characters: data })
      });
    }
  }

    

  updateWinsAndLosses = (character: CleanedCharacter, isWin: boolean) => {
    if (isWin) {
      character.wins += 1
    } else {
      character.losses += 1
    }
    let foundTier = Math.floor(((character.wins / (character.wins + character.losses)) * 6));
    foundTier = foundTier < 1 ? 1 : foundTier > 5 ? 5 : foundTier;
    character.tier = foundTier;
    this.setState({ characters: [...this.state.characters] });
    localStorage.setItem('characters', JSON.stringify(this.state.characters));
  }

  toggleMained = (character: CleanedCharacter) => {
		character.isMained = !character.isMained;
    this.setState({ characters: [...this.state.characters] });
    localStorage.setItem('characters', JSON.stringify(this.state.characters));
  }

  updateQuery = (event: any) => {
    event.preventDefault();
    this.setState({ query: (event.target.value)})
  }
  
  searchCharacters = (characters: CleanedCharacter[]) => {
    if(this.state.query) {
      return characters.filter(character => character.name.toLowerCase().includes(this.state.query.toLowerCase()))
    }
    return characters;
  }
  
  render() {
    const charactersInSearch = this.searchCharacters(this.state.characters)
    const mainedCharacters = this.state.characters.filter(character => character.isMained);
    const mainedCharactersInSearch = this.searchCharacters(mainedCharacters)
    return (
      <main>
        <Header />
        <Switch>
          <Route 
            exact path='/'
            render={() => {
              return (
                <section className='homepage'>
                  <Search query={this.state.query} updateQuery={this.updateQuery}/>
                  <CharacterContainer characters={charactersInSearch} displayError={true} toggleMained={this.toggleMained} updateWinsAndLosses={this.updateWinsAndLosses} />
                </section>
              )
            }} 
          />
          <Route 
            path='/mains' 
            render={() => {
              return (
                <section className='mains-view'>
                  <Search query={this.state.query} updateQuery={this.updateQuery}/>
                  <CharacterContainer 
                    characters={mainedCharactersInSearch} 
                    displayError={true} 
                    toggleMained={this.toggleMained} 
                    updateWinsAndLosses={this.updateWinsAndLosses} 
                  />
                </section>
              );
            }}
          />
          <Route 
            path='/tier-list' 
            render={() => {
              return (
                <TiersContainer 
                characters={this.state.characters} 
                displayError={false} 
                toggleMained={this.toggleMained} 
                updateWinsAndLosses={this.updateWinsAndLosses} 
              />
              );
            }}
          />
          <Redirect to="/" />
        </Switch>
      </main>
    )
  }
}

export default App;
