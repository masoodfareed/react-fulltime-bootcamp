function Profile(props)
{
    return(
        <div className="card text-center m-3 shadow-sm">
            <div className="card-body">
                <h3 className="card-title text-primary">Hello {props.name}</h3>
                <p className="card-text text-secondary"><span className="text-success">{props.occupation}</span>  - Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, voluptates.</p>
            </div>
            <div className="card-footer text-muted">
                <button className="btn btn-success mt-5">View Profile</button>
            </div>
        </div>
    )
}

export default Profile;