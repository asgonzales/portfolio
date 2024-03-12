import skills from '../../assets/ProjectsData/Skills.json'
import { SkillCard } from '../SkillCard/SkillCard'

type SkillListProps = {
    color: string
    darkColor: string
    lightColor: string
}

export const SkillsList = ({ color, darkColor, lightColor }:SkillListProps) => {
    return(
        <div id='Tech' className="w-full p-4
         flex items-center justify-center gap-2 flex-col
         border-y-2 relative"
         style={{
            transition: "all 5s ease",
            borderColor: color
         }}
        >
            <div className="w-full p-2">
                <h1 className="font-bold text-3xl"
                 style={{
                    transition: "all 5s ease",
                    color: `rgb(${lightColor})`
                 }}
                >Tecnologías</h1>
            </div>
            <div className="w-full flex items-center justify-evenly flex-wrap">
                {
                    skills.map((el, index) => {
                        return(
                          <SkillCard key={index} color={color} darkColor={darkColor} skill={el} />
                        )
                      })
                }
            </div>
            <div className="absolute w-40 h-40 z-0 top-2
             rounded-full shadow-xl border-2 blur-md"
             style={{
                transition: "all 5s ease",
                borderColor: color,
                boxShadow: `0 3px 15px ${color}`,
             }}></div>
            <div className="absolute w-40 h-40 z-0 bottom-2
             rounded-full shadow-xl border-2 blur-md"
             style={{
                transition: "all 5s ease",
                borderColor: color,
                boxShadow: `0 3px 15px ${color}`,
             }}></div>
        </div>
    )
}