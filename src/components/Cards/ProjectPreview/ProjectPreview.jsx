import { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import style from './ProjectPreview.module.css';
import GoTo from '../../../media/GoTo.png';
import github from '../../../media/Github.png';








export default function ProjectPreview ({project}) {

    const [opened, setOpened] = useState(false)

    const openModal = () => {
        setOpened(op => !op)
    }

    const redirectToDeploy = () => {
        window.open(project.url)
    }
    const redirectToGithub = () => {
        window.open(project.repo)
    }


    return (
        <div className={style.contProjectPreview}>
            <div className={style.divImg}>
                <img src={project.images} alt="image" />
            </div>
            <div className={style.divTitle}>
                <h1>{project.name}</h1>
                <div className={style.buttonsRed}>
                    <button onClick={redirectToDeploy} className={style.button} >
                        <img src={GoTo} alt="Goto" title='Go to project' />
                    </button>
                    <button onClick={redirectToGithub} className={style.button} >
                        <img src={github} alt="Repositorie" title='Go to repositorie' />
                    </button>
                </div>
                <button className={style.button} onClick={openModal}>Details...</button>
                {
                    opened?
                    <ProjectCard project={project} open={openModal} />
                    : <></>
                }
            </div>
        </div>
    )
}