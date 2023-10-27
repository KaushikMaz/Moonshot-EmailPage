import React from 'react'
import EmailPage from './EmailPage'
import EmailDetails from './EmailDetails'
import FilterComponent from './FilterComponent'
import { useDispatch} from 'react-redux'
import { toggleSideBarOff } from './utils.js/appSlice'


const MainComponent = () => {
  const dispatch=useDispatch()
  React.useEffect(()=>{
    dispatch(toggleSideBarOff())
    },[])

    
  return (
    <div className="w-screen h-screen overflow-x-hidden ">
    <div className="flex flex-col custom-background">
      <FilterComponent/>
      <div className="flex ">
      <EmailPage/>
      <div>
        <EmailDetails/>
      </div>
      </div>
    </div>
    </div>
  )
}

export default MainComponent