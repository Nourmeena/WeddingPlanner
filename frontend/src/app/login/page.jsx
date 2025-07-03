'use client';
import './page.css';
import './bootstrap.css';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { baseURL } from '@/utils/constant';
import { toast } from 'react-toastify';
import { setAuthentication } from '@/utils/auth';
import { isLogin } from '@/utils/auth';
import Link from 'next/link';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // State for error message
    const router = useRouter();

    useEffect(() => {
        const authenticatie = async () => {
            if (await isLogin()) {
                router.push("/");
            }
        };
        authenticatie();
    }, [router]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Reset error message on new submission

        const payload = { email, password };

        try {
            const res = await axios.post(`${baseURL}/login`, payload);
            setAuthentication(res.data.token);
            toast.success("Login Successfully");
            router.push("/");
        } catch (error) {
            const message = error?.response?.data?.message || "An error occurred";
            setErrorMessage(message); // Set the error message for display
            toast.error(message); // Optionally show toast as well
        }
    };

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="row border rounded-5 p-3 bg-white shadow box-area">
                    {/* Left Box */}
                    <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{ background: '#9B7D67' }}>
                        <div className="featured-image mb-3">
                            <Image src="/images/logo.png" alt="Logo" width={250} height={250} className="img-fluid" />
                        </div>
                        <p className="text-white fs-2" style={{ fontFamily: "'Courier New', Courier, monospace", fontWeight: 600 }}>
                            All you need is here
                        </p>
                        <small className="text-white text-wrap text-center" style={{ width: '17em', fontFamily: "'Courier New', Courier, monospace" }}>
                            Your wedding planning enjoyment starts here
                        </small>
                    </div>

                    {/* Right Box */}
                    <div className="col-md-6 right-box">
                        <div className="row align-items-center">
                            <div className="header-text mb-4">
                                <h2>Hello</h2>
                                <p>We are happy to have you back.</p>
                            </div>
                            <form onSubmit={handleSubmit} className="form">
                                <div className="input-group mb-1">
                                    <label>
                                        <img className="logicon" src="/images/icon/email.png" alt="Email Icon" />
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="loginform"
                                        placeholder="Email"
                                        required
                                    />
                                    <div className="email error"></div>
                                </div>
                                <div className="input-group mb-1">
                                    <label>
                                        <img className="logicon" src="/images/icon/lock.png" alt="Lock Icon" />
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="loginform"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                        required
                                    />
                                    <div className="password error"></div>
                                </div>
                                {errorMessage && (
                                    <div className="alert alert-danger mb-3">{errorMessage}</div> // Display error message
                                )}
                                <div className="input-group mb-5 d-flex justify-content-between">
                                    <div className="form-check">
                                        <label>
                                            <input type="checkbox" required />
                                            Remember me
                                        </label>
                                    </div>
                                    <div className="forgot">
                                        <a href="#"> Forget Password? </a>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <button id="logb" type="submit" className="btn btn-lg btn-primary w-100 fs-6">Login</button>
                                </div>
                                <div className="login-register">

                                    Don't have an account?
                                    <Link id="link" href="/signup" className='register-link'>Sign up</Link>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;