import { useEffect, useRef, useState } from 'react'
import style from './ImageViewer.module.css'

interface ImageViewerProps {
    imgs: string[]
}

export const ImageViewer = ({ imgs }:ImageViewerProps) => {

    const containerRef = useRef<HTMLDivElement>(null)
    const [elements, setElements] = useState(imgs.length)
    const [space, setSpace] = useState(0)

    useEffect(() => {
        if(containerRef.current, elements > 0) {
            const prom = new Promise((resolve, _) => {
                setTimeout(() => {
                    resolve('')
                }, 2000)
            })
            prom.then(() => {
                if(containerRef.current) {
                    if(elements === imgs.length) {
                        containerRef.current.style.transition = '0s'
                        containerRef.current.style.transform = `translateX(-${0}px)`
                            setSpace(space + containerRef.current!.clientWidth)
                            setElements(elements - 1)
                    }
                    else if(elements > 1) {
                        containerRef.current.style.transition = '1s'
                        containerRef.current.style.transform = `translateX(-${space}px)`
                        containerRef.current.ontransitionend = () => {
                            setSpace(space + containerRef.current!.clientWidth)
                            setElements(elements - 1)
                        }
                    }
                    else {
                        containerRef.current.style.transition = '1s'
                        containerRef.current.style.transform = `translateX(-${space}px)`
                        containerRef.current.ontransitionend = () => {
                            setSpace(0)
                            setElements(imgs.length)
                        }
                    }
                }
            },)
        }
    }, [elements, containerRef.current])

    return (
        <div className={style.ContImageViewer}>
            <div ref={containerRef} className={style.container}>
                {
                    imgs.map((el, index) => {
                        return(
                            <div key={index} className={style.imageDiv}>
                                <img src={el} alt="vista previa" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}