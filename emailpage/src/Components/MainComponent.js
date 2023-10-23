import React from 'react'
import EmailPage from './EmailPage'
import EmailDetails from './EmailDetails'
import FilterComponent from './FilterComponent'

const MainComponent = () => {
  return (
    <div className="flex flex-col">
      <FilterComponent/>
      <div className="flex">
      <EmailPage/>
      <EmailDetails/>
      </div>
    </div>
  )
}

export default MainComponent