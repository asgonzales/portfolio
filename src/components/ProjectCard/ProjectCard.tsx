import { ProjectCardInterface } from "../../utils/types"
import { ImageViewer } from "../ImageViewer/ImageViewer"

type ProjectCardProps = {
    project:ProjectCardInterface
    color: string
    darkColor: string
    lightColor: string
    openInfo:(a:ProjectCardInterface) => void
}
export default function ProjectCard({ project, color, darkColor, lightColor, openInfo }:ProjectCardProps) {
    return(
        <section className="w-full min-h-96 h-auto border-2 flex flex-col items-center justify-center gap-2 p-2
         md:border-4 md:flex-row-reverse md:min-h-32 md:h-60 md:w-auto z-10
         "
         style={{
            transition: "all 5s ease",
            borderColor: color,
            boxShadow: `inset 0 0 7px  ${color}, 0 0 7px rgb(${lightColor}, .3)`
         }}
        >
            <div className="h-1/2 w-full relative overflow-hidden
            md:h-full md:w-96"
            >
                <ImageViewer imgs={project.images} />
            </div>
            <div className="h-1/2 w-full flex flex-col items-center gap-2 p-2
             md:h-full md:w-96"
            >
                <h3 className="text-3xl font-semibold"
                 style={{
                    transition: "all 5s ease",
                    color: `rgb(${lightColor})`
                 }}
                >{project.name}</h3>
                <p className="">{project.shortDesc}</p>
                <div className="flex flex-col items-center gap-2 w-full p-2 mt-2
                 md:flex-row md:justify-evenly"
                >
                    <button
                    className="text-lg font-semibold py-2 px-4 border-2 rounded-md
                     transition-all
                     hover:px-6
                     "
                     style={{
                        transition: "all 5s ease",
                        borderColor: color,
                        backgroundColor: color
                     }}
                     onClick={() => openInfo(project)}
                    >Ver más</button>
                    <a 
                     className="text-lg font-bold py-2 px-4 border-2 rounded-md
                     transition-all
                     hover:px-6
                     "
                     href={project.url}
                     target='_blank' rel="noopener noreferrer"
                     style={{
                        transition: "all 5s ease",
                        borderColor: "white",
                        backgroundColor: "white",
                        color: darkColor,
                     }}
                    >Ir al proyecto</a>
                </div>
            </div>
        </section>
    )
}