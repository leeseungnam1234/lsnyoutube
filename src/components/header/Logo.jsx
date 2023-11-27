import React from 'react'
import { CiAvocado } from "react-icons/ci"
const Logo = () => {
    return (
        <h1 className='header_logo'>
            <a href='/'>
                <em aria-hidden='true'><CiAvocado color='green'/></em>
                <span>이승남<br/>youtube</span>
            </a>
        </h1>
    )
}

export default Logo