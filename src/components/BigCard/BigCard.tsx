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
}

export default function BigCard ({ data, closeBigCard }:BigCardProps) {

    const cardContent = useRef<HTMLDivElement>(null)
    const descriptionRef = useRef<HTMLParagraphElement>(null)
    const divDescriptionRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const [openDescription, setOpenDescription] = useState(false)
    const [descriptionIsBigger, setDescriptionIsBigger] = useState(false)

    useEffect(() => {
        if(data.name) document.title = `${data.name} - Portfolio`
    }, [data.name])

    useEffect(() => {
        document.body.style.overflowY = 'hidden'
        return function out () {
            document.body.style.overflowY = 'scroll'
        }
    }, [])

    useEffect(() => {
        if (descriptionRef.current && divDescriptionRef.current) {
            if(descriptionRef.current.clientHeight > divDescriptionRef.current.clientHeight) setDescriptionIsBigger(true)
            else setDescriptionIsBigger(false)
        }
    }, [descriptionRef.current?.clientHeight, divDescriptionRef.current?.clientHeight])

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
            <div ref={contentRef} className={style.bigCardContent}>
                <div className={style.imageDiv}>
                    <ImageViewer imgs={data.images} />
                    <div className={style.shadow}>
                        <div className={style.movieControls}>
                            <h2>{data.name}</h2>
                            <div className={style.controlsButtons}>
                                <div>
                                    <OpenProject url={data.url}/>
                                </div>
                                <div>
                                {
                                    data.repo !== '' &&
                                    <OpenProject repo url={data.repo} />
                                }
                                </div>
                            </div>
                        </div>
                        <div className={style.cardControls}>
                            <button className={style.closeButton} onClick={closeModal}>
                                <img src={closeIcon} alt="close" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={style.infoDiv}>
                    <div className={style.infoLeft}>
                        <div className={style.infoStats}>
                            <div>
                                <img src={mobileIcon} className={data.mobile ? style.imgEnabled : style.imgDisabled} alt="celular" />
                            </div>
                            <div>
                                <img src={desktopIcon} className={data.desktop ? style.imgEnabled : style.imgDisabled} alt="pc" />
                            </div>
                        </div>
                        <div ref={divDescriptionRef} onClick={openDescriptionHandler} className={!openDescription ? style.description : style.descriptionOpen}>
                            <p ref={descriptionRef}>{data.description}</p>
                            {
                                data.description && descriptionIsBigger && !openDescription ? 
                                <div className={style.openDescription}></div>
                                : <></>
                            }
                        </div>
                    </div>
                    <div className={style.infoRight}>
                        <div>
                            <span>Tecnologías: </span>
                            <span>{data.tech.join(', ')}</span>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div className={style.aboutDiv}>
                    <div>
                        <span>
                        </span>
                        <span>
                        </span>
                        <span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    , document.getElementById('bigCardModals')!)
}