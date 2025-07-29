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
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import Gallery from './Gallery.jsx';
import Dashboard from './Dashboard.jsx';


function App() {
  const [count, setCount] = useState(0)

  const userName = 'Masood';


  return (
    <>
      <div className='App'>
          <Navbar />
          <div className='container mt-4'>  
            <Routes>
                <Route path='/' element={ <WelcomeBanner name={userName} /> } />
                <Route path='/profile' element={ <Profile name={userName} occupation='Software Engineer' /> } />
                <Route path='/counter' element={ <Counter /> } />
                <Route path='/card-management' element={ <CardManager /> } />
                <Route path='/dashboard' element={ <Dashboard /> }>
                    <Route index element={ <Profile name={userName} occupation='Software Engineer' /> } />
                    <Route path='profile' element={ <Profile name={userName} occupation='Software Engineer' /> } />
                    <Route path='counter' element={ <Counter /> } />
                </Route>
                <Route path='/products' element={ <ProductList /> } />
                <Route path='/gallery' element={ <Gallery /> } />
            </Routes>

          </div>

      </div>
     

   
    </>
  )
}

export default App
