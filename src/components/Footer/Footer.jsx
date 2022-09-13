import { useNavigate } from 'react-router-dom';
import style from './Footer.module.css';






export default function Footer () {
    const navigate = useNavigate()
    

    const redirectToContact = () => {
        navigate('/aboutme')
        window.scrollTo(0,document.body.scrollHeight)
    }

    return (
        <div className={style.contFooter}>
            <p onClick={redirectToContact}>Contact Me</p>
        </div>
    )
}