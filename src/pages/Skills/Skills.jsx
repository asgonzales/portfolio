import style from './Skills.module.css';
import dataSkills from '../../components/JSON/Skills.json';
import SkillCard from '../../components/Cards/SkillCard/SkillCard';







export default function Skills () {




    return(
        <div className={style.contSkills}>
            <div className={style.contTitle}>
                <h1>Skills</h1>
            </div>
            <div className={style.contCards}>
                {
                    dataSkills?.map(e => {
                        return (
                            <SkillCard skill={e}/>
                        )
                    })
                }
            </div>
        </div>
    )
}