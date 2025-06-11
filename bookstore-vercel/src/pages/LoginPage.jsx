import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import validator from 'validator';

import libraryWindow from '../assets/libraryWindow.jpg'

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    async function logIn() {
        if (!validator.isEmail(email)) {
            setError("Invalid email.");
            return;
        }
        try {
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate('/books')

        } catch (e) {
            setError(e.message)
        }
    }
    return (
        <>
            <div className="custom-container mx-auto px-4 grid grid-cols-1 sm:grid-cols-[1fr_1fr] sm:gap-6 gap-y-8 py-6 bg-parchment">
                <div className="col-start-1 row-start-1 w-full max-w-[450px] border border-gray-300 shadow-md rounded-lg overflow-hidden">
                    <img
                        src={libraryWindow}
                        alt="window in library"
                        className="w-full h-48 sm:h-64 object-cover"
                    />
                    <div className="flex flex-col justify-end bg-parchment px-4 py-4">
                        <h2 className="text-2xl text-wornred font-semibold mb-2">Call To Action Message</h2>
                        <p className="text-black text-sm">
                            Welcome to my project! Proin congue ligula id risus posuere, vel eleifend ex egestas.
                            Sed in turpis leo. Aliquam malesuada in massa tincidunt egestas.
                        </p>
                    </div>
                </div>
                {error && <p>{error}</p>}
                <div className='col-start-1 row-start-2 sm:col-start-2 sm:row-start-1 w-full flex flex-col rounded-md shadow-md items-start justify-center text-left p-4 bg-gray-50'>
                    <h1 className='text-3xl items-center p-4'>Log In</h1>
                    <div className='flex flex-col items-start  gap-2 m-2'>
                        <label className='font-semibold'>
                            Email:
                            <input className='block border-wood border-2 rounded-lg p-1 mb-4'
                                placeholder='Your email address'
                                value={email}
                                onChange={e => setEmail(e.target.value)} />
                        </label>
                        <label className='font-semibold'>
                            Password:
                            <input
                                className='block border-wood border-2 rounded-lg p-1 mb-4'
                                type='password'
                                placeholder='Your password'
                                value={password}
                                onChange={e => setPassword(e.target.value)} />
                        </label>
                    </div>
                    <button className="w-30 bg-wornred hover:bg-ruby text-white p-1 m-4 rounded-md text-base font-medium"
                        onClick={logIn}>Log in</button>
                    <Link className=' m-4'
                        to='/create-account'>Don't have an account? Create one here</Link>
                </div>
            </div>
        </>

    )
}