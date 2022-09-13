import style from './SkillCard.module.css';








export default function SkillCard ({skill}) {




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