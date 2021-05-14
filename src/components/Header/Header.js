import React from 'react'
import "./Header.css"

function Header() {
    return (
        <div >
        <span onClick = {() => window.scroll(0,0)} className="header"><i class="fas fa-video"></i> Entertainment hub area   </span>
      </div>
    )
}

export default Header
