import { SkillsCardInterface } from '../../utils/types';
import style from './SkillCard.module.css';




interface SkillCardProps {
    skill: SkillsCardInterface
}



export const SkillCard = ({skill}:SkillCardProps) => {




    return (
        <div className={style.contSkill}>
            <div className={style.contImg}>
                <img src={skill.img} alt={skill.name} />
            </div>
            <div className={style.contName}>
                <h3>{skill.name}</h3>
            </div>
        </div>
    )
}