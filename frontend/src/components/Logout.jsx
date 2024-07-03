import React from 'react';
import { RiLogoutBoxLine } from "react-icons/ri";
import useLogout from '../hooks/useLogout';

const Logout = () => {
  const { Loading, logout } = useLogout();
  
  return (
    <div className='mt-auto'>
      {!Loading ? (
        <RiLogoutBoxLine className='w-6 h-6 text-white cursor-pointer' onClick={logout} />
      ) : (
        <span className='Loading Loading-spinner'></span>
      )}
    </div>
  );
}

export default Logout;
