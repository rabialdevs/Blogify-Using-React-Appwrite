import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div>
      <img src="/logo.svg" alt="Logo" className='w-24 h-10 rounded-full'/>
    </div>
  )
}

export default Logo