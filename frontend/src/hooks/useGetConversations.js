import { useEffect, useState } from "react"
import toast from "react-hot-toast";

const useGetConversations = () => {
    const [Loading,setLoading]=useState(false);
    const [conversations,setconversations]=useState([]);
    useEffect(()=>{
        const getConversations=async()=>{
            setLoading(true);
            try {
                const res= await fetch('/api/users');
                const data= await res.json();
                if(data.error){
                        throw new Error(data.error);
                }
                setconversations(data);   
            } catch (error) {
                toast.error(error.message);   
            } finally{
                setLoading(false);
            }
        }
        getConversations();
    },[]);
    return {Loading,conversations};
}

export default useGetConversations