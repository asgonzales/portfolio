

const placeY = ["top", "bottom"]
const placeX = ["left", "right"]

const space = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
     12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60,
     64, 72, 80, 96]

type StartProps = {
    light:string
    dark:string
    className: string
}
export default function Star({ light, dark, className }:StartProps) {
    // const randomSpaceY = Math.round(Math.random() * (space.length - 1))
    // const randomSpaceX = Math.round(Math.random() * (space.length - 1))
    // const randomPlaceY = Math.round(Math.random() * (placeY.length - 1))
    // const randomPlaceX = Math.round(Math.random() * (placeX.length - 1))

    // const finalPlaceY = `${placeY[randomPlaceY]}-${space[randomSpaceY]}`
    // const finalPlaceX = `${placeX[randomPlaceX]}-${space[randomSpaceX]}`
    // const margin = `m-${space[randomSpaceX]}`
    
    // const ubication = `${finalPlaceY} ${finalPlaceX} ${margin}`
    // const className=`absolute ${ubication} border-2 w-2 h-2 rounded-full z-0`
    // console.log(className)
    return(
        <div className={className}
         style={{
            transition: "all 1s ease",
            backgroundColor: `rgba(${light}, .5)`,
            borderColor: dark,
            // boxShadow: `0 0 55px 50px ${dark}`
         }}
        ></div>
    )
}