import React from 'react'
import { useNavigate } from 'react-router-dom'


const Vendor = () => {
    let navigate = useNavigate();
    const handleSubmit =()=>{
        navigate('/VendorLogin')
    }
    const VendorPage=()=>{
        navigate('/Vendor_Product')
    }
    const addNewItems = ()=>{
        navigate('/AddNewItems')
    }
    const Transection = ()=>{
        navigate('/Transection')
    }
  return (
     <div className='bg-[#4472C4] h-[100vh]'>
       <div className='p-10'>
       <div className='bg-white h-[5vh] flex justify-center items-center'>
        <h1 className='font-bold text-3xl '>Welcome Vendor</h1>
       </div>
            <div className='flex justify-around items-center mt-6'>
              <h1 className='bg-white p-5 rounded-md font-bold text-2xl cursor-pointer' onClick={VendorPage}>Your Item</h1>
              <h1 className='bg-white p-5 rounded-md font-bold text-2xl cursor-pointer' onClick={addNewItems}>Add New Items</h1>
              <h1 className='bg-white p-5 rounded-md font-bold text-2xl cursor-pointer' onClick={Transection}>Transection</h1>
              <h1 className='bg-white p-5 rounded-md font-bold text-2xl cursor-pointer' onClick={handleSubmit}>LogOut</h1>
            </div>
        </div>
    </div>
  )
}

export default Vendor