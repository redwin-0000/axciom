import React from 'react';
import { Link } from 'react-router-dom';
function LandingPage() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
      <div class="relative flex flex-col gap-10 items-center justify-center">
        <h2 className="font-bold text-3xl text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Choose Login Type</h2>
        <ul className='space-y-10'>
          <li>
            <Link to="/AdminSign_Up" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-[20rem]">Admin Login</Link>
          </li>
          <li>
            <Link to="/UserSign_Up" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg  w-[26rem]">User Login</Link>
          </li>
          <li>
            <Link to="/VendorSign_Up" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg  w-36">Vendor Login</Link>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default LandingPage;
