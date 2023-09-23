import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function UserSign_Up() {
    let navigate = useNavigate()
    const submit = ()=>{
        setTimeout(() => {
            navigate("/UserLogin")
          }, 2000);
        
    }
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center">
            <h1 className='font-bold text-3xl text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded'>Sign Up</h1>
            <div className="bg-white p-8 rounded shadow-md w-[30rem] space-y-10 ">
                <div class="relative flex gap-10 items-center justify-center">
                    <div>Name</div>
                    <div>
                        <input type="text" id="name" name="name" placeholder='Admin Name' class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div class="relative flex gap-10 items-center justify-center">
                    <div>Email</div>
                    <div>
                        <input type="text" id="email" name="name" placeholder='Admin Email' class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div class="relative flex gap-10 items-center justify-center">
                    <div>Password</div>
                    <div>
                        <input type="text" id="pass" name="name" placeholder='Admin Password' class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div class="relative flex gap-10 items-center justify-center">
                    <div>Category</div>
                    <div>
                        <input type="text" id="email" name="name" placeholder='Admin Email' class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className='flex gap-10 px-36'>
                <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={submit}>Submit</button>
                </div>
            </div>
        </div>
  )
}

export default UserSign_Up;
