import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import useConversation from '../zustand/useConversation';
import useGetConversations from '../hooks/useGetConversations';
import toast from 'react-hot-toast';

function Searchbar() {
  const [search, setSearch] = useState("");
  const { setselectedConversation} = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!search) return;

    const conversation = conversations.find((c) => 
      c.Fullname.toLowerCase().includes(search.toLowerCase())
    );
    console.log(conversation);
    if (conversation) {
      setselectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No user found");
    }
  };

  return (
    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder='Search..' 
        className='input input-bordered rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className='btn btn-circle bg-sky-500 text-white p-2 hover:bg-sky-600'>
        <FaSearch />
      </button>
    </form>
  );
}

export default Searchbar;
