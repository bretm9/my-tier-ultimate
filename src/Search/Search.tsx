import React from 'react';

import './Search.scss'

interface IProps {
  query: string;
  updateQuery: (value: any) => void;
}

function Search (props: IProps) {
  return (
    <form className='search' onSubmit={(event) => event.preventDefault()}>
      <input 
        type='text' 
        placeholder='Search a character!'
        value={props.query}
        onChange={props.updateQuery}/>
    </form>
  )
}

export default Search;