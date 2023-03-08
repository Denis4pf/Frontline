import React, { useState } from 'react';

function Login({handleClick}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors ] = useState('');

  // handle email and password change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const [isLoading ] = useState(false);
  // handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // check if the entered credentials are correct
    if (email === 'admin' && password === 'admin') {
      // redirect to the admin panel
      window.location.href = '/';
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="reg-container">
    <form onSubmit={handleSubmit} id="form">
        <h1>Login</h1>
        <div className="input-control">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" value={email} onChange={handleEmailChange} />
        </div>
        <div></div>
        <div className="input-control">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
        </div>
        {errors.length > 0 && (
            <div className='input-control' style={{ color: "red" }}>
                {errors.map((error) => (
                    <p key={error}>{error}</p>
                ))}
            </div>
        )}
        <button type="submit" disabled={isLoading ? 'true' : ""}>{isLoading ? "Logging in..." : "Login"}</button>
        <div className="input-control">
            <p>Don't Have an Account? <a href="signup" onClick={handleClick} >Register</a></p>
        </div>
    </form>
</div>
  );
}

export default Login;
