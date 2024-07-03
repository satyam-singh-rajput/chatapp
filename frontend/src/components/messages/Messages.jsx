import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';
import useListenMessages from '../../hooks/useListenMessages';

function Messages() {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [messages]);

  const handleScrollToBottom = () => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='flex-1 overflow-auto px-4 relative'>
      <div className="flex flex-col-reverse">
        {loading ? (
          <div className="flex flex-col gap-4 w-52">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        ) : (
          Array.isArray(messages) && messages.length > 0 ? (
            messages.slice().reverse().map((message, index) => (
              <div key={message._id} ref={index === 0 ? lastMessageRef : null}>
                <Message message={message} />
              </div>
            ))
          ) : (
            <div>No conversation till now</div>
          )
        )}
      </div>

    </div>
  );
}

export default Messages;


// import React, { useEffect, useRef } from 'react';
// import Message from './Message';
// import useConversation from '../../zustand/useConversation';

// function Messages() {
//   const { messages, selectedConversation } = useConversation();
//   const lastMessageRef = useRef();

//   useEffect(() => {
//     if (messages.length > 0) {
//       setTimeout(() => {
//         lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
//       }, 100);
//     }
//   }, [messages]);

//   if (!selectedConversation) {
//     return <p className='text-center'>Select a conversation to view messages</p>;
//   }

//   return (
//     <div className='flex-1 overflow-auto px-4'>
//       <div className="flex flex-col-reverse">
//         {messages.length > 0 ? messages.map((message, index) => (
//           <div key={message._id} ref={index === 0 ? lastMessageRef : null}>
//             <Message message={message} />
//           </div>
//         )) : (
//           <p className='text-center'>Send a message to start the conversation</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Messages;
