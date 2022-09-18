import HomeCard from '../../components/Cards/HomeCard/HomeCard';
import style from './Home.module.css';
import logo from '../../media/negative.png'








export default function Home () {




    return (
        <div className={style.contHome}>
            <div className={style.divImg}>
                <div className={style.contImage}>
                    <img title='I like cats :3' src={logo} alt="logo" />
                </div>
            </div>
            <div className={style.divText}>
                <div>
                    <HomeCard/>
                </div>
            </div>
        </div>
    )
}