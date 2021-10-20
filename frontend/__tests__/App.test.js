import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders APP', () => {
  render(<App data-testid="app" />);
  expect(screen.getAllByTestId("app"));
});
