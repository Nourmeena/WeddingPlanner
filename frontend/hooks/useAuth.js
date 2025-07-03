// hooks/useAuth.js
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isLogin } from '@/utils/auth';

const useAuth = (setUser) => {
    const router = useRouter();

    useEffect(() => {
        const authenticate = async () => {
            const loggedIn = await isLogin();

            if (loggedIn.auth) {
                setUser(loggedIn.data);
            } 
        };
        authenticate();
    }, [router, setUser]);
};

export default useAuth;