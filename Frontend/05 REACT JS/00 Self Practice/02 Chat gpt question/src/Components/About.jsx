// let About = (props) => {
//     return (
//         <div>
//             <h4>This is the About section</h4>
//             <p>My college is {props.college}</p>
//             <p>my brach is {props.branch}</p>
//         </div>
//     )
// }
let About = ({college, branch}) => {
    return (
        <>
            <h4>This is the About section</h4>
            <p>My college is {college}</p>
            <p>my brach is {branch}</p>
        </>
    )
}

export default About