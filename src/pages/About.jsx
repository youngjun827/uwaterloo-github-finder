import React from 'react'

function About() {
  return (
    <>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
      Find the latest GitHub projects related to the University of Waterloo. Please         
        <strong>
            <a className='text-success link link-hover pl-[15px]' href='https://github.com/youngjun827/uWaterloo-github-finder'>
            Click me
            </a>
        </strong>  to view the project repository.
      </p>
      <p className='text-lg text-primary'>
        Version <span className='text-success'>1.0.0</span>
      </p>
      <p className='text-lg text-primary'>
        Made By: 
            <a className='text-success link link-hover pl-[10px]' href='https://youngjun827.github.io/'>
            Young Jun Joo
            </a>
      </p>
    </>
  )
}

export default About