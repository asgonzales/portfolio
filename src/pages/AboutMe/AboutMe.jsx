import ContactMe from '../../components/ContactMe/ContactMe';
import Bio from '../../components/Bio/Bio';
import style from './AboutMe.module.css';








export default function AboutMe () {




    return(
        <div className={style.contAboutMe}>
            <Bio />
            <ContactMe/>
        </div>
    )
}