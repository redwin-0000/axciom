import React from 'react'

const UserPage = () => {
  return (
    <div className='bg-[#CACACA] h-[100vh]'>
      <div className='p-10'>
        <div className='flex justify-between'>
          <button className='bg-white p-3 rounded-md cursor-pointer'>Home</button>
          <button className='bg-white p-3 rounded-md cursor-pointer'>Log Out</button>
        </div>
        <div className='flex justify-center items-center py-14'>
          <h1 className='bg-[#4472C4] p-3 font-bold text-xl rounded-md'>Welcome User</h1>
        </div>
        <div className='flex justify-around items-center '>
          <h1 className='bg-[#4472C4] p-3 font-bold text-xl rounded-md cursor-pointer'>Vendor</h1>
          <h1 className='bg-[#4472C4] p-3 font-bold text-xl rounded-md cursor-pointer'>Cart</h1>
          <h1 className='bg-[#4472C4] p-3 font-bold text-xl rounded-md cursor-pointer'>Guest List</h1>
          <h1 className='bg-[#4472C4] p-3 font-bold text-xl rounded-md cursor-pointer'>Order Status</h1>
        </div>
      </div>
    </div>
  )
}

export default UserPage 