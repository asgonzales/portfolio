import { useEffect, useRef, useState } from 'react';
import style from './List.module.css';
import leftArrowIcon from '../../assets/ProjectsData/buttonsIcons/listArrow.svg';
import { calcElements, getVW, isMobileDevice } from '../../utils/functions';
import React from 'react';
import { ProjectCardInterface } from '../../utils/types';
import { ProjectCard } from '../ProjectCard/ProjectCard';

interface ListInterface {
    data: ProjectCardInterface[]
    fillBigCard: (a:ProjectCardInterface) => void
}


export const List = React.memo(({ data, fillBigCard }:ListInterface) => {
    
    const CARD_WIDTH = 14.8
    const listContent = useRef<HTMLDivElement>(null)
    const listRef = useRef<HTMLDivElement>(null)
    const rigthButtonImageRef = useRef<HTMLImageElement>(null)
    const leftButtonImageRef = useRef<HTMLImageElement>(null)
    const miniButtonsRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const [indice, setIndice] = useState(1)
    const [subLists, setSubLists] = useState(1)
    const [leftButtonHidden, setLeftButtonHidden] = useState(true)
    const [modalDiff, setModalDiff] = useState(false)
    const [elements, setElements] = useState(6)
    const [afterItems, setAfterItems] = useState<ProjectCardInterface[]>([])
    const [showedItems, setShowedItems] = useState<ProjectCardInterface[]>([])
    const [beforeItems, setBeforeItems] = useState<ProjectCardInterface[]>([])
    const [mobileList, setMobileList] = useState<ProjectCardInterface[]>([])
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setIsMobile(isMobileDevice())
        setElements(calcElements())
      }, [])
    
    useEffect(() => {
        if(isMobile && data && data.length > 0) {
            setMobileList(data.filter(el => el.name !== 'none'))
        }
    }, [isMobile, data.length])

    useEffect(() => {
        if(beforeItems.length > 0) setModalDiff(true)
    }, [beforeItems.length])

    useEffect(() => {
                setShowedItems(data.slice(0, elements))
                setAfterItems(data.slice(elements * indice, elements + (elements * 1)))
                setSubLists((data.length / elements))
    }, [data.length])

    useEffect(() => {
        if(miniButtonsRef.current && miniButtonsRef.current.children.length > 0) {
            for(let i = 0; i < miniButtonsRef.current.children.length; i++) {
                const buttonSelected = miniButtonsRef.current.children[i]
                if(buttonSelected) buttonSelected.className = style.miniButton
            }
            miniButtonsRef.current.children[indice - 1].className = style.miniButtonSelected
        }
    }, [indice])

    if(listRef.current) {
        listRef.current.onmouseenter = () => {
            if(miniButtonsRef.current) miniButtonsRef.current.style.visibility = isMobile ? 'hidden': 'visible'
            if(leftButtonImageRef.current) leftButtonImageRef.current.style.visibility = isMobile ? 'hidden': 'visible'
            if(rigthButtonImageRef.current) rigthButtonImageRef.current.style.visibility = isMobile ? 'hidden': 'visible'
        }
        listRef.current.onmouseleave = () => {
            if(miniButtonsRef.current) miniButtonsRef.current.style.visibility = 'hidden'
            if(leftButtonImageRef.current) leftButtonImageRef.current.style.visibility = 'hidden'
            if(rigthButtonImageRef.current) rigthButtonImageRef.current.style.visibility = 'hidden'
        }
    }

    const moveRight = () => {
        document.body.removeChild(document.getElementById('modals')!)
        const space = beforeItems.length === 0 ? ((getVW(CARD_WIDTH) * afterItems.length)) + (afterItems.length * 6) : (((getVW(CARD_WIDTH) * afterItems.length * 2)) + (afterItems.length * 6) * 2)
        if(listContent.current) {
            listContent.current.ontransitionstart = () => {
                setTimeout(() => {
                    setShowedItems(afterItems)       
                    setBeforeItems(showedItems)
                    if(indice === (subLists - 1)) {
                        setAfterItems(data.slice(0, elements))
                        setIndice(indice + 1)
                    }
                    else if(indice === subLists) {
                        setIndice(1)
                        setAfterItems(data.slice(elements, elements * 2))
                    }
                    else {
                        let firstElement = (elements * (indice + 1))
                        let lastElement = (elements + (elements * (indice + 1)))
                        setAfterItems(data.slice(firstElement, lastElement))
                        setIndice(indice + 1)
                    }
                }, 980);
            }
            listContent.current.style.transition = '1s'
            listContent.current.style.transform = `translateX(-${space}px)`
            listContent.current.ontransitionend = () => {
                if(leftButtonHidden) setLeftButtonHidden(false)
                if (listContent.current) {
                    listContent.current.ontransitionend = null
                    listContent.current.style.transition = '0s'
                    listContent.current.style.transform = `translateX(-${((getVW(CARD_WIDTH) * afterItems.length)) + (elements * 6)}px)`
                }
                const newModals = document.createElement('div')
                newModals.id = 'modals'
                document.body.insertBefore(newModals, document.getElementById('bigCardModals')!)
            }
        }
    }
    
    const moveLeft = () => {
        document.body.removeChild(document.getElementById('modals')!)
        if(listContent.current) {
            listContent.current.ontransitionstart = () => {
                setTimeout(() => {
                    setAfterItems(showedItems)
                    setShowedItems(beforeItems)
                    if(indice === 2) {
                        const items: ProjectCardInterface[] = data.slice(-elements, -1)
                        items.push(data[data.length - 1])
                        setBeforeItems(items)
                        setIndice(indice - 1)
                    }
                    else if(indice === 1){
        
                        let lastElement = elements * (indice - 2)
                        let firstElement = lastElement - elements
                        setBeforeItems(data.slice(firstElement, lastElement))
                        setIndice(subLists)
                    }
                    else {
                        let lastElement = elements * (indice - 2)
                        let firstElement = lastElement - elements
                        setBeforeItems(data.slice(firstElement, lastElement))
                        setIndice(indice - 1)
                    }
                }, 980)
            }
            listContent.current.style.transition = '1s'
            listContent.current.style.transform = `translateX(0px)`
            listContent.current.ontransitionend = () => {
                if (listContent.current) {
                    listContent.current.ontransitionend = null
                    listContent.current.style.transition = '0s'
                    listContent.current.style.transform = `translateX(-${((getVW(CARD_WIDTH) * afterItems.length)) + (elements * 6)}px)`
                }
                const newModals = document.createElement('div')
                newModals.id = 'modals'
                document.body.insertBefore(newModals, document.getElementById('bigCardModals')!)
            }
        }
    }
    
    return (
        <div className={style.ContList}>
            <div className={`${style.listTitle} listTitle`}>
                <div className={style.link}>
                    <h1 ref={titleRef}>
                        Projects
                    </h1>
                </div>
            </div>
            <div className={style.list} ref={listRef}>
                <div className={style.contentList} ref={listContent}>
                    {
                        !isMobile && beforeItems.length > 0 && beforeItems.map((el:ProjectCardInterface, index) => {
                            return (
                                <ProjectCard fillBigCard={fillBigCard} key={index} data={el} />
                            )
                        })
                    }
                    {
                        !isMobile && showedItems.length > 0 && showedItems.map((el:ProjectCardInterface, index) => {
                            if(index === 0)  {
                                return(
                                    <ProjectCard fillBigCard={fillBigCard} key={index} data={el} modalDiff={modalDiff} first />
                                )
                            }
                            if(index === showedItems.length - 1) {
                                return(
                                    <ProjectCard fillBigCard={fillBigCard} key={index} data={el} modalDiff={modalDiff} last />
                                )
                            }
                            return (
                                <ProjectCard fillBigCard={fillBigCard} key={index} data={el} modalDiff={modalDiff} />
                            )
                        })
                    }
                    {
                        !isMobile && afterItems.length > 0 && afterItems.map((el:ProjectCardInterface, index) => {
                            return(
                                <ProjectCard fillBigCard={fillBigCard} key={index} data={el} />
                            )
                        })
                    }
                    {
                        isMobile && mobileList.length > 0 && mobileList.map((el:ProjectCardInterface, index) => {
                            return(
                                <ProjectCard fillBigCard={fillBigCard} key={index} data={el} />
                                )
                            })
                        }
                </div>
                {
                    data.length > 0 &&
                    <>
                        <button
                        className={ 
                        leftButtonHidden ? 
                        style.leftButtonHidden : 
                        style.listButtonLeft} onClick={moveLeft}
                        >
                            <img ref={leftButtonImageRef} src={leftArrowIcon} alt="arrow" />
                        </button>
                        <button className={data.length > 6 ? style.listButtonRight : style.rightButtonHidden} onClick={moveRight} >
                            <img ref={rigthButtonImageRef} src={leftArrowIcon} alt="arrow" />
                        </button>
                    </>
                }
            </div>
        </div>
    )
})