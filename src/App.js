import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

import { GithubContextProvider } from './context/github/GithubContext';


function App() {
  return (
    <GithubContextProvider>
      <Router>
        <div className='flex flex-col justify-between h-screen'>
          <NavBar/>
          <main className='container mx-auto px-3'>
                  <Routes>
                    <Route expact path='/' element={
                        <>
                          <Home/>
                        </>
                      }
                    />
                    <Route path='/home' element={<Home/>}></Route>
                    <Route path='/about' element={<About/>}></Route>
                    <Route path='/notFound' element={<NotFound/>}></Route>
                    <Route path='/*' element={<NotFound/>}></Route>
                  </Routes>
                </main>
          <Footer/>
        </div>
      </Router>
  </GithubContextProvider>
  )
}

export default App