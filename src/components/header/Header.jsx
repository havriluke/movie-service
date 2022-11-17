import React, { useEffect, useRef } from 'react'
import './header.scss'
import {useLocation, useNavigate} from 'react-router-dom'

const headerNav = [
    {
        display: 'Home',
        path: '/'
    }, {
        display: 'Movie',
        path: '/movie'
    }, {
        display: 'TV Series',
        path: '/tv'
    },
]

const Header = () => {
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const headerRef = useRef()

    const active = headerNav.findIndex(e => e.path === pathname)

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        }
        window.addEventListener('scroll', shrinkHeader)
        return () => {
            window.removeEventListener('scroll', shrinkHeader)
        }
    }, [])

    return (
        <div ref={headerRef} className='header'>
            <div className="header__wrap container">
                <div className="logo" onClick={() => {navigate('/')}}>
                    <i className='bx bx-movie-play logo'></i>
                    movee
                </div>
                <ul className="header__nav">
                    {headerNav.map((e, i) => (
                        <li
                            key={i}
                            className={`${i === active ? 'active' : ''}`}
                            onClick={() => {navigate(e.path)}}
                        >
                            {e.display}
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
    )
}

export default Header