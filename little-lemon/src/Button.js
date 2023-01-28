export function Button(props){
    const myStyle = {
        border:"0px",
        borderRadius:"16px",
        padding:"2% 10% 2% 10%",
        fontFamily:"Roboto",
        fontWeight:"Bold",
        fontSize: "1.7vw",
        display: "inline-block"
    }
    return(
        <>
            <a className="button_primary" href={props.link} style={myStyle} type="button">{props.text}</a>
        </>
    )
}