import { render } from '@testing-library/react';
import React from 'react';
import Home from './Home';
// import dependencies
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom';

it('renders without crashing for Home', () => {
  const div = document.createElement('div');
  render(<Home />, div);
});
