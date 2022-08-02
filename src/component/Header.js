import './Header.css'
import $ from 'jquery'
import React, { forwardRef, useEffect } from "react"
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Header = (props) => {
    return <div id="header">
        <header>
            <h2>Chanwoo Kim</h2>
            <nav>
                <ul>
                    <li onClick={() => {
                        scroll.scrollTo(0)
                    }}>Main</li>
                    <li onClick={() => {
                        scroll.scrollTo(window.innerHeight)
                    }}>Project</li>
                </ul>
            </nav>
        </header>
    </div>
}

export default Header