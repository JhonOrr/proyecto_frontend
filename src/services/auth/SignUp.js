import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from './AuthContext';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {createUser} = UserAuth();
  const navigate = useNavigate();

  const signUp = async (e) =>{
    e.preventDefault();
    setError('');
    try{
        await createUser(email, password);
        navigate('/dashboard')
    } catch (e) {
        setError(e.message)
        console.log(e.message)
    }
};

  return (
    <div className="sign-in-container">
      <form onSubmit={signUp}>
        <h1>Create an account{error}</h1>
        <input 
        type="email"
        placeholder="enter your email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <input
        type="password"
        placeholder="Enter your password" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
