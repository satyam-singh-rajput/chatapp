import React from 'react'

function Signup() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Signup to 
          <span className='text-blue-500'> Chat-Chat</span>
        </h1>
        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>FullName</span>
            </label>
            <input type='text' placeholder='Enter your Fullname' className='w-full input input-bordered h-10 text-black'></input>
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type='text' placeholder='Enter your Username' className='w-full input input-bordered h-10 text-black'></input>
          </div>
          <div>
            <label className='label '>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type='password' placeholder='Enter your Password' className='w-full input input-bordered h-10 text-black'></input>
          </div>
          <div>
            <label className='label '>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type='password' placeholder='Enter your Password' className='w-full input input-bordered h-10 text-black'></input>
          </div>       
          <div className='mt-4'>
            {/* <span className='text-base label-text'>Gender</span> */}
            <div className='flex items-center'>
              <label className='mr-4'>
                <input type='radio' name='gender' value='male' className='mr-2' />
                Male
              </label>
              <label>
                <input type='radio' name='gender' value='female' className='mr-2' />
                Female
              </label>
            </div>
          </div>          
          <a href='#' className='text-1m hover:underline hover:text-blue-500 mt-1 inline-block'>Already have an account</a>
          <div>
            <button className='btn btn-block mt-2 bg-blue-500 text-white hover:bg-green-700'>Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup