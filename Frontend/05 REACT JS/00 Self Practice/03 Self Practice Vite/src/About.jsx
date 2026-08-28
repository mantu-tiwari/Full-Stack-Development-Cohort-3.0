let About = (name) => {
    console.log(name);
    
    console.log(name.class);
    console.log(name.id);
    
    return (
        <div>
            <p>Also we can pass mulitple element here</p>
            <h4> this is About.jsx fucntion component</h4>
            {/* <p>i have chaged</p>
            <p>it didn't come automatically without changing</p>
            <p> now i reveret the changes</p> */}
        </div>
    )
}

export default About