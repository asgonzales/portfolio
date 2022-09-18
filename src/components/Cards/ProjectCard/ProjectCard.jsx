import style from './ProjectCard.module.css';
import ReactDOM from 'react-dom';
import closeIcon from '../../../media/Close.png';
import GoToIcon from '../../../media/GoTo.png';
import githubIcon from '../../../media/Github.png';







export default function ProjectCard ({project, open}) {



    const openDeploy = () => {
        window.open(project.url)
    }
    const openRepositorie = () => {
        window.open(project.repo)
    }
    return ReactDOM.createPortal(
        <div className={style.contBack}>
            <div className={style.contProjectCard}>
                <div className={style.contExit}>
                    <div className={style.divButton}>
                        <button onClick={open}>
                            <img src={closeIcon} alt="Close" />
                        </button>
                    </div>
                </div>
                <div className={style.contProject}>
                    <div className={style.projectLeft}>
                        <div className={style.contImage}>
                            <img src={project.images} alt="screen" referrerPolicy="no-referrer"/>
                        </div>
                        <div className={style.buttonsLinks}>
                            <button onClick={openDeploy}><img src={GoToIcon} alt="deploy" />Go to the project</button>
                            <button onClick={openRepositorie}><img src={githubIcon} alt="repositorie" />Go to the repo</button>
                        </div>
                    </div>
                    <div className={style.projectRight}>
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
                </div>
            </div>
        </div>
    , document.getElementById('modals')
    )
}