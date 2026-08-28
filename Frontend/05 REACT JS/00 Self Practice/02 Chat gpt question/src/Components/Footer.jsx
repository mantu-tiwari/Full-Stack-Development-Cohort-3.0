// let Footer = (props) => {
//     return (
//         <div>
//             <h4>This is Footer</h4>
//             <a>My email: {props.email}</a>
//             <a>My github: {props.github}</a>
//         </div>
//     )
// }
let Footer = ({email,github}) => {
    return (
        <>
            <h4>This is Footer</h4>
            <a>My email: {email}</a>
            <a>My github: {github}</a>
        </>
    )
}

export default Footer