import style from './Footer.module.css'



export const Footer = () => {
    return(
        <div className={style.ContFooter}>
            <a href="https://asgonzales-3d-portfolio.vercel.app/"  target='_blank' rel="noopener noreferrer" >
                You can see the 3D version of my portfolio here.
            </a>
        </div>
    )
}