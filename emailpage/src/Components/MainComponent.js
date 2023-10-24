import React from 'react'
import EmailPage from './EmailPage'
import EmailDetails from './EmailDetails'
import FilterComponent from './FilterComponent'
import { useDispatch,useSelector } from 'react-redux'
import { toggleSideBarOff } from './utils.js/appSlice'


const MainComponent = () => {
  const dispatch=useDispatch()
  React.useEffect(()=>{
    dispatch(toggleSideBarOff())
    },[])

    
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