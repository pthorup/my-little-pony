import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/category'>Types of Ponies</Link>
                <Link to='/favourites'>Favourites</Link>
                <Link to='/songs'>Songs</Link>
                <Link to='/style-pony'>Style a Pony</Link>
            </nav>
        </header>
    )
}

export default Header
