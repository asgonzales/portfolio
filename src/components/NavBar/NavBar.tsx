import style from './NavBar.module.css';
import { useEffect, useRef, useState } from 'react';
import { debounce } from '../../utils/functions';





export default function NavBar () {

    const openMobileMenuRef = useRef<HTMLDivElement>(null)
    const [isMobile, setIsMobile] = useState(false)
    const [openMobileMenu, setOpenMobileMenu] = useState(false)
    const [navBarScroll, setNavBarScroll] = useState(false)

    window.addEventListener('resize', debounce(() => {
        if(window.outerWidth > 768) {
            setIsMobile(false)
        }
        else {
            setIsMobile(true)
        }
    }, 500))

    useEffect(() => {
        window.addEventListener('scroll', changeBackground)
        if(window.outerWidth > 768) {
            setIsMobile(false)
        }
        else {
            setIsMobile(true)
        }
    }, [])

    const changeBackground = () => {
        if(window.scrollY > 0) setNavBarScroll(true)
        else setNavBarScroll(false)
    }

    const openMobileMenuController = () => {
        if(openMobileMenu) {
            if(openMobileMenuRef.current) {
                openMobileMenuRef.current.style.transition = '.2s'
                openMobileMenuRef.current.style.transform = 'translateX(-100%)'
                setTimeout(() => {
                    setOpenMobileMenu(false)
                }, 200)
            }
        }
        else setOpenMobileMenu(true)
    }
    

    if(isMobile) {
        return (
            <div className={navBarScroll ? style.ContNavBarScroll : style.ContNavBar}>
                <div onClick={openMobileMenuController} className={style.menu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={style.homeImageLink}>
                    <span>Portfolio</span>
                </div>
                {
                    openMobileMenu &&
                    <div className={style.contLinks}>
                        <div ref={openMobileMenuRef} className={style.mobileLinks}>
                            <div className={style.userMenuMobile}>

                            </div>
                            <a href='#Projects' className={style.link}>
                                Projects
                            </a>
                            <a  href='#Tech' className={style.link}>
                                Technologies
                            </a>
                            <a href='#AboutMe' className={style.link}>
                                About me
                            </a>
                            <a href="#ContactMe" className={style.link}>
                                Contact me
                            </a>
                        </div>
                    </div>
                }
        </div>
        )
    }
    else {
        return (
            <div className={navBarScroll ? style.ContNavBarScroll : style.ContNavBar}>
                <div className={style.links}>
                    <div className={style.homeImageLink}>
                        <span>Portfolio</span>
                    </div>
                    <a href='#Projects' className={style.link}>
                        Projects
                    </a>
                    <a  href='#Tech' className={style.link}>
                        Technologies
                    </a>
                    <a href='#AboutMe' className={style.link}>
                        About me
                    </a>
                    <a href="#ContactMe" className={style.link}>
                        Contact me
                    </a>
                </div>
            </div>
        )
    }
}