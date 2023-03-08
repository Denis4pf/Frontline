import React, { useState } from 'react';
import '../components/Login'

function SignupForm({ handleClick, onLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);

  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>

        <h3>Sign Up</h3>
        <label className='label'>
          Full Name
          <input type="text" name="username" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label className='label'>
          Email address
          <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label className='label'>
          Password
          <input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <label className='label'>
          Confirm Password
          <input type="password" name="passwordConfirmation" value={passwordConfirmation} onChange={(event) => setPasswordConfirmation(event.target.value)} />
        </label>
        <br />
        {errors.length > 0 && (
          <div style={{ color: "red" }}>
            {errors.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        )}
        <button type="submit">{isLoading ?  'Submiting..' : 'Submit'}</button>
        <p>Already have an account? <a href='login' onClick={handleClick}>Login</a></p>
      </form>
    </div>
  );
}

export default SignupForm;