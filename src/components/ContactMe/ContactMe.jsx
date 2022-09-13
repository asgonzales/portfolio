import style from './ContactMe.module.css';
import linkedin from '../../media/LinkedIn.png';
import github from '../../media/Github.png';
import whatsapp from '../../media/wsp.png';
import cv from '../../media/cves.pdf';
import resume from '../../media/cven.pdf';
import { send } from 'emailjs-com';
import { useEffect, useState } from 'react';







export default function ContactMe () {
    const urlLinkedin = 'https://www.linkedin.com/in/asgonzalesr/';
    const urlGithub = 'https://github.com/asgonzales';
    const urlWhatsapp = 'https://api.whatsapp.com/send?phone=541123833611';
    const regexemail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const [data, setData] = useState({
        from_name: '',
        from_email: '',
        messsage: ''
    })
    const [namePass, setNamePass] = useState(false);
    const [emailPass, setEmailPass] = useState(false);
    const [messagePass, setMessagePass] = useState(false);

    const handleName = (e) => {
        setData({
            ...data,
            from_name: e.target.value
        })
        if(e.target.value !== '') {
            setNamePass(true)
            e.target.className = style.formInput
            document.querySelector('#ErrorsForm').innerText = ''
        }
        else {
            setNamePass(false)
            e.target.className = style.formInputErr
            document.querySelector('#ErrorsForm').innerText = 'Please insert your name'
        }
    }
    const handleEmail = (e) => {
        setData({
            ...data,
            from_email: e.target.value
        })
        if(regexemail.test(e.target.value)) {
            setEmailPass(true)
            e.target.className = style.formInput
            document.querySelector('#ErrorsForm').innerText = ''
        }
        else {
            setEmailPass(false)
            document.querySelector('#ErrorsForm').innerText = 'Please insert a valid e-mail'
            e.target.className = style.formInputErr
        }
    }
    const handleMessage = (e) => {
        setData({
            ...data,
            message: e.target.value
        })
        if(e.target.value !== '') {
            setMessagePass(true)
            document.querySelector('#ErrorsForm').innerText = ''
            e.target.className = style.formText
        }
        else {
            setMessagePass(false)
            document.querySelector('#ErrorsForm').innerText = 'Please leave a message'
            e.target.className = style.formTextErr
        }
    }

    const submitForm = (e) => {
        e.preventDefault();
        send(
            'service_0wk06k4',
            'template_6ahxthg',
            data,
            '9ZL94e6jtn2wYrWXl'
        )
    }

    useEffect(() => {
        if (namePass && emailPass && messagePass) {
            document.querySelector('#submitButtonForm').disabled = false;
            document.querySelector('#submitButtonForm').className = style.formButton;
        }
        else {
            document.querySelector('#submitButtonForm').disabled = true;
            document.querySelector('#submitButtonForm').className = style.formButtonDis;    
        }
    }, [namePass, emailPass, messagePass])

    return( 
        <div className={style.contContactMe}>
            <div className={style.contacMeForm}>
                <h1>Contact Me!</h1>
                <form onSubmit={submitForm}>
                    <input className={style.formInput} type="text" placeholder='Your name...' onChange={handleName}/>
                    <input className={style.formInput} type="text" placeholder='Your email...' onChange={handleEmail}/>
                    <textarea className={style.formText} rows="5" cols="2" type="text" placeholder='Your message...' onChange={handleMessage}/>
                    <label id='ErrorsForm' className={style.errors}></label>
                    <input disabled id='submitButtonForm' className={style.formButton} type="submit" value='Send' />
                </form>
            </div>
            <div className={style.contacInfo}>
                <div className={style.info}>
                    <h1>Contact Info</h1>
                    <div>
                        <h4>Phone: </h4>
                        <h4 className={style.data}>+5491123833611</h4>
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