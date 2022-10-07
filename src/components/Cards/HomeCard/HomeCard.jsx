import style from './HomeCard.module.css';








export default function HomeCard () {




    return (
        <div className={style.contHomeCard}>
            <h3>Hello there! My name is Sebastian Gonzales</h3>
            <p>and I'm a Full Stack Developer from Argentina.</p>
            <p>Welcome to my portfolio!</p>
            <span>07/10/2022: Working on a new versión of this portfolio {'>:)'}</span>
        </div>
    )
}