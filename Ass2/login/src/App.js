import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();

    // Retrieve input value from the password field
    const passwordField = document.getElementById('password-field');
    const passwordValue = String(passwordField.value)
    const usernameField = document.getElementById('username');
    const usernameValue = String(username.value);
   

    // Make API call with the input value
    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username:usernameValue, password: passwordValue }),
      });

      // Handle response
      if (response.ok) {
        // API call successful, handle success case
        console.log('API call successful');
        setLoginSuccess(true);
      } else {
        // API call failed, handle error case
        console.error('API call failed');
      }
    } catch (error) {
      console.error('Error making API call:', error);
    }
  };
  
  return (
    
    <div className="img js-fullheight" style={{backgroundImage:"url(images/bg.jpg)"}}>
	<section className="ftco-section">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6 text-center mb-5">
					<h2 className="heading-section">Skill Rank Assessment</h2>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-md-6 col-lg-4">
					<div className="login-wrap p-0">
		      	<h3 className="mb-4 text-center">Have an account?</h3>
		      	<form onSubmit={handleSignIn} action="#" className="signin-form">
		      		<div className="form-group">
		      			<input id="username" type="text" className="form-control" placeholder="Username" required
                value={username}
                onChange={(e) => setUserName(e.target.value)}/>
		      		</div>
	            <div className="form-group">
	              <input id="password-field" type="password" className="form-control" placeholder="Password" required
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
	              <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
	            </div>
	            <div className="form-group">
	            	<button type="submit" className="form-control btn btn-primary submit px-3">Sign In</button>
	            </div>
              {loginSuccess && <p>Login successful!</p>}
             
	            <div className="form-group d-md-flex">
	            	<div className="w-50">
		            	<label className="checkbox-wrap checkbox-primary">Remember Me
									  <input type="checkbox" checked/>
									  <span className="checkmark"></span>
									</label>
								</div>
								<div className="w-50 text-md-right">
									<a href="#" style={{color: "#fff"}}>Forgot Password</a>
								</div>
	            </div>
	          </form>
	          <p className="w-100 text-center">&mdash; Or Sign In With &mdash;</p>
	          <div className="social d-flex text-center">
	          	<a href="#" className="px-2 py-2 mr-md-1 rounded"><span className="ion-logo-facebook mr-2"></span> Facebook</a>
	          	<a href="#" className="px-2 py-2 ml-md-1 rounded"><span className="ion-logo-twitter mr-2"></span> Twitter</a>
	          </div>
		      </div>
				</div>
			</div>
		</div>
	</section>


	</div>
  );
}

export default App;
