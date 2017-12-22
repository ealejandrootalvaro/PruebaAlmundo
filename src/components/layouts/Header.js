import React from 'react'
import logo from '../../icons/logo-almundo.svg'

const headerStyle = {
  display: "flex",
  alignItems: "center",
  paddingLeft: "20px"
}

const itemsStyle = {
  display: "flex"
}

const Header = () => {
  return (
    <nav>

      <div style={headerStyle} className="nav-wrapper indigo darken-2">
        <a style={itemsStyle} href="/" className="brand-logo">
          <img src={logo}/>
        </a>
      </div>

    </nav>
  )
}

export default Header
