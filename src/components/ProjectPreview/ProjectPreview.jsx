import { useState } from 'react';
import ProjectCard from '../Cards/ProjectCard/ProjectCard';
import style from './ProjectPreview.module.css';








export default function ProjectPreview ({project}) {

    const [opened, setOpened] = useState(false)

    const openModal = () => {
        setOpened(op => !op)
    }



    return (
        <div className={style.contProjectPreview}>
            <div className={style.divImg}>
                <img src={project.images} alt="image" />
            </div>
            <div className={style.divTitle}>
                <h3>{project.name}</h3>
                <button onClick={openModal}>Details...</button>
                {
                    opened?
                    <ProjectCard project={project} open={setOpened} />
                    : <></>
                }
            </div>
        </div>
    )
}