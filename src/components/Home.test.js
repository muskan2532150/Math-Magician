import {render} from '@testing-library/react'
import Home from "./Home";
// import dependencies
import React from 'react'
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'


it('renders without crashing for Home',()=>{
    const div = document.createElement('div');
    render(<Home></Home>,div);
})