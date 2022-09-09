import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <nav>
        <div className="heading">
          <h1 className="ml2">MATH MAGICIANS</h1>
        </div>
        <ul>
          <li>Home</li>
          <li>Calulator</li>
          <li>Quotes</li>
        </ul>
      </nav>
    )
  }
}

export default Header
