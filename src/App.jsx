import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeBanner from './WelcomeBanner'
import Profile from './Profile'
import Counter from './Counter'
import TextInput from './TextInput'
import ProductList from './ProductList';
import CardManager from './card-management/CardManager.jsx';


function App() {
  const [count, setCount] = useState(0)

  const userName = 'Masood';


  return (
    <>
      <div>
          <WelcomeBanner myName="Masood's" />

          <hr className='my-5' />

          <CardManager />
          {/* <div className='row'> 
            <div className='col-md-4'>
                <Profile name="Masood" occupation="Software Engineer" />
            </div>
            <div className='col-md-4'>
                <Profile name="Jean" occupation="Software Engineer" />
            </div>
            <div className='col-md-4'>
                <Profile name="John" occupation="Software Engineer" />
            </div>
                 
          </div> */}

          {/* <hr className='my-5' />
          <ProductList /> */}

          {/* <hr className='my-5' />
          <Counter />
         
         <hr className='my-5' />

          <TextInput /> */}
        
      </div>
     

   
    </>
  )
}

export default App
