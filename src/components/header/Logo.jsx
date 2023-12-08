import React from 'react'
import { CiAvocado } from "react-icons/ci"
import { Link } from 'react-router-dom'

const Logo = ({toggleMenu}) => {
    return (
        <h1 className='header_logo'>
             <Link to='/'>
                <em aria-hidden='true' onClick={toggleMenu}><CiAvocado color='green'/></em>
                <span>이승남<br />youtube</span>
            </Link>
        </h1>
    )
}

export default Logo