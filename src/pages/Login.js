import React from 'react'

import loginImg from '../assets/login.jpg'
import { signIn } from '../api';
import { FormProvider, useForm } from 'react-hook-form';
import RhfTextField from '../components/form/RhfTextField';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Login() {
    const navigate = useNavigate();
    const methods = useForm();
    const { handleSubmit } = methods;
    const login = async (data) => {
        console.log(data);
        try {
            const response = await signIn({ username: data.username, password: data.password });
            toast.success("Login successfully");
            console.log(response.data);
            const authObj = {
                isAuthenticated: true,
                user: response.data.user,
                jwt: response.data.jwt
            }
            localStorage.setItem("auth", authObj);
            navigate("/admin");

        } catch (error) {
            toast.error("Login failed! Check your username and password");
        }

    }
    return (
        <FormProvider {...methods}>
            <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
                <div className='hidden sm:block'>
                    <img className='w-full h-full object-cover' src={loginImg} alt="" />
                </div>

                <div className='bg-gray-800 flex flex-col justify-center'>
                    <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                        <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN IN</h2>
                        <div className='flex flex-col text-gray-400 py-2'>
                            <label>Username</label>
                            <RhfTextField name="username" size='small' className='rounded-lg bg-gray-700 ' type="text" />
                        </div>
                        <div className='flex flex-col text-gray-400 py-2'>
                            <label>Password</label>
                            <RhfTextField name="password" size='small' className='rounded-lg bg-gray-700 ' type="password" />
                        </div>
                        <div className='flex justify-between text-gray-400 py-2'>
                            <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                            <p>Forgot Password</p>
                        </div>
                        <button onClick={handleSubmit(login)} className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>SIGNIN</button>
                        <Link href="/signup" className='line-clamp-1'>Sign Up</Link>

                    </form>
                </div>
            </div>
        </FormProvider>
    )
}
