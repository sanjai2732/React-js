import React from 'react'

export const Navbar = () => {
  return (
    <>
    <div className='container'>
        <h2 id='logo'>logo</h2>
        <ul className='nav'>
             <li><a href="#">Home</a></li>
             <li><a href="#">About</a></li>
             <li><a href="#">Project</a></li>
        </ul>
        <button id="contact">contact</button>
    </div>
    
    </>
  )
}
