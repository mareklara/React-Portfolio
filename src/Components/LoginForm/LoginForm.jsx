import React from 'react'



export const LoginForm = () => {
  return (
    <div className='flex justify-center bg-slate-500'>
        <div className='bg-slate-200 w-96'>
            <form action="" className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <div className=''>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Email</label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="email" placeholder='Enter Email'/>
                </div>

                <div className=''>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Password</label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="password" placeholder='Enter Password'/>
                </div>
                <button className='bg-cyan-500 hover:bg-cyan-600 py-1 px-3 text-white w-full mt-2 rounded-lg'>Log in</button>
                <p>You agree to our terms and policies</p>
                <button  className='class="bg-lime-600 hover:bg-lime-700 text-white font-bold py-1 px-3 w-full rounded-lg"'>Create Account</button>
            </form>
            <p class="text-center text-gray-500 text-xs">
    &copy;2022 Marco Lara. All rights reserved.
  </p>
        </div>
    </div>
  )
}
