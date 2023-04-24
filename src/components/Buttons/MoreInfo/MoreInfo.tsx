import style from './MoreInfo.module.css'
import infoIcon from '/src/assets/ProjectsData/buttonsIcons/info.svg'

interface MoreInfoProps {
    click:() => void
}
export const MoreInfo = ({click}:MoreInfoProps) => {
    return(
        <div onClick={() => click()} className={style.ContMoreInfo}>
            <div className={style.imgDiv}>
                <img src={infoIcon} alt="More" />
            </div>
            <div className={style.textDiv}>
                <span>More information</span>
            </div>
        </div>
    )
}