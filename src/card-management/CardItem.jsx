function CardItem({id, title, description, onDelete, onEdit, isEditing, editedTitle, onEditedTitleChange, editedDescription, onEditedDescriptionChange, onSave, onCancel})
{
    if(isEditing)
    {
       return(
        <div className="card text-center bg-dark m-3 shadow-sm">
            <div className="card-body">
                <h4 className="card-title text-warning">Edit Card</h4>
                <div className="mb-3">
                    <label htmlFor={`editTitle-${id}`} className="form-lable"></label>
                    <input type="text"
                    className="form-control"
                    id={`editTitle-${id}`}
                    value={editedTitle}
                    onChange={onEditedTitleChange} />
                </div>

                   <div className="mb-3">
                    <label htmlFor={`editDes-${id}`} className="form-lable"></label>
                    <textarea type="text"
                    className="form-control"
                    id={`editDes-${id}`}
                    value={editedDescription}
                    onChange={onEditedDescriptionChange}></textarea>
                </div>

                <div className="d-flex justify-content-between">
                    <button className="btn btn-success btn-sm me-2" onClick={() => onSave(id)}>Save</button>
                    <button className="btn btn-info btn-sm" onClick={onCancel}>Cancel</button>
                </div>
                </div>

            </div>
       ) 
    }
    return (
        <div className="card  bg-dark m-2 shadow-sm">
            <div className="card-body">
                <h3 className="card-title text-primary">{title}</h3>
                
            <p className="card-text text-secondary text-white">
                {description}
                </p>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-danger btn-sm mt-3" onClick={ () => onDelete(id)}>Delete</button>
                    <button className="btn btn-success btn-sm mt-3" onClick={ () => onEdit(id, title, description)}>Edit</button>
                </div>
            </div>
        </div>
    )
}
export default CardItem;