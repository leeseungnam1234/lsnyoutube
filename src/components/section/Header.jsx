import React from 'react'

import { CiAvocado } from "react-icons/ci";
import { CiBaseball } from 'react-icons/ci'
import { CiCoins1 } from 'react-icons/ci'
import { CiBoxes } from 'react-icons/ci'
import { CiBullhorn } from 'react-icons/ci'
import { CiCoffeeCup } from 'react-icons/ci'
import { CiDumbbell } from 'react-icons/ci'
import { CiFries } from 'react-icons/ci'
import { CiMoneyBill } from 'react-icons/ci'

import { AiFillGithub } from 'react-icons/ai'
import { AiOutlineCodepen } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'

const Header = () => {
  return (
    <header id='header' role='banner'>
        <h1 className='header_logo'>
            <a href='/'>
                <em aria-hidden='true'><CiAvocado color='green'/></em>
                <span>이승남<br/>youtube</span>
            </a>
        </h1>

    <nav className='header_menu'>
        <ul className='menu'>
            <li className='active'>
                <a href="/"><CiBaseball size={25}/>웹스토리보이</a>
            </li>
            <li>
                <a href="/today"><CiCoins1 size={25}/>오늘의 추천영상</a>
            </li>
            <li>
                <a href="/developer"><CiBoxes size={25}/>추천 개발자</a>
            </li>
            <li>
                <a href="/webd"><CiBullhorn size={25}/>웹디자인 기능사</a>
            </li>
            <li>
                <a href="/website"><CiCoffeeCup size={25}/>웹표준 사이트</a>
            </li>
            <li>
                <a href="/gsap"><CiDumbbell size={25}/>GSAP Parallax</a>
            </li>
            <li>
                <a href="/port"><CiFries size={25}/>포트폴리오 사이트</a>
            </li>
            <li>
                <a href="/youtube"><CiMoneyBill size={25}/>유튜브 클론 사이트</a>
            </li>
        </ul>
        <ul className='keyword'>
            <li className='active'>
                <a href='/search/webstoryboy'>webstoryboy</a>
            </li>
            <li>
                <a href='/search/html'>HTML</a>
            </li>
            <li>
                <a href='/search/css'>CSS</a>
            </li>
            <li>
                <a href='/search/javascript'>JavaScript</a>
            </li>
            <li>
                <a href='/search/react.js'>React.js</a>
            </li>
            <li>
                <a href='/search/vue.js'>Vue.js</a>
            </li>
            <li>
                <a href='/search/next.js'>Next.js</a>
            </li>
            <li>
                <a href='/search/node.js'>Node.js</a>
            </li>
            <li>
                <a href='/search/sql'>SQL</a>
            </li>
            <li>
                <a href='/search/React Portfolio'>portfolio</a>
            </li>
            <li>
                <a href='/search/NewJeans'>music</a>
            </li>
        </ul>
    </nav>

        <div className='header_sns'>
            <ul>
                <li>
                    <a href='https://github.com/leeseungnam1234' rel='noopener noreferrer'>
                        <AiFillGithub size={40}/>
                    </a>
                </li>
                <li>
                    <a href='https://www.youtube.com/' rel='noopener noreferrer'>
                        <AiFillYoutube size={40}/>
                    </a>
                </li>
                <li>
                    <a href='https://codepen.io/' rel='noopener noreferrer'>
                        <AiOutlineCodepen size={40}/>
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/_seung_nam/' rel='noopener noreferrer'>
                        <AiOutlineInstagram size={40}/>
                    </a>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header