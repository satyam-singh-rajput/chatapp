import React from 'react'
import { FaSearch } from "react-icons/fa";
function Searchbar() {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder='Search..' className='input input-bordered rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500'></input>
        <button type="submit" className='btn btn-circle bg-sky-500 text-white p-2 hover:bg-sky-600'>
        <FaSearch />
        </button>
    </form>
  )
}

export default Searchbar
