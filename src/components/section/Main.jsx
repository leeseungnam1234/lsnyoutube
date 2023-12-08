import React from 'react'
import {Helmet,HelmetProvider} from'react-helmet-async'

import Header from './Header'
import Footer from './Footer'
import Search from './Search'
import ScrollTo from '../../utils/scrollTo'

const Main = (props) => {

    return (
        <HelmetProvider>
            <ScrollTo/>
             <Helmet 
                titleTemplate="%s | 이승남 Youtube" 
                defaultTitle="이승남 Youtube" 
                defer={false}
            >
                {props.title && <title>{props.title}</title>}
                <meta name="description" content={props.description} />
            </Helmet>

            <Header/>
            <main id='main' role='main'>
                <Search/>
                {props.children}
            </main>
            <Footer/>
        </HelmetProvider>
    )
}

export default Main