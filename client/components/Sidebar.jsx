import React from 'react'
import { useDispatch } from 'react-redux'

import { clearCategory } from '../actions/category'

function Sidebar () {
  const dispatch = useDispatch()
  function homeHandlers () {
    dispatch(clearCategory())
  }
  return (
    // TODO images for sidebar menu options.
    <div className='sidebar'>
      <div className='sidebarButton' onClick={homeHandlers}>Home</div>
      <div className='sidebarButton'>Yes</div>
      <div className='sidebarButton'>No</div>
      <div className='sidebarButton'>Mistake</div>
      <div className='sidebarButton'>Alert!</div>
      <div className='sidebarButton'>Zoom In</div>
      <div className='sidebarButton'>Zoom Out</div>
    </div>
  )
}

export default Sidebar