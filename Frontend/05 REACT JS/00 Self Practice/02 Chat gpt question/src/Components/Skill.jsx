// let Skill = (props) => {
//     return (
//         <div>
//             <h4>This is skill section</h4>
//             <p>{props.skill1}, {props.skill2}</p>
//         </div>
//     )
// }
let Skill = ({skill1, skill2}) => {
    return (
        <>
            <h4>This is skill section</h4>
            <p>{skill1}, {skill2}</p>
        </>
    )
}

export default Skill