import { render } from '@testing-library/react';
import React from 'react';
import Quotes from './Quotes';
// import dependencies
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom';

it('renders without crashing for Quotes', () => {
  const div = document.createElement('div');
  render(<Quotes />, div);
});
