import { useState } from 'react';
import { useAuthcontext } from '../context/Authcontext';
import { useNavigate } from 'react-router-dom';
import {Toaster} from 'react-hot-toast';

const useLogout = () => {
    const [Loading, setLoading] = useState(false);
    const { Setauthuser } = useAuthcontext();
    const navigate = useNavigate(); // Get the navigate function from useNavigate

    const logout = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/auth/logout', {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            localStorage.removeItem("chat-user");
            Setauthuser(null);
            navigate('/login'); // Redirect to the login page after logout
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { Loading, logout };
}

export default useLogout;
