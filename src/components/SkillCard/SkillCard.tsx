import { SkillsCardInterface } from '../../utils/types';
import style from './SkillCard.module.css';




interface SkillCardProps {
    skill: SkillsCardInterface
    color: string
    darkColor: string
}



export const SkillCard = ({skill, color, darkColor}:SkillCardProps) => {




    return (
        <div className={`${style.contSkill}
         border-2`}
         style={{
            transition: "all 5s ease",
            borderColor: darkColor,
            backgroundColor: color
         }}
        >
            <div className={style.contImg}>
                <img src={skill.img} alt={skill.name}
                 style={{
                    filter: "drop-shadow(0 0 1px 5px white)"
                 }}
                />
            </div>
            <div className={`${style.contName}`}
             style={{
                transition: "all 5s ease",
                background: darkColor
             }}
            >
                <h3 className="font-bold">{skill.name}</h3>
            </div>
        </div>
    )
}