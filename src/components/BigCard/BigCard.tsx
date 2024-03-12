import style from './BigCard.module.css';
import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { ProjectCardInterface } from '../../utils/types';
import closeIcon from '../../assets/ProjectsData/buttonsIcons/Close.png'
import { OpenProject } from '../Buttons/OpenProject/OpenProject';
import mobileIcon from '../../assets/ProjectsData/buttonsIcons/Mobile.png'
import desktopIcon from '../../assets/ProjectsData/buttonsIcons/Desktop.png'
import { ImageViewer } from '../ImageViewer/ImageViewer';
interface BigCardProps {
    data:ProjectCardInterface
    closeBigCard: () => void
    color: string
    darkColor: string
}

export default function BigCard ({ data, closeBigCard, color, darkColor }:BigCardProps) {

    const cardContent = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const [openDescription, setOpenDescription] = useState(false)

    useEffect(() => {
        if(data.name) document.title = `${data.name} - Portfolio`
    }, [data.name])

    useEffect(() => {
        document.body.style.overflowY = 'hidden'
        return function out () {
            document.body.style.overflowY = 'scroll'
        }
    }, [])


    const closeModal = () => {
        if(contentRef.current) {
            contentRef.current.style.transition = '.5s'
            contentRef.current.style.transform = 'scale(.2)'
            contentRef.current.style.filter = 'opacity(0)'
            contentRef.current.ontransitionend = () => {
                closeBigCard()
            }
        }
    }
    const openDescriptionHandler = () => {
        setOpenDescription(!openDescription)
    }

    return ReactDOM.createPortal(
        <div ref={cardContent} className={style.ContBigCard}>
            <div ref={contentRef} className={`${style.bigCardContent} `}
             style={{
                transition: "all 5s ease",
                backgroundColor: darkColor
             }}
            >
                <div className={style.imageDiv}>
                    <ImageViewer imgs={data.images} />
                    <div className={style.shadow}>
                        <div className={style.movieControls}>
                            <h2 className="text-3xl font-bold m-8"
                             style={{
                                transition: "all 5s ease",
                                color: color,
                             }}
                            >{data.name}</h2>
                            <div className={style.controlsButtons}>
                                <div>
                                    <OpenProject color={color} url={data.url}/>
                                </div>
                                <div>
                                {
                                    data.repo !== '' &&
                                    <OpenProject color={color} repo url={data.repo} />
                                }
                                </div>
                            </div>
                        </div>
                        <div className={style.cardControls}>
                            <button className={style.closeButton} onClick={closeModal}>
                                <img src={closeIcon} alt="close"
                                 style={{
                                    filter: "drop-shadow(0 1px 1px white) drop-shadow(0 -1px 1px white)"
                                 }}
                                />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={style.infoDiv}>
                    <div className={style.infoLeft}>
                        <div className={`${style.infoStats} my-4` }>
                            <div>
                                <img src={mobileIcon} className={data.mobile ? style.imgEnabled : style.imgDisabled} alt="celular" />
                            </div>
                            <div>
                                <img src={desktopIcon} className={data.desktop ? style.imgEnabled : style.imgDisabled} alt="pc" />
                            </div>
                        </div>
                        <div onClick={openDescriptionHandler} className={style.descriptionOpen}>
                            <p>{data.description}</p>
                        </div>
                    </div>
                    <div className={style.infoRight}>
                        <div>
                            <span className="text-lg font-semibold" 
                             style={{
                                transition: "all 5s ease",
                                color: color
                             }}
                            >Tecnologías: </span>
                            <span className="text-lg font-semibold">{data.tech.join(', ')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    , document.getElementById('bigCardModals')!)
}