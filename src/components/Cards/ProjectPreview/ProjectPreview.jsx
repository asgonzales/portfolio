import { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import style from './ProjectPreview.module.css';
import GoTo from '../../../media/GoTo.png';
import github from '../../../media/Github.png';
import iconMobile from '../../../media/Mobile.png';
import iconDesktop from '../../../media/Desktop.png';








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
                <img src={project.images} alt="screen" />
            </div>
            <div className={style.divTitle}>
                <h1>{project.name}</h1>
                <div className={style.buttonsRed}>
                    <div>
                        <img src={iconMobile} alt="Mobile responsive" className={project.mobile?style.responsive:style.notResponsive} />
                        <img src={iconDesktop} alt="Desktop responsive" className={project.desktop?style.responsive:style.notResponsive} />
                    </div>
                    <div>
                        <button onClick={redirectToDeploy} className={style.button} >
                            <img src={GoTo} alt="Goto" title='Go to project' />
                        </button>
                        <button onClick={redirectToGithub} className={style.button} >
                            <img src={github} alt="Repositorie" title='Go to repositorie' />
                        </button>
                    </div>
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