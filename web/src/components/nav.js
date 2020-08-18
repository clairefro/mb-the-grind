import React from 'react'
import { Link, routes } from '@redwoodjs/router'

import logo from '../assets/bean.png'

const Nav = () => (
  <nav className="flex h-auto items-center p-2 shadow fixed w-full bg-white">
    <Link to={routes.home()} className="flex items-center">
      <img style={{ height: '50px' }} src={logo} alt="minty bean logo" />
      <p className="text-2xl ml-4">The Grind</p>
    </Link>
  </nav>
)

export default Nav
