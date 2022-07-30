import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../shared/Logo'

function NavBar() {
  return (
    <div className="navbar bg-base-100">
        <div className="flex-1">
            <Link to='/'>
                <Logo/>
            </Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
                <Link to='/'>
                    <li><a>Home</a></li>
                </Link>
                <Link to='/about'>
                    <li><a>About</a></li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default NavBar