'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { login } from '@/api/auth/auth';

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState('admin');
    const [password, setPassword] = useState('lmsteam');
    const router = useRouter();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleLogin = async () => {
        try {
            setIsLoading(true);
            const response = await login({ username, password });

            if (response.status === 200) {
                // Lưu token đăng nhập vào localStorage hoặc sessionStorage
                const { token, refreshToken, refreshTokenExpires } = response.data;
                const StorageData = {
                    theRefresh: {
                        refreshToken,
                        refreshTokenExpires,
                    },
                    token: token,
                };
                localStorage.setItem('MyStorageData', JSON.stringify(StorageData));
                // thông báo
                toast.success('Đăng nhập thành công', { position: 'top-right' });
                // Chuyển hướng đến trang dashboard
                router.push('/dashboard');
            }
        } catch (error) { 
            toast.error('Vui lòng kiểm tra lại thông tin đăng nhập!', { position: 'top-right' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex w-full max-w-3xl">
                <div className="w-1/2">
                    <img
                        src="https://i.ytimg.com/vi/tjRikYv4Lec/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCig4h6F-Kn5T1D60tSvo4h8wFvuw"
                        alt="Image"
                        className="w-full h-auto"
                    />
                </div>
                <div className="w-1/2 px-4">
                    <h1 className="text-2xl font-bold mb-4">Login</h1>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-6 relative">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="******************"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span
                                className="absolute right-0 top-5 mt-2 mr-4 text-gray-700 cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                disabled={isLoading}
                                onClick={handleLogin}
                            >
                                {isLoading ? 'Logging in...' : 'Sign In'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
