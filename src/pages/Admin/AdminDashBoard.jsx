import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AdminDashBoard = () => {
  return (
    <div className='flex h-[max-content] w-full overflow-y-auto relative flex-col justify-center items-center md:flex-row'>
      <div className='w-[max-content] flex-grow-[1]'>
        <div class="flex flex-wrap  bg-gray-100  h-[30rem]">
          <div class="w-[20rem] bg-white rounded p-5 shadow-lg">
            <div class="flex items-center space-x-4 p-10 mb-10">
              <img class="h-16 rounded-full" src="http://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="James Bhatta" />
              <div>
                <h4 class="font-semibold text-[1rem] text-[#000] capitalize font-poppins tracking-wide">James Bhatta</h4>
                <span class="text-sm tracking-wide flex items-center space-x-1">
                  <svg class="h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg><span class="text-[#000] text-sm">Seller</span>
                </span>
              </div>
            </div>
            <ul class="space-y-7 text-lg">
              <li>
                <Link to="create-category" class="flex items-center space-x-3 text-[#000] p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                  <span class="text-[#000]">
                    <svg class="h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                    </svg>
                  </span>
                  <span>Create Category</span>
                </Link>
              </li>
              <li>
                <Link to="create-product" class="flex items-center space-x-3 text-[#000] p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                  <span class="text-[#000]">
                    <svg class="h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                    </svg>
                  </span>
                  <span>Create Product</span>
                </Link>
              </li>
              <li>
                <Link to="products" class="flex items-center space-x-3 text-[#000] p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                  <span class="text-[#000]">
                    <svg  class="h-6" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect x="8" y="8" width="12" height="12"></rect><rect x="26" y="8" width="12" height="12"></rect><rect x="26" y="44" width="12" height="12"></rect><rect x="44" y="8" width="12" height="12"></rect><rect x="8" y="26" width="12" height="12"></rect><rect x="26" y="26" width="12" height="12"></rect><rect x="44" y="26" width="12" height="12"></rect><rect x="8" y="44" width="12" height="12"></rect><rect x="44" y="44" width="12" height="12"></rect></g></svg>
                  </span>
                  <span>Products</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet  />
    </div>
  )
}

export default AdminDashBoard
