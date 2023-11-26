import React from 'react'

import loginImg from '../assets/login.jpg'
import { TextField } from '@mui/material'
import { signUp } from '../api'
import { FormProvider, useForm } from 'react-hook-form'
import RhfTextField from '../components/form/RhfTextField'

export default function SignUp() {
    const methods = useForm();
    const { handleSubmit } = methods;
    const signUp = async (data) => {
        console.log(data);
        await signUp(data)
    }
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={loginImg} alt="" />
            </div>

            <FormProvider {...methods}>
                <div className='bg-gray-800 flex flex-col justify-center'>
                    <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                        <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN IN</h2>
                        <div className='flex flex-col text-gray-400 py-2'>
                            <label>Username</label>
                            <RhfTextField name="username" size='small' className='rounded-lg bg-gray-700 ' type="text" />
                        </div>
                        <div className='flex flex-col text-gray-400 py-2'>
                            <label>Email</label>
                            <RhfTextField name="email" size='small' className='rounded-lg bg-gray-700 ' type="email" />
                        </div>
                        <div className='flex flex-col text-gray-400 py-2'>
                            <label>Password</label>
                            <RhfTextField name="password" size='small' className='rounded-lg bg-gray-700 ' type="password" />
                        </div>
                        <div className='flex flex-col text-gray-400 py-2'>
                            <label>Confirm Password</label>
                            <RhfTextField name="confirmPassword" size='small' className='rounded-lg bg-gray-700 ' type="password" />
                        </div>

                        <button onClick={handleSubmit(signUp)} className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>SIGNIN</button>

                    </form>
                </div>
            </FormProvider>
        </div>
    )
}
