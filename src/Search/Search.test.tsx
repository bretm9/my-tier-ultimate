import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import Search from './Search';

describe('Search', () => {
  let mockUpdateQuery: any;
  beforeEach(() => {
    mockUpdateQuery = jest.fn();
  })
  test('should render the searchbar', () => {
    render(
      <MemoryRouter>
        <Search query='maRiO' updateQuery={mockUpdateQuery}/>
      </MemoryRouter>
    )
    expect(screen.getByPlaceholderText('Search a character!')).toBeInTheDocument();
  })
  test('should fire updateQuery when a character is typed', () => {
    render(
      <MemoryRouter>
        <Search query='' updateQuery={mockUpdateQuery}/>
      </MemoryRouter>
    )
    userEvent.type(screen.getByPlaceholderText('Search a character!'), 'm');
    expect(mockUpdateQuery).toHaveBeenCalledTimes(1);
  })
})