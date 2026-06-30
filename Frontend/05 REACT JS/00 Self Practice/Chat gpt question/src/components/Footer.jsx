let Footer = (props) => {
    return (
        <div>
            <h4>This is Footer</h4>
            <a>My email: {props.email}</a>
            <a>My github: {props.github}</a>
        </div>
    )
}

export default Footer