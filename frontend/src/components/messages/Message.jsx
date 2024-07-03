import React from 'react';
import { useAuthcontext } from '../../context/Authcontext';
import useConversation from '../../zustand/useConversation';
import { format } from 'date-fns';

function Message({ message }) {
  const { Authuser } = useAuthcontext();
  const { selectedConversation } = useConversation();

  // Ensure selectedConversation and message are defined
  if (!selectedConversation || !message) {
    return null;
  }

  const fromMe = message.senderId === Authuser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? Authuser.Profilepic : selectedConversation.Profilepic;
  const bubbleBgColor = fromMe ? 'bg-blue-500' : 'bg-green-700';

  // Format the created time
  const createdTime = message.createdAt ? format(new Date(message.createdAt), 'p') : '';

  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img
            alt="chat profile"
            src={profilePic}
          />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>{message.message}</div>
      <div className='chat-footer  text-xs flex gap-1 items-center'>{createdTime}</div>
    </div>
  );
}

export default Message;
