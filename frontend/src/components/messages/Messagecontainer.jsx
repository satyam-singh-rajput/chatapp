import React, { useEffect } from 'react';
import Messages from './Messages';
import Messageinput from './Messageinput';
import { TiMessages } from "react-icons/ti";
import useConversation from '../../zustand/useConversation';
import { useAuthcontext } from '../../context/Authcontext';

function Messagecontainer() {
  const { selectedConversation, setselectedConversation } = useConversation();

  useEffect(() => {
    return () => setselectedConversation(null);
  }, [setselectedConversation]);

  return (
    <div className='flex flex-col  w-full h-full'>
      {!selectedConversation ? (
        <Nochatselected />
      ) : (
        <>
          <div className='bg-slate-500 px-4 py-2'>
            <span className='label-text'>TO:</span>
            <span className='text-gray-900 font-bold'>{selectedConversation.Fullname}</span>
          </div>
          <div className='flex-1 overflow-auto'>
            <Messages />
          </div>
          <Messageinput />
        </>
      )}
    </div>
  );
}

export default Messagecontainer;

const Nochatselected = () => {
  const {Authuser}=useAuthcontext();
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-lg text-white-200 font-semibold flex flex-col items-center gap-2'>
        <p> Hi {Authuser.Fullname} 👋</p>
        <p>Start messaging your friends and have some fun</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  );
};
