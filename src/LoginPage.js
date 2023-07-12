import React, { useState } from 'react';
import myImage from './Clinsys logo@2x.png';

const styles = {
    link: {
        fontSize: "12px" , 
        fontWeight: "semibold" , 
        textDecoration: "none"
    },
  };

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here, such as sending the email and password to a server
    console.log('Login submitted');
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember me:', rememberMe);
  };

  return (
    <div style={{ backgroundColor: '#0065FF', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'white', padding: '50px',margin: '30px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', width: '400px' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={myImage} alt="Login Image" style={{ width: '100px', marginBottom: '5px' }} />
        </div>
        <h2 style={{ textAlign: 'center' }}>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="email" style={{ display: 'block' , margin: '5px'}}>Email ID</label>
            <input type="text" id="email" name="email" placeholder="Email ID" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '17px' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="password" style={{ display: 'block', margin: '5px'}}>Password</label>
            <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '17px' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" name="rememberMe" id="rememberMe" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} style={{ marginRight: '5px' }} />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <a href="#forgotPassword" style={{...styles.link , color:`blue`}}>Forgot password?</a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <input type="submit" value="LOGIN" style={{ width: '100%', padding: '10px', backgroundColor: '#0052CC', color: 'white', border: 'none', borderRadius: '17px', cursor: 'pointer', margin: '25px 0px 10px', transition: 'background-color 0.3s' }} 
          onMouseOver={(e) => e.target.style.backgroundColor = '#0747A6'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#0052CC'} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <a href="#createAccount" style={{...styles.link , color:`blue`}}>Create a new account</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
