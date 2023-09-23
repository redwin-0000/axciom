import React from 'react'
import { useNavigate } from 'react-router-dom';

const VendorPage = () => {
  let navigate = useNavigate();
const handleSubmit =()=>{
  navigate('/Vendor')
}
const LogedOut = ()=>[
  navigate('/VendorLogin')
]
  return (
    <div className='bg-[#C7C7C7] h-[100vh]'>
      <div className='p-10'>
        <div className='flex justify-between'>
          <button className='bg-white p-3 rounded-md cursor-pointer'>Home</button>
          <button className='bg-white p-3 rounded-md cursor-pointer' onClick={LogedOut}>Log Out</button>
        </div>
        <div className='flex justify-center'>
          <div className='bg-white w-[35vw] h-[5vh] flex justify-around items-center'>
            <h1 className='cursor-pointer' onClick={handleSubmit} >Vendor</h1>
            <h1>florist</h1>
          </div>
        </div>
        <div className='p-20 mt-10 flex gap-10'>
          <div className='w-[15vw] h-[30vh] bg-white'>
            <div className='flex flex-col space-y-5 justify-center items-center py-16'>
              <h1>Vendor 1</h1>
              <h1>Contact Details</h1>
              <div className='bg-white shadow-md cursor-pointer w-[6vw] h-[5vh] flex justify-center items-center'>
                <h1>Shop Item</h1>
              </div>
            </div>
          </div>
            <div className='w-[15vw] h-[30vh] bg-white'>
              <div className='flex flex-col space-y-5 justify-center items-center py-16'>
                <h1>Vendor 1</h1>
                <h1>Contact Details</h1>
                <div className='bg-white shadow-md cursor-pointer w-[6vw] h-[5vh] flex justify-center items-center'>
                  <h1>Shop Item</h1>
                </div>
              </div>
          </div>
            <div className='w-[15vw] h-[30vh] bg-white'>
              <div className='flex flex-col space-y-5 justify-center items-center py-16'>
                <h1>Vendor 1</h1>
                <h1>Contact Details</h1>
                <div className='bg-white shadow-md cursor-pointer w-[6vw] h-[5vh] flex justify-center items-center'>
                  <h1>Shop Item</h1>
                </div>
            </div>
          </div>
            <div className='w-[15vw] h-[30vh] bg-white'>
              <div className='flex flex-col space-y-5 justify-center items-center py-16'>
                <h1>Vendor 1</h1>
                <h1>Contact Details</h1>
                <div className='bg-white shadow-md cursor-pointer w-[6vw] h-[5vh] flex justify-center items-center'>
                  <h1>Shop Item</h1>
                </div>
            </div>
          </div>
            <div className='w-[15vw] h-[30vh] bg-white'>
              <div className='flex flex-col space-y-5 justify-center items-center py-16'>
                <h1>Vendor 1</h1>
                <h1>Contact Details</h1>
                <div className='bg-white shadow-md cursor-pointer w-[6vw] h-[5vh] flex justify-center items-center'>
                  <h1>Shop Item</h1>
                </div>
            </div>
          </div>
            <div className='w-[15vw] h-[30vh] bg-white'>
              <div className='flex flex-col space-y-5 justify-center items-center py-16'>
                <h1>Vendor 1</h1>
                <h1>Contact Details</h1>
                <div className='bg-white shadow-md cursor-pointer w-[6vw] h-[5vh] flex justify-center items-center'>
                  <h1>Shop Item</h1>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VendorPage