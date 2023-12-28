import style from './ContactMe.module.css';
import linkedin from '../../assets/ProjectsData/buttonsIcons/LinkedIn.png';
import github from '../../assets/ProjectsData/buttonsIcons/Github.png';
import whatsapp from '../../assets/ProjectsData/buttonsIcons/wsp.png';
import cv from '../../assets/cvs/Sebastian Gonzales - Programador.pdf';
import resume from '../../assets/cvs/Sebastian Gonzales - Developer.pdf';
import { send } from 'emailjs-com';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';







export default function ContactMe () {
    const urlLinkedin = 'https://www.linkedin.com/in/asgonzalesr/';
    const urlGithub = 'https://github.com/asgonzales';
    const urlWhatsapp = 'https://api.whatsapp.com/send?phone=541123833611';
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
                e.target.className = style.formInput
                errorsRef.current.innerText = ''
            }
            else {
                setNamePass(false)
                e.target.className = style.formInputErr
                errorsRef.current.innerText = 'Please insert your name'
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
                e.target.className = style.formInput
                errorsRef.current.innerText = ''
            }
            else {
                setEmailPass(false)
                errorsRef.current.innerText = 'Please insert a valid e-mail'
                e.target.className = style.formInputErr
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
                e.target.className = style.formText
            }
            else {
                setMessagePass(false)
                errorsRef.current.innerText = 'Please leave a message'
                e.target.className = style.formTextErr
            }
        }
    }

    const submitForm = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        send(
            'service_0wk06k4',
            'template_6ahxthg',
            data,
            '9ZL94e6jtn2wYrWXl'
        )
    }

    useEffect(() => {
        if(submitButtonFormRef.current) {
            if (namePass && emailPass && messagePass) {
                submitButtonFormRef.current.disabled = false;
                submitButtonFormRef.current.className = style.formButton;
            }
            else {
                submitButtonFormRef.current.disabled = true;
                submitButtonFormRef.current.className = style.formButtonDis;    
            }
        }
    }, [namePass, emailPass, messagePass])

    return( 
        <div id='ContactMe' className={style.ContContactMe}>
            <div className={style.contactMeForm}>
                <h1>Contact Me!</h1>
                <form onSubmit={(e) => submitForm(e)}>
                    <input className={style.formInput} type="text" placeholder='name' onChange={(e) => handleName(e)}/>
                    <input className={style.formInput} type="text" placeholder='email' onChange={(e) => handleEmail(e)}/>
                    <textarea className={style.formText} rows={5} cols={2} placeholder='message' onChange={(e) => handleMessage(e)}/>
                    <label ref={errorsRef} className={style.errors}></label>
                    <input disabled ref={submitButtonFormRef} className={style.formButton} type="submit" value='Send' />
                </form>
            </div>
            <div className={style.contactInfo}>
                <div className={style.info}>
                    <h1>Contact Info</h1>
                    <div>
                        <h4>Phone: </h4>
                        <h4 className={style.data}>+54 9 11 23833611</h4>
                    </div>
                    <div>
                        <h4>Email: </h4>
                        <h4 className={style.data}>asgonzalesromani@gmail.com</h4>
                    </div>
                </div>
                <div className={style.links}>
                    <a href={urlLinkedin} target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="linkedin" />
                    </a>
                    <a href={urlGithub} target='_blank' rel="noopener noreferrer">
                        <img src={github} alt="github" />
                    </a>
                    <a href={urlWhatsapp} target='_blank' rel="noopener noreferrer">
                        <img src={whatsapp} alt="whatsapp" />
                    </a>
                </div>
                <div className={style.divButton}> 
                    <h3> Download CV/Resume</h3>
                    <div>
                        <a href={cv} download className={style.formButton} title='Español'>ES</a>
                        <a href={resume} download className={style.formButton} title='English'>EN</a>
                    </div>
                </div>
            </div>
        </div>
    )
}