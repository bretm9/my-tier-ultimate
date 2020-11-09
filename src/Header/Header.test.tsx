import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

describe('Header', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
  })
  test('should render the logo', () => {
    expect(screen.getByAltText('my-tier-ultimate-logo')).toBeInTheDocument();
  })
  test('should have link to the Mains view', () => {
    expect(screen.getByText('Mains')).toHaveAttribute('href', '/mains')
  })
  test('should have link to the Tier List view', () => {
    expect(screen.getByText('Tier-List')).toHaveAttribute('href', '/tier-list')
  })
  test('logo should link to the homepage', () => {
    expect(screen.getByAltText('my-tier-ultimate-logo').closest('a')).toHaveAttribute('href', '/')
  })
})