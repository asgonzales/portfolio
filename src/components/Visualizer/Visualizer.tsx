import style from './Visualizer.module.css'
import data from '../../assets/ProjectsData/Projects.json'
import { OpenProject } from '../Buttons/OpenProject/OpenProject'
import { MoreInfo } from '../Buttons/MoreInfo/MoreInfo'
import { ImageViewer } from '../ImageViewer/ImageViewer'
import { List } from '../List/List'
import { ProjectCardInterface } from '../../utils/types'

interface VisualizerProps {
    setBigCardData: (a:ProjectCardInterface) => void
}

export const Visualizer = ({ setBigCardData }:VisualizerProps) => {
    const setBigCardInfo = () => {
        setBigCardData(data[0])
    }
    return(
        <div id='Projects' className={style.ContVisualizer}>
            <div className={style.imageDiv}>
                <ImageViewer imgs={data[0].images}/>
            </div>
            <div className={style.infoDiv}>
                <div className={style.head}>
                    <span>Last Project</span>
                </div>
                <div className={style.title}>
                    <h3>{data[0].name}</h3>
                </div>
                <div className={style.overview}>
                    <p>{data[0].description}</p>
                </div>
                <div className={style.buttons}>
                    <OpenProject url={data[0].url}/>
                    <MoreInfo click={setBigCardInfo} />
                </div>
            </div>
            <div className={style.listDiv}>
                <List data={data} fillBigCard={setBigCardData} />
            </div>
        </div>
    )
}