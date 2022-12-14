import style from './HomeCard.module.css';








export default function HomeCard () {

    const openPortfolio = () => {
        window.open('https://asgonzales-3d-portfolio.vercel.app/')
    }


    return (
        <div className={style.contHomeCard}>
            <h3>Hello there! My name is Sebastian Gonzales</h3>
            <p>and I'm a Full Stack Developer from Argentina.</p>
            <p>Welcome to my portfolio!</p>
            {/* <span>15/10/2022: Almost done! :D {'>:D'}</span> */}
            <button className={style.button} onClick={openPortfolio}>Check the 3D version</button>
        </div>
    )
}