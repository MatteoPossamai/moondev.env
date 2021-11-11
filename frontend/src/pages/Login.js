import React, { useState } from 'react';
import '../styles/style.css';
import LogSub from './LogSub';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [actMargin, setActMargin] = useState('0px');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted')
    };

    const changeHandlerL = () =>{
        setActMargin('0px');
    }

    const changeHandlerS = () => {
        setActMargin('77px');
        console.log(email);
    }

    return <form className='containerLogin' onSubmit={handleSubmit}>
        <h1>Login</h1>

        <div className="choose">
            <button id="logS" onClick={changeHandlerL}>Login</button>
            <button id="sigS" onClick={changeHandlerS}>Sign Up</button>
            <div className={actMargin==='0px' ? "lineaN"  : "lineaM" }></div>
        </div>

        <LogSub email={email} setEmail={setEmail} password={password} setPassword={setPassword} />

        <p>Don't have an account?<button className="sign">Sign up</button></p>
    </form>
}

export default Login;