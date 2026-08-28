// let Hero = (props) => {
//     return (
//         <div>
//             <h4>This is Hero section {props.heading}</h4>
//             <button>{props.button}</button>
//         </div>
//     )
// }
let Hero = ({heading, button}) => {
    return (
        <>
            <h4>This is Hero section {heading}</h4>
            <button>{button}</button>
        </>
    )
}

export default Hero