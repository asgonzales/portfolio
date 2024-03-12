import data from '../../assets/ProjectsData/Projects.json'
import { ProjectCardInterface } from '../../utils/types'
import ProjectCard from '../ProjectCard/ProjectCard'

type ProjectListProps = {
    color: string
    darkColor: string
    lightColor: string
    openCard: (a:ProjectCardInterface) => void
}

export default function ProjectsList ({ color, darkColor, lightColor, openCard }:ProjectListProps) {
    return (
        <section id="Projects" className="w-full min-h-screen border-y-2
         flex flex-col items-center justify-evenly gap-4 p-4 relative z-0 overflow-hidden"
         style={{
            transition: "all 5s ease",
            borderColor: color,
         }}
        >
            <h1 className="text-3xl font-bold mb-4"
             style={{
                transition: "all 5s ease",
                color: `rgb(${lightColor})`,
             }}
            >Proyectos</h1>
            {
                data.map((el, index) => {
                    return(
                        <ProjectCard key={index} project={el} color={color} darkColor={darkColor} lightColor={lightColor} openInfo={openCard}/>
                    )
                })
            }
            <div className="absolute w-full h-full  flex items-center justify-evenly flex-col z-0">
                <div className="w-48 h-48 z-0
                rounded-full shadow-xl border-2 blur-md self-start"
                style={{
                    transition: "all 5s ease",
                    borderColor: color,
                    boxShadow: `0 3px 15px ${color}`,
                }}></div>
                <div className="w-48 h-48 z-0
                rounded-full shadow-xl border-2 blur-md"
                style={{
                    transition: "all 5s ease",
                    borderColor: color,
                    boxShadow: `0 3px 15px ${color}`,
                }}></div>
                <div className="w-48 h-48 z-0
                rounded-full shadow-xl border-2 blur-md self-end"
                style={{
                    transition: "all 5s ease",
                    borderColor: color,
                    boxShadow: `0 3px 15px ${color}`,
                }}></div>
            </div>
        </section>
    )
}