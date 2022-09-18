import style from './Projects.module.css';
import data from '../../components/JSON/Projects.json';
import ProjectCard from '../../components/Cards/ProjectCard/ProjectCard.jsx';
import { useEffect } from 'react';
import ProjectPreview from '../../components/Cards/ProjectPreview/ProjectPreview';







export default function Projects () {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])



    return (
        <div name='projects' id='projects' className={style.contProjects}>
            <div className={style.contTitle}>
                <h1>My Projects</h1>
            </div>
            <div className={style.contCards}>
                {
                    data.map( (e, y) => {
                        return(
                            <ProjectPreview key={y} project={e} />
                        )
                    })
                }
            </div>
        </div>
    )
}