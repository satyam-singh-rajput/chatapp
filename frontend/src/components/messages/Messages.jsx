import React from 'react';
import Message from './Message';

function Messages() {
  return (
    <div className='px-4 flex-1 overflow-auto' style={{ maxHeight: '400px' }}>
      <div className="flex flex-col-reverse">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    </div>
  );
}

export default Messages;
