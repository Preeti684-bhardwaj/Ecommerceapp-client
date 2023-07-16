import React from 'react'

const option = () => {
  return (
    <div className='add_remove_select'>
        <select>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
        </select>
        <p className='forremovemedia'>Delete</p><span>|</span>
        <p className='forremovemedia'>Save or Later</p><span>|</span>
        <p className='forremovemedia'>See More</p>
    </div>
  )
}

export default option