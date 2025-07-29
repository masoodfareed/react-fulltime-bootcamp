import React from 'react';
import Profile from './Profile';
function Gallery()
{
    return(
        <>  <h2 className='display-4'>Gallery</h2>
          <div className='row'> 
            <div className='col-md-4'>
                <Profile name="Masood" occupation="Software Engineer" />
            </div>
            <div className='col-md-4'>
                <Profile name="Jean" occupation="Software Engineer" />
            </div>
            <div className='col-md-4'>
                <Profile name="John" occupation="Software Engineer" />
            </div>
                 
          </div> </>
        
    )
}

export default Gallery;