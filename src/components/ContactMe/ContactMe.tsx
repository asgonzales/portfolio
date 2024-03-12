import style from './ContactMe.module.css';
import { send } from 'emailjs-com';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';





type ContactMeProps = {
    color: string
    darkColor: string
    lightColor: string
}

export default function ContactMe ({ color, darkColor, lightColor }:ContactMeProps) {
    const regexemail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const errorsRef = useRef<HTMLLabelElement>(null)
    const submitButtonFormRef = useRef<HTMLInputElement>(null)

    const [data, setData] = useState({
        from_name: '',
        from_email: '',
        message: ''
    })
    const [namePass, setNamePass] = useState(false);
    const [emailPass, setEmailPass] = useState(false);
    const [messagePass, setMessagePass] = useState(false);

    const handleName = (e:ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            from_name: e.target.value
        })
        if(errorsRef.current) {
            if(e.target.value !== '') {
                setNamePass(true)
                errorsRef.current.innerText = ''
            }
            else {
                setNamePass(false)
                e.target.style.borderColor = color
                errorsRef.current.innerText = 'Por favor ingrese su nombre.'
            }
        }
    }
    const handleEmail = (e:ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            from_email: e.target.value
        })
        if(errorsRef.current) {
            if(regexemail.test(e.target.value)) {
                setEmailPass(true)
                errorsRef.current.innerText = ''
            }
            else {
                setEmailPass(false)
                errorsRef.current.innerText = 'Por favor ingrese un e-mail válido.'
                e.target.style.borderColor = color
            }
        }
    }
    const handleMessage = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setData({
            ...data,
            message: e.target.value as string
        })
        if(errorsRef.current) {
            if(e.target.value !== '') {
                setMessagePass(true)
                errorsRef.current.innerText = ''
            }
            else {
                setMessagePass(false)
                errorsRef.current.innerText = 'Por favor escriba un mensaje.'
                e.target.style.borderColor = color
            }
        }
    }

    const submitForm = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if(errorsRef.current) {
                errorsRef.current.innerText = 'Enviando el mail...'
            }
            await send(
                'service_0wk06k4',
                'template_6ahxthg',
                data,
                '9ZL94e6jtn2wYrWXl'
            )
            if(errorsRef.current) {
                errorsRef.current.innerText = 'Enviado!'
            }
        } catch(ex) {
            if(errorsRef.current) {
                errorsRef.current.innerText = 'Ocurrió un error al enviar el mail :('
            }
            console.log(ex)
        }
    }

    useEffect(() => {
        if(submitButtonFormRef.current) {
            if (namePass && emailPass && messagePass) {
                submitButtonFormRef.current.disabled = false;
                submitButtonFormRef.current.style.borderColor = color;
                submitButtonFormRef.current.style.backgroundColor = color;
            }
            else {
                submitButtonFormRef.current.disabled = true;
                submitButtonFormRef.current.style.borderColor = darkColor;
                submitButtonFormRef.current.style.backgroundColor = darkColor;
            }
        }
    }, [namePass, emailPass, messagePass])

    return( 
        <div id='ContactMe' className={`${style.ContContactMe} 
         border-y-2 p-4`}
         style={{
            transition: "all 5s ease",
            borderColor: color
         }}
        >
            <div className={style.contactMeForm}>
                <h1 className="text-3xl font-bold"
                 style={{
                    transition: "all 5s ease",
                    color: `rgb(${lightColor})`
                 }}
                >Contáctame!</h1>
                <form className=" flex items-center justify-center gap-4 flex-col" onSubmit={(e) => submitForm(e)}>
                    <input className={`w-full h-10 p-2 border-2 rounded-md`}
                     style={{
                        borderColor: `rgb(${lightColor})`,
                        backgroundColor: darkColor,
                        transition: "all 5s ease",                        
                     }} 
                     type="text" placeholder='Nombre' onChange={(e) => handleName(e)}/>
                    <input className={`w-full h-10 p-2 border-2 rounded-md`}
                     style={{
                        borderColor: `rgb(${lightColor})`,
                        backgroundColor: darkColor,
                        transition: "all 5s ease",                        
                     }} 
                     type="text" placeholder='Email' onChange={(e) => handleEmail(e)}/>
                    <textarea className={`w-full p-2 border-2 rounded-md`}
                     style={{
                        borderColor: `rgb(${lightColor})`,
                        backgroundColor: darkColor,
                        transition: "all 5s ease",                        
                     }} 
                    rows={5} cols={2} placeholder='Mensaje' onChange={(e) => handleMessage(e)}/>
                    <label ref={errorsRef} className={style.errors}></label>
                    <div className="w-32 h-16 flex items-center justify-center">
                        <input disabled ref={submitButtonFormRef} 
                        className="border-2 py-2 px-4 rounded-md
                        text-xl font-bold mb-4 cursor-pointer
                        transition-all
                        hover:px-8
                        active:py-0 active:px-4"
                        style={{
                            transition: "all 5s ease",
                            borderColor: color,
                            backgroundColor: color,
                            color: "white"
                        }} 
                        type="submit" value='Enviar' />
                    </div>
                </form>
            </div>
        </div>
    )
}