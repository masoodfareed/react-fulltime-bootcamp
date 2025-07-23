function WelcomeBanner(props)
{
    return (
        <div className="alert alert-success text-center p-3 m-3">
            <h2>Welcome to {props.myName} portfolio</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, corrupti.</p>
        </div>
    )
}

export default WelcomeBanner;