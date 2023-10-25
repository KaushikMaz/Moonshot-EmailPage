import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleSideBarOff } from './utils.js/appSlice'


const FilterComponent = () => {

  const dispatch=useDispatch()
  const handleClick=()=>{
    dispatch(toggleSideBarOff())

  }
  return (
    <div className="border custom-border flex justify-between rounded-l-full rounded-r-full m-4 mb-0">
      <div className='flex'>
      <p className="px-4">filter by:</p>
      <p className="px-4">Read</p>
      <p className="px-4">Unread</p>
      <p className="px-4">Favourites</p>
      </div>
      <div className="px-4 cursor-pointer " onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

      </div>


    </div>
  )
}

export default FilterComponent