

type FooterProps = {
    darkColor: string
    color: string
}
export const Footer = ({ darkColor, color }:FooterProps) => {
    return(
        <div className="w-full p-2"
         style={{
            transition: "all 5s ease",
            backgroundColor: darkColor,
            color: color
         }}
        >
            <a href="https://asgonzales-3d-portfolio.vercel.app/"  target='_blank' rel="noopener noreferrer" >
                Puede ver la versión 3D de este portfolio aquí.
            </a>
        </div>
    )
}