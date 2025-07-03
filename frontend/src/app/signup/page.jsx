'use client';
import './page.css';
import './bootstrap.css';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { baseURL } from '@/utils/constant';
import { toast } from 'react-toastify';
import { isLogin } from '@/utils/auth';

const SignupForm = () => {
    const [groomName, setGroomName] = useState('');
    const [brideName, setBrideName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    useEffect(() => {
        const authenticate = async () => {
            if (await isLogin()) {
                router.push("/");
            }
        };
        authenticate();
    }, [router]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted with:", { groomName, brideName, email, password });

        const payload = {
            groomName,
            brideName,
            email,
            password
        };

        try {
            const res = await axios.post(`${baseURL}/signup`, payload);
            toast.success("Account Created Successfully! Please log in.");
            router.push("/login");
        } catch (error) {
            console.error("Error during signup:", error);
            toast.error(error?.response?.data?.message || "An error occurred");
        }
    };

    return (
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
                            <h2>Welcome!</h2>
                            <p>Let's sign up</p>
                        </div>
                        <form onSubmit={handleSubmit} className="form">
                            <div className="input-group mb-3">
                                <label>
                                    <img className="logicon" src="/images/icon/groom1.png" alt="Groom Icon" />
                                    Groom's name
                                </label>
                                <input
                                    className="loginform"
                                    type="text"
                                    value={groomName}
                                    onChange={(e) => setGroomName(e.target.value)}
                                    placeholder="Name"
                                    required
                                />
                            </div>
                            <div className="input-group mb-1">
                                <label>
                                    <img className="logicon" src="/images/icon/bride_6491145.png" alt="Bride Icon" />
                                    Bride's name
                                </label>
                                <input
                                    className="loginform"
                                    type="text"
                                    value={brideName}
                                    onChange={(e) => setBrideName(e.target.value)}
                                    placeholder="Name"
                                    required
                                />
                            </div>
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
                            </div>
                            <div className="input-group mb-5 d-flex justify-content-between">
                                <div className="form-check">
                                    <label>
                                        <input type="checkbox" required />
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <button id="logb" type="submit" className="btn btn-lg btn-primary w-100 fs-6">Register</button>
                            </div>
                            <div className="login-register">
                                <p>
                                    Already have an account?
                                    <a href="/login" className="register-link">Login</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;