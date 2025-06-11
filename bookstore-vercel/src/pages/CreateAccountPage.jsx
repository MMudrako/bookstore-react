import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import validator from 'validator';

import libraryWindow from '../assets/libraryWindow.jpg'
import axios from 'axios';

export default function CreateAccountPage() {
    const [username, setUsername] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    async function createAccount() {
        if (!validator.isEmail(email)) {
            setError("Invalid email.");
            return;
        }
        if (password !== confirmPassword) {
            setError('Password and Confirmed password do not match')
            return;
        }
        if (!username || username.length < 3) {
            setError("Username must be at least 3 characters");
            return;
        }
        try {
            const auth = getAuth();
            const userCred = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCred.user;

            await updateProfile(user, { displayName: username });

            const token = await user.getIdToken();

            await axios.post('api/users/create', {
                uid: user.uid,
                userName: username,
                email: user.email,
                avatar: '',
                cart: []
            }, {
                headers: {
                    authtoken: token
                }
            })

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
                    <h1 className='text-3xl items-center p-4'>Create Account</h1>
                    <div className='flex flex-col items-start  gap-2 m-2'>
                        <label className='font-semibold'>
                            Username:
                            <input className='block border-wood border-2 rounded-lg p-1 mb-4'
                                placeholder='Your username'
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                required />
                        </label>
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
                        <label className='font-semibold'>
                            Confirm Password:
                            <input
                                className='block border-wood border-2 rounded-lg p-1 mb-4'
                                type='password'
                                placeholder='Confirm Your password'
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)} />
                        </label>
                    </div>
                    <button className="w-30 bg-wornred hover:bg-ruby text-white p-1 m-4 rounded-md text-base font-medium"
                        onClick={createAccount}>Create Account</button>
                    <Link className=' m-4'
                        to='/login'>Already have an account? Login here</Link>
                </div>
            </div>
        </>

    )
}