import React from 'react'

function Newproduct() {
  return (
    <div className='m-auto w-full max-w-md p-4'>
      <form>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' />

        <select>
          <option>Fruits</option>
          <option>Vegetable</option>
          <option>IceCream</option>
          <option>Dosa</option>
          <option>Pizza</option>
        </select>

        <div className='h-7 w-full bg-slate-500'>

        </div>
      </form>
    </div>
  )
}

export default Newproduct