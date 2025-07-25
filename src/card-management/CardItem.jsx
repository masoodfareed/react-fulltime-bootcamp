function CardItem({title, description, onDelete})
{
    return (
        <div className="card text-center bg-dark  m-3 shadow-sm">
            <div className="card-body">
                <h3 className="card-title text-primary">{title}</h3>
                </div>
            <div className="card-text text-secondary text-white">
                {description}
                </div>
                <div className="card-footer text-muted">
                    <button className="btn btn-danger btn-sm mt-3">Delete</button>
                </div>
        </div>
    )
}
export default CardItem;