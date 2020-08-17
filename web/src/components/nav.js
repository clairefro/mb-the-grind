import React from 'react'

import logo from '../assets/bean.png'

const Nav = () => (
  <nav className="flex h-auto items-center p-2 shadow">
    <img style={{ height: '50px' }} src={logo} alt="minty bean logo" />
    <p className="text-2xl ml-4">The Grind</p>
  </nav>
)

export default Nav
