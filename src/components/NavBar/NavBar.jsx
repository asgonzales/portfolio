import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';
import icon from '../../media/negative50.png';







export default function NavBar () {




    return (
        <div className={style.contNavBar}>
            <NavLink to='/'>
                <img src={icon} alt='icon' className={style.image} />
            </NavLink>
            <NavLink to ='/' className={ ({isActive}) => isActive?style.activeLink:style.link} >
                <p>Home</p>
            </NavLink>
            <NavLink to='/projects' className={ ({isActive}) => isActive?style.activeLink:style.link} >
                <p>Projects</p>
            </NavLink>
            <NavLink to='/skills' className={ ({isActive}) => isActive?style.activeLink:style.link} >
                <p>Skills</p>
            </NavLink>
            <NavLink to='/aboutme' className={ ({isActive}) => isActive?style.activeLink:style.link} >
                <p>About Me</p>
            </NavLink>
        </div>
    )
}