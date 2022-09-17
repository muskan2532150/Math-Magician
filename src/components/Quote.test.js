import {render,screen,cleanup} from '@testing-library/react'
import Quotes from "./Quotes";
// import dependencies
import React from 'react'
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'


it('renders without crashing for Quotes',()=>{
    const div = document.createElement('div');
    render(<Quotes></Quotes>,div);
})