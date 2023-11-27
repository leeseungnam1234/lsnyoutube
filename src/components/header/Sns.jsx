import React from 'react'
import { snsLink } from '../../data/header'
import {Link,useLocation} from 'react-router-dom'

const Sns = () => {
    const location = useLocation();
    
    return (
        <div className='header_sns'>
            <ul>
                {snsLink.map((snsLink,key)=>
                    <li key={key} className={location.pathname === snsLink.src ? 'active' : ''}>
                        <a href={snsLink.url} target='_black' rel='noopener noreferrer' aria-label={snsLink.title}>
                            <span>{snsLink.icon}</span>
                        </a>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Sns