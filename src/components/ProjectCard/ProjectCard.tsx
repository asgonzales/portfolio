import React, { useEffect, useRef, useState } from 'react'
import { acumulativeOffset, debounce, getVW, isMobileDevice } from '../../utils/functions'
import { ProjectCardInterface } from '../../utils/types'
import { MiniCard } from '../MiniCard/MiniCard'
import style from './ProjectCard.module.css'


interface ProjectCardProps {
    data: ProjectCardInterface
    modalDiff?: boolean
    first?: boolean
    last?: boolean
    fillBigCard: (a:ProjectCardInterface) => void
}

export const ProjectCard = React.memo(({ data, modalDiff, first, last, fillBigCard }:ProjectCardProps) => {

    const previewCardRef = useRef<HTMLDivElement>(null) 
    const [isMobile, setIsMobile] = useState(false)
    const [openPortal, setOpenPortal] = useState(false)
    const [offsets, setOffsets] = useState({
        top: 0,
        left: 0 
    })
    const [diff, setDiff] = useState(0)

    useEffect(() => {
        setIsMobile(isMobileDevice())
        window.addEventListener('resize', debounce(() => {
            setIsMobile(isMobileDevice())
            if(previewCardRef.current) setOffsets(acumulativeOffset(previewCardRef.current))
        }, 500))
    }, [])
    
    //Apertura del modal
    useEffect(() => {
        if(previewCardRef.current) { 
            if(!isMobile) {
                previewCardRef.current.onmouseenter = () => {
                    if(previewCardRef.current) {
                        setOffsets(acumulativeOffset(previewCardRef.current))
                        if(modalDiff) {
                            const dif = ((getVW(14.8) * - 6) - 36) //Formula donde 6 es la cantidad de cards renderizadas, 36 es el gap de la lista (6) por la cantidad de cartas mostradas
                            setDiff(dif)
                        }
                    }
                    setOpenPortal(true)
                }
            }
            else previewCardRef.current.onmouseenter = null
        }
    }, [previewCardRef.current, isMobile, modalDiff])

    const closePortal = () => {
        setOpenPortal(false)
    }
    const goToDetails = () => {
        if(isMobile && data) {
            fillBigCard(data)
        }
    }
    return(
        <div ref={previewCardRef} className={data.name === 'none' ? style.none : style.ContProjectCard} onClick={goToDetails} >
            {
                data && !openPortal &&
                <img src={data.images[0]} alt={data.name} />
            }
            {
                data.name !== 'none' &&
                <MiniCard fillBigCard={fillBigCard} data={data} position={ {top: offsets.top, left: offsets.left + diff}} close={closePortal} first={first} last={last}/>
            }
        </div>
    )
})