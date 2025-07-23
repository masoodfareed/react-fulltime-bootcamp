import React, { useState } from 'react';

function Counter()
{
    const [count , setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    function decrement() 
    {
        setCount(count - 1);
    }
    return(
        <div className='card text-center m-3 shadow-sm'>
            <h2 className='card-title'>Counter: <span className='text-info'>{count}</span></h2>
            <div className='d-flex justify-content-center gap-2'>
                <button onClick={increment} className='btn btn-success'>Increment</button>
                <button onClick={decrement} className='btn btn-danger' >Decrement</button>
            </div>
            <p className='card-text mt-3 text-muted'>This count updates by react state hook..</p>
        </div>
    )
}
export default Counter;