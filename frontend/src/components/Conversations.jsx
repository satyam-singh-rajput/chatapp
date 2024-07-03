import React from 'react';
import Conversation from './Conversation';
import useGetConversations from '../hooks/useGetConversations';
import { getRandomEmoji } from '../utils/emojis'; 

function Conversations() {
  const { Loading, conversations } = useGetConversations();

  if (Loading) {
    return <div>Loading...</div>;
  }

  // console.log(Conversation);
  // if (!Array.isArray(conversations)) {
  //   console.log(conversations);
  //   return <div>No conversations available.</div>;
  // }
  // console.log(conversations);
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastidx={idx === conversations.length - 1}
        />
      ))}
    </div>
  );
}

export default Conversations;
