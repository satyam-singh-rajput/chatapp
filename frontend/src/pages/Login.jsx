import React from 'react';

 function Login() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Login
          <span className='text-blue-500'> Chat-Chat</span>
        </h1>
        <form>
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
          <a href='#' className='text-1m hover:underline hover:text-blue-500 mt-2 inline-block'>New to chit-chat</a>
          <div>
            <button className='btn btn-block mt-2 bg-blue-500 text-white hover:bg-green-700'>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

