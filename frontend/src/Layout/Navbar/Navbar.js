import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'

function Navbar() {
    return (
        <nav>
            <div className='topnav'>
                <a href='/'><img alt='fotp' src='https://preview.colorlib.com/theme/aroma/img/logo.png.webp' /></a>
                <ul>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/addpage'}>Add</NavLink></li>
                    <li><NavLink>Shop</NavLink></li>
                    <li><NavLink>Blog</NavLink></li>
                    <li><NavLink>Contact</NavLink></li>
                </ul>
                <div id='navIcons'>
                    <a href='/'><i class="fa-solid fa-magnifying-glass"></i></a>
                    <a href='/'><i class="fa-solid fa-cart-shopping"></i></a>
                </div>
                <a href='/'><button>Buy Now</button></a>
            </div>
        </nav>
    )
}

export default Navbar