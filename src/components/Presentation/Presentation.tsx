import me from '/src/assets/me.jpg'
import SVGLinkedIn from '../../assets/svgLinkedIn';
import SVGGithub from '../../assets/SVGGithub';
import SVGEmail from '../../assets/SVGEmail';
import SVGResume from '../../assets/SVGResume';
import cv from '../../assets/cvs/Sebastian Gonzales - Programador.pdf';
import { useEffect, useState } from 'react';
import copy from 'copy-to-clipboard';
import Star from '../Star/Star';


type PresentationProps = {
    color:string
    lightColor: string
    darkColor: string
}
export const Presentation = ({ color, lightColor, darkColor}:PresentationProps) => {
    const[popupHandler, setPopupHandler] = useState(false)
    const urlLinkedin = 'https://www.linkedin.com/in/asgonzalesr/';
    const urlGithub = 'https://github.com/asgonzales';
    const copyEmail = async () => {
        copy("asgonzalesromani@gmail.com")
        setPopupHandler(true)
    }
    return(
        <section id="Start" className="w-full min-h-screen flex flex-col items-center 
         justify-center p-4 gap-2
         font-semibold relative
         border-y-2
         z-0
         "
         style={{
            transition: "all 5s ease",
            borderColor: color,
         }}
        >
            <Star className="w-2 h-2 absolute rounded-full border-2 z-0 top-0 left-0 m-40" light={lightColor} dark={darkColor} />
            <Star className="w-2 h-2 absolute rounded-full border-2 z-0 top-10 left-28 m-52" light={lightColor} dark={darkColor} />
            <Star className="w-2 h-2 absolute rounded-full border-2 z-0 bottom-10 left-10 m-52" light={lightColor} dark={darkColor} />
            <Star className="w-2 h-2 absolute rounded-full border-2 z-0 bottom-0 left-10 m-40" light={lightColor} dark={darkColor} />
            <Star className="w-2 h-2 absolute rounded-full border-2 z-0 top-40 right-40 m-40" light={lightColor} dark={darkColor} />
            <Star className="w-2 h-2 absolute rounded-full border-2 z-0 top-20 right-20 m-40" light={lightColor} dark={darkColor} />
            <Star className="w-2 h-2 absolute rounded-full border-2 z-0 bottom-0 right-0 m-52" light={lightColor} dark={darkColor} />
            <div className="border-2 w-full h-full flex items-center flex-col p-4
             md:w-96 md:h-auto"
             style={{
                transition: "all 5s ease",
                borderColor: color,
                boxShadow: `inset 0 0 7px  ${color}, 0 0 15px rgb(${lightColor}, .3)`
             }}
             
            >
                <img src={me} alt="yo :D" 
                className="w-40 h-40 self-center rounded-full
                border-4 z-10"
                style={{
                    transition: "all 5s ease",
                    borderColor: `rgb(${lightColor})`,
                }}
                />
                <h2 className="text-2xl z-10 text-white"
                >
                    Sebastian Gonzales</h2>
                
                <h4 className="text-3xl font-bold z-10" style={{
                    color: `rgb(${lightColor})`,
                    transition: "all 5s ease",
                }}>Desarrollador Web</h4>
                <h3 className="text-3xl font-bold z-10" style={{
                    color: `rgb(${lightColor})`,
                    transition: "all 5s ease",
                }}>Artista 3D</h3>
                <div className="w-full h-12 flex items-center justify-evenly m-4">
                    <a href={urlLinkedin} target="_blank" rel="noopener noreferrer" 
                    className=" group w-10 h-10 flex items-center justify-center z-10
                     "
                    >
                        <SVGLinkedIn color={`rgb(${lightColor})`} 
                         className="w-8 h-8 z-0
                         transition-all
                         group-hover:w-10 group-hover:h-10
                         " 
                         style={{
                            transition: "all 5s ease",
                         }}
                        />
                    </a>
                    <a href={urlGithub} target='_blank' rel="noopener noreferrer" 
                     className="group w-10 h-10 flex items-center justify-center z-10"
                    >
                        <SVGGithub color={`rgb(${lightColor})`} 
                         className="w-8 h-8 z-0
                         transition-all
                         group-hover:w-10 group-hover:h-10
                         " 
                         style={{
                            transition: "all 5s ease",
                         }}
                        />
                    </a>
                    <button onClick={copyEmail} 
                     className="group relative w-10 h-10 flex items-center justify-center z-10"
                    >
                        <SVGEmail color={`rgb(${lightColor})`} 
                         className="w-8 h-8 z-0
                         transition-all
                         group-hover:w-10 group-hover:h-10
                         "
                         style={{
                            transition: "all 5s ease",
                         }}
                        />
                        {
                            popupHandler && <Popup color={color} close={() => setPopupHandler(false)} />
                        }
                    </button>
                    <a href={cv} target='_blank' 
                     className="group w-10 h-10 flex items-center justify-center z-10"
                    >
                        <SVGResume color={`rgb(${lightColor})`} 
                         className="w-8 h-8 z-0
                         transition-all
                         group-hover:w-10 group-hover:h-10
                         "
                         style={{
                            transition: "all 5s ease",
                         }}
                        />
                    </a>
                </div>
                <span className="text-lg font-light"
                 style={{
                    color: "white"
                 }}
                >asgonzalesromani@gmail.com</span>
            </div>
            <div className=" absolute w-48 h-48 z-0
             rounded-full shadow-xl border-2 blur-md"
             style={{
                transition: "all 5s ease",
                borderColor: color,
                boxShadow: `0 3px 15px ${color}`,
             }}></div>
        </section>
    )
}

type PopupProps = {
    close: () => void
    color: string
}
const Popup = ({ close, color }:PopupProps) => {

    useEffect(() => {
        setTimeout(() => {
            close()
        }, 3000)
    }, [])
    return (
        <section className="absolute top-0 -translate-y-full bg-white rounded-md p-2 z-10 w-32 h-6 flex items-center justify-center" >
            <span className=""
             style={{
                color: color
             }}
            >Email copiado!</span>
        </section>
    )
}