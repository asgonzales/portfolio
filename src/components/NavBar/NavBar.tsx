import style from './NavBar.module.css';
import { useEffect, useRef, useState } from 'react';
import { debounce } from '../../utils/functions';



type NavBarProps = {
    color: string
    darkColor: string
    changeColors : () => void
}

export default function NavBar ({ color, darkColor, changeColors }:NavBarProps) {

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
            <div className={`${navBarScroll ? style.ContNavBarScroll : style.ContNavBar} 
             border-b-2 z-10`}
             style={{
                backgroundColor: darkColor,
                borderColor: color,
                transition: "all 5s ease"
             }}
            >
                <div onClick={openMobileMenuController} className={style.menu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`${style.homeImageLink}`}>
                    <span className="font-bold text-xl">Portfolio</span>
                </div>
                {/* <button className="w-32 mr-0 ml-auto" onClick={changeColors}>color</button> */}
                {
                    openMobileMenu &&
                    <div className={style.contLinks}
                    >
                        <div ref={openMobileMenuRef} className={style.mobileLinks}
                         style={{
                            transition: "all 5s ease",
                            backgroundColor: darkColor,
                            borderRight: `2px solid ${color}`
                         }}
                        >
                            <a href='#Start' className="w-44
                             font-bold p-4 text-xl"
                            >
                                Inicio
                            </a>
                            <a href='#Projects' className="w-44
                             font-bold p-4 text-xl"
                            >
                                Proyectos
                            </a>
                            <a  href='#Tech' className="w-44
                             font-bold p-4 text-xl"
                            >
                                Tecnologías
                            </a>
                            <a href="#ContactMe" className="w-44
                             font-bold p-4 text-xl"
                            >
                                Contáctame
                            </a>
                        </div>
                    </div>
                }
        </div>
        )
    }
    else {
        return (
            <div className={`${navBarScroll ? style.ContNavBarScroll : style.ContNavBar}  
             border-b-2`}
             style={{
                background: `${!navBarScroll ? `linear-gradient(0deg, transparent, black)` : darkColor}`,
                borderColor: color,
                transition: "all 5s ease"
             }}
            >
                <div className={style.links}
                 
                >
                    <div className={style.homeImageLink}>
                        <span>Portfolio</span>
                    </div>
                    <a href='#Start' className={style.link}>
                        Inicio
                    </a>
                    <a href='#Projects' className={style.link}>
                        Proyectos
                    </a>
                    <a  href='#Tech' className={style.link}>
                        Tecnologías
                    </a>
                    <a href="#ContactMe" className={style.link}>
                        Contáctame
                    </a>
                    {/* <button className="" onClick={changeColors}>color</button> */}
                </div>
            </div>
        )
    }
}