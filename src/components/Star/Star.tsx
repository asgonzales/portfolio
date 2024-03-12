

type StartProps = {
    light:string
    dark:string
    className: string
}
export default function Star({ light, dark, className }:StartProps) {
    return(
        <div className={className}
         style={{
            transition: "all 1s ease",
            backgroundColor: `rgba(${light}, .5)`,
            borderColor: dark,
         }}
        ></div>
    )
}