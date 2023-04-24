import style from './SkillsList.module.css'
import skills from '../../assets/ProjectsData/Skills.json'
import { SkillCard } from '../SkillCard/SkillCard'


export const SkillsList = () => {
    return(
        <div id='Tech' className={style.ContSkillsList}>
            <div>
                <h3>Technologies</h3>
            </div>
            <div>
                {
                    skills.map((el, index) => {
                        return(
                          <SkillCard key={index} skill={el} />
                        )
                      })
                }
            </div>
        </div>
    )
}