import React from 'react';
import useConversation from '../zustand/useConversation';
import { useSocketcontext } from '../context/Socketcontext';

function Conversation({ conversation, emoji, lastidx }) {
    const { selectedConversation, setselectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;
    const { onlineuser } = useSocketcontext();
    const isOnline = onlineuser.includes(conversation._id);
    // console.log(`isOnline for ${conversation._id}:`, isOnline); // Debugging line

    return (
        <>
            <div 
                className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-blue-500" : ""}`} 
                onClick={() => setselectedConversation(conversation)}
            >
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className='w-8 rounded-full'>
                        <img
                            src={conversation.Profilepic}
                            alt="user avatar"
                        />
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'>{conversation.Fullname}</p>
                        <span className='text-xl'>{emoji}</span>
                    </div>
                </div>
            </div>
            {!lastidx && <div className='divider my-0 py-0 h-1'></div>}
        </>
    );
}

export default Conversation;
