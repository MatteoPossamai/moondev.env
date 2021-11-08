import React, { useState } from 'react';
import '../styles/style.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [activeS, setActiveS] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted')
    };
    return <form className='containerLogin' onSubmit={handleSubmit}>
        <h1>Login</h1>

        <div className="choose">
            <button>Login</button>
            <button>Sign Up</button>
        </div>

        <p>Email:</p>
        <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <p>Password:</p>
        <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className="sign">Forgot Password?</button>

        <button type="submit" id="sub" >Login</button>

        <p>Don't have an account?<button className="sign">Sign up</button></p>
    </form>
}

export default Login;