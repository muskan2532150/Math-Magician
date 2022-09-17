import {render,screen,cleanup} from '@testing-library/react'
import Calculator from "./Calculator";
// import dependencies
import React from 'react'
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
it('renders without crashing',()=>{
    const div = document.createElement('div');
    render(<Calculator></Calculator>,div);
})
