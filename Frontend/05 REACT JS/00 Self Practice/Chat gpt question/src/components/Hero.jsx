let Hero = (props) => {
    return (
        <div>
            <h4>This is Hero section {props.heading}</h4>
            <button>{props.button}</button>
        </div>
    )
}

export default Hero