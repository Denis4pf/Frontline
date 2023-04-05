import React, { useState } from 'react';

function Login({handleClick}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError ] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // handle email and password change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  // handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
   try{
    //send request to server check the credentials
    const response = await fetch('/api/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    const data = await response.json();
    if (response.ok) {
      // redirect to the admin panel
      window.location.href ='/';
    } else {
      setError(data.message);
    }
   } catch (error) {
    setError('An error occurred while logging in.');
   }
   setIsLoading(false);
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
        {error && (
            <div className='input-control' style={{ color: "red" }}>
                    <p>{error}</p>
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
