import React from 'react'

const Vendor_Product = () => {
    return (
        <div className='bg-[#CACACA] h-[100vh]'>
            <div className='p-10'>
                <div className='flex justify-between'>
                    <button className='bg-white p-3 rounded-md cursor-pointer'>Home</button>
                    <button className='bg-white p-3 rounded-md cursor-pointer'>Log Out</button>
                </div>
                <div className='flex justify-center items-center'>
                    <h1 className='font-bold text-3xl'>Vendor Name</h1>
                </div>
                <div className='p-10'>
                    <h1 className='font-bold text-xl'>Product</h1>
                </div>
                <div className=' flex gap-6 justify-center items-center'>
                    <div className='w-[15vw] h-[30vh] bg-[#4472C4] rounded-md'>
                        <div className='flex flex-col space-y-5 justify-center items-center py-16 '>
                            <h1 className='text-white'>Product 1</h1>
                            <h1 className='text-white'>Price: $10</h1>
                            <div className='rounded-md bg-white shadow-md cursor-pointer w-[6vw] h-[5vh] flex justify-center items-center'>
                                <h1>Add to Cart</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-[15vw] h-[30vh] bg-[#4472C4] rounded-md'>
                        <div className='flex flex-col space-y-5 justify-center items-center py-16 '>
                            <h1 className='text-white'>Product 1</h1>
                            <h1 className='text-white'>Price: $10</h1>
                            <div className='rounded-md bg-white shadow-md cursor-pointer w-[6vw] h-[5vh] flex justify-center items-center'>
                                <h1>Add to Cart</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-[15vw] h-[30vh] bg-[#4472C4] rounded-md'>
                        <div className='flex flex-col space-y-5 justify-center items-center py-16 '>
                            <h1 className='text-white'>Product 1</h1>
                            <h1 className='text-white'>Price: $10</h1>
                            <div className='rounded-md bg-white shadow-md cursor-pointer w-[6vw] h-[5vh] flex justify-center items-center'>
                                <h1>Add to Cart</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-[15vw] h-[30vh] bg-[#4472C4] rounded-md'>
                        <div className='flex flex-col space-y-5 justify-center items-center py-16 '>
                            <h1 className='text-white'>Product 1</h1>
                            <h1 className='text-white'>Price: $10</h1>
                            <div className='rounded-md bg-white shadow-md cursor-pointer w-[6vw] h-[5vh] flex justify-center items-center'>
                                <h1>Add to Cart</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vendor_Product