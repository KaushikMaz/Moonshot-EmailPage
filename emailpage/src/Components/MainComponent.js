import React from 'react'
import EmailPage from './EmailPage'
import EmailDetails from './EmailDetails'

const MainComponent = () => {
  return (
    <div className="flex">
      <EmailPage/>
      <EmailDetails/>
    </div>
  )
}

export default MainComponent