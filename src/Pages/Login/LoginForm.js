import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import swal from 'sweetalert';
// import swal from 'sweetalert';
import { AuthContext } from '../../Root/Context/AuthProvider';


const LoginForm = () => {
    const {login} = useContext(AuthContext);
    const {googleSignIn, gitHubSignIn} = useContext(AuthContext)
    const [error, setError] = useState();

    const gitProvider = new GithubAuthProvider();
    const provider = new GoogleAuthProvider();

    const hangleGoogleLogin =()=>{
        googleSignIn(provider)
            .then(result =>{
                const user = result.user;
                console.log(user)
            })
            .catch(error=>{
                console.log(error)
            })
      }
      
      const hangleGithubLogin =()=>{
        gitHubSignIn(gitProvider)
            .then(result =>{
                const user = result.user;
                console.log(user)
            })
            .catch(error=>{
                console.log(error)
            })
      }

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
      
        login(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            form.reset();
            swal('Login Successfully')
        })
        .catch(e => {
            console.error(e);
            swal(e.message);
        });
      }

    return (
        <>
        <form onSubmit={handleLogin} action="#" method="POST" className="mt-8 text-left">
            <div className="space-y-5">

                <div>
                    <label for="" className="text-base font-medium text-gray-900"> Email address </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                        </div>

                        <input
                            type="email"
                            name="email"
                            id=""
                            placeholder="Enter email to get started"
                            className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                        />
                    </div>
                </div>

                <div>
                    <label for="" className="text-base font-medium text-gray-900"> Password </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                />
                            </svg>
                        </div>

                        <input
                            type="password"
                            name="password"
                            id=""
                            placeholder="Enter your password"
                            className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                    >
                        Sign up
                    </button>
                </div>
            </div>
        </form>

            <div className="mt-3 space-y-3">
                <button
                    type="button"
                    className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                >
                    <div onClick={hangleGoogleLogin} className="absolute inset-y-0 left-0 p-4 text-blue-600">
                        <FaGoogle/>
                    </div>
                    Sign up with Google
                </button>

                <button
                    type="button"
                    className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                >
                    <div onClick={hangleGithubLogin} className="absolute inset-y-0 left-0 p-4">
                        <FaGithub/>
                    </div>
                    Sign up with GitHub
                </button>
            </div>
        </>
    );
};

export default LoginForm;