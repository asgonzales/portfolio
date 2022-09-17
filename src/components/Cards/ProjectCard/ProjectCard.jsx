import style from './ProjectCard.module.css';
import ReactDOM from 'react-dom';







export default function ProjectCard ({project}) {



    const redirect = () => {
        window.open(project.url)
    }
    return (
        <div className={style.contProjectCard}>
            <div className={style.contImage}>
                <img src={project.images} alt="screen" referrerPolicy="no-referrer"/>
                <button onClick={redirect} className={style.goToButton}>Open project</button>
            </div>
            <div className={style.contInfo}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                {
                    project.api?<p>made with {project.api} API</p>:<></>
                }
                <div className={style.tech}>
                    {
                        project.tech?.map((e, y) => {
                            return (
                                <span key={y}>{e}</span>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    // , document.getElementById('modals'))
    )
}