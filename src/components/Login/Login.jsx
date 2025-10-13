import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

const Login = () => {
    const { signInUser } = use(AuthContext);

    const handleLogIn = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-3xl font-bold">Please Login!</h1>
                <form onSubmit={handleLogIn}>
                    <fieldset className="fieldset">
                        {/* email field */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        {/* password field */}
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>
                <p>New to our website? Please <Link className='text-blue-500 hover:text-blue-800' to="/register">Register</Link> </p>
            </div>
        </div>
    );
};

export default Login;