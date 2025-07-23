import React, { useState } from 'react';

function TextInput()
{
    const [text, setText] = useState('');

    function handleChange(event) 
    {
        setText(event.target.value);
    }

    return (
        <div className='card text-center m-3 shadow-sm'>
            <label className='form-label' htmlFor="my-text-input">Ipunt Value</label>

            <input type="text"
                id='my-text-input'
                className='form-control'
                value={text}
                placeholder='Type something...'
                onChange={handleChange}
            />

            <p className='mt-3 text-muted'>Current message: <strong>{text}</strong> </p>
        </div>
        
    )
}

export default TextInput;