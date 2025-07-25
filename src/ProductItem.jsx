function ProductItem({name, price})
{
    return (
             <li className="list-group-item text-white bg-success d-flex justify-content-between align-items-center">
                {name}
                <span className="badge bg-primary rounded-pill">{price}</span>
            </li>  
    )
}

export default ProductItem;