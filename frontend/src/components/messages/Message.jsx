import React from 'react'

function Message() {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
              <img
               alt="tailwid css chat bubble component"
               src={'https://gravatar.com/avatar/a1e947d062092b5c90b59d383542f269?s=400&d=robohash&r=x'
               }
              />
            </div>
        </div>
        <div className={'chat-bubble text-white bg-blue-500'}>working or not</div>
        <div className='chat-ffoter opacity -50 text-xs flex gap-1 items-center'>12:42</div>
    </div>
  )
}

export default Message