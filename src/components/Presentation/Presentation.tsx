import style from './Presentation.module.css'
import catIcon from '/src/assets/ProjectsData/buttonsIcons/negative.jpg'


export const Presentation = () => {
    return(
        <div className={style.ContPresentation}>
            <div className={style.textDiv}>
                <h3>Hello There! My name is Sebastian Gonzales</h3>
                <p>and I'm a Full Stack Developer from Argentina. Welcome to my portfolio!</p>
            </div>
            <div className={style.catDiv}>
                <img src={catIcon} alt="cat" />
            </div>
        </div>
    )
}