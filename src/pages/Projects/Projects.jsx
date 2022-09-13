import style from './Projects.module.css';
import data from '../../components/JSON/Projects.json';
import ProjectCard from '../../components/Cards/ProjectCard/ProjectCard.jsx';







export default function Projects () {




    return (
        <div className={style.contProjects}>
            <div className={style.contTitle}>
                <h1>My Projects</h1>
            </div>
            <div className={style.contCards}>
                {
                    data.map( (e, y) => {
                        return(
                            <ProjectCard key={y} project={e} />
                        )
                    })
                }
            </div>
        </div>
    )
}