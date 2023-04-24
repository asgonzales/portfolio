import style from './OpenProject.module.css'
import openIcon from '/src/assets/ProjectsData/buttonsIcons/GoTo.png'
import repoIcon from '/src/assets/ProjectsData/buttonsIcons/Github.png'

interface OpenProjectProps {
    url:string
    repo?:boolean
}

export const OpenProject = ({ url, repo }:OpenProjectProps) => {
    return(
        <div className={repo ? style.ContOpenRepo : style.ContOpenProject}>
            <a href={url} target='_blank' rel="noopener noreferrer">
                <div className={repo ? style.textRepoDiv : style.textDiv}>
                    <span>{repo ? 'Repo' : 'Open'}</span>
                </div>
                <div className={repo ? style.imgRepoDiv : style.imgDiv}>
                    <img src={repo ? repoIcon : openIcon} alt="Open" />
                </div>
            </a>
        </div>
    )
}