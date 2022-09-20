import style from './NotFoundCard.module.css';
import logo from '../../../media/negative.svg';







export default function NotFoundCard () {




    return (
        <div className={style.contNotFoundCard}>
            <div className={style.divImg}>
                <img src={logo} alt="Not found" />
            </div>
            <div className={style.divText}>
                <h1>Sorry, we couldn't find that page.</h1>
            </div>
        </div>
    )
}