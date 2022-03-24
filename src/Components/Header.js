import React from 'react'
import './Header.css'

function Header() {
  return (
    <header>
        <nav>
            <h1>React Practice</h1>
            <ul>
                <li className='active'>Home</li>
                <li>Contact</li>
                <li>Feedback</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header