import { useState } from 'react';
import { useAuthcontext } from '../context/Authcontext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
    const [Loading, setLoading] = useState(false);
    const { Setauthuser } = useAuthcontext();
    const navigate = useNavigate();

    const login = async (Username, Password) => {
        setLoading(true);
        try {
            if(!Username||!Password){
                toast.error("All fields are neccesary");
                return ;
            }
            const res = await fetch("/api/auth/login", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ Username, Password })
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            localStorage.setItem("chat-user", JSON.stringify(data));
            Setauthuser(data);
            toast.success('Login successful!');
            navigate('/');  // Navigate to the home page on successful login
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { Loading, login };
};

export default useLogin;
