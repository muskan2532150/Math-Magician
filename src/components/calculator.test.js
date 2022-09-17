import { render } from '@testing-library/react';
import React from 'react';
import Calculator from './Calculator';
// import dependencies
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Calculator />, div);
});
