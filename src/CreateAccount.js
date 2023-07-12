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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termAndCondition, setTermAndCondition] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here, such as sending the email and password to a server
    console.log('Account Created');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Term And Condition:', termAndCondition);
  };

  return (
    <div style={{ backgroundColor: '#0065FF', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'white', padding: '50px',margin: '30px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', width: '400px' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img src={myImage} alt="Login Image" style={{ width: '100px', marginBottom: '5px' }} />
        </div>
        <h2 style={{ textAlign: 'center' }}>CREATE ACCOUNT</h2>
        <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
            <label htmlFor="name" style={{ display: 'block' , margin: '5px'}}>Name</label>
            <input type="text" id="name" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '17px' }} />
          </div>
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
              <input type="checkbox" name="termAndCondition" id="termAndCondition" checked={termAndCondition} onChange={(e) => setTermAndCondition(e.target.checked)} style={{ marginRight: '5px' }} />
              <label htmlFor="termAndCondition" style={styles.link}>I Accept <a href="#termsAndCondition" style={{...styles.link , color:`blue`}}>Terms & Condition</a></label>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <input type="submit" value="LOGIN" style={{ width: '100%', padding: '10px', backgroundColor: '#0052CC', color: 'white', border: 'none', borderRadius: '17px', cursor: 'pointer', margin: '25px 0px 10px', transition: 'background-color 0.3s' }} 
          onMouseOver={(e) => e.target.style.backgroundColor = '#0747A6'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#0052CC'} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' ,  alignItems: 'center'}}>
          <label htmlFor="alreadyHaveAnAccount"  style={styles.link} >Already have an Account <a href="#login" style={{...styles.link , color:`blue`}}>Login</a></label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
