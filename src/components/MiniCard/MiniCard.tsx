import { useEffect, useRef } from 'react';
import style from './MiniCard.module.css';
import ReactDOM from 'react-dom';
import openIcon from '../../assets/ProjectsData/buttonsIcons/GoTo.png'
import mobileIcon from '../../assets/ProjectsData/buttonsIcons/Mobile.png'
import pcIcon from '../../assets/ProjectsData/buttonsIcons/Desktop.png'
import arrowIcon from '../../assets/ProjectsData/buttonsIcons/listArrow.svg'
import { ProjectCardInterface } from '../../utils/types';
import { isBigCardOpen } from '../../utils/functions';


interface Props {
    first?:boolean
    last?:boolean
    position: {
        top:number
        left:number
    }
    data: ProjectCardInterface
    close:() => void
    fillBigCard: (a:ProjectCardInterface) => void
}

export const MiniCard = (({ data, first, last, position, close, fillBigCard }:Props) => {

    const miniCardRef = useRef<HTMLDivElement>(null)
    const textoRef = useRef<HTMLDivElement>(null)

    const modalsElement = document.getElementById('modals')
    
    useEffect(() => {
        setTimeout(() => {
            if(textoRef.current) {
                if(textoRef.current.offsetHeight === 0 && !isBigCardOpen()) close()
            }
        }, 2000)
    }, [])

    useEffect(() => {
        if(miniCardRef.current) {
            miniCardRef.current.onmouseleave = () => {
                if(!isBigCardOpen()) {
                    setTimeout(() => {
                        close()
                    }, 300)
                }
            }
        }
    }, [miniCardRef.current])

    const openBigCard = () => {
        fillBigCard(data)
        if(!isBigCardOpen()) {
            setTimeout(() => {
                close()
            }, 300)
        }
    }

    if(modalsElement) return ReactDOM.createPortal(
        <div id='miniCardModal' ref={miniCardRef} className={style.ContMiniCard} style={{
            top: position.top,
            left: position.left
        }} >
            <div className={`${style.Card}  ${first ? style.first : last ? style.last : ''}`}>
                <div className={style.imagen}>
                    <h1>{data.name}</h1>
                    <img src={data.images[0]} alt="cover" />
                </div>
                <div ref={textoRef} className={style.texto}>
                    <div className={style.controls}>
                        <div>
                            <a href={data.url} target='_blank' rel="noopener noreferrer">
                                <img src={openIcon} alt="abrir" className={style.firstControl} />
                            </a>
                        </div>
                        <div>
                            <img src={mobileIcon} className={data.mobile ? style.able : style.disable} alt="celular" />
                        </div>
                        <div>
                            <img src={pcIcon} className={data.desktop ? style.able : style.disable} alt="pc" />
                        </div>
                        <div onClick={openBigCard}>
                            <img src={arrowIcon} alt="más" className={style.lastControl} />
                        </div>
                    </div>
                    <div className={style.secondLine}>
                        <h2>{data.name}</h2>
                    </div>
                </div>
            </div>
        </div>
    , modalsElement)
    else return <></>
})