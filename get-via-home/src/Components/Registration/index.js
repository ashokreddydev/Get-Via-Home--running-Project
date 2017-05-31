import React  from 'react';
import './index.css';



class Registration extends React.Component {
  render() {
      
   
    return (
      <div className="login-body login-body2" >  
    <div className="container" >
      <form className="form-signin form-reg" action="index.html">
        <h2 className="form-signin-heading">registration now</h2>
        <div className="reg-wrap" id="reg-login">
			<div className="col-md-12">
				<p>Enter your personal details below</p>
			</div>
			<div className="col-md-6">
				<div className="reg-login-info">
					<input placeholder="First Name" type="text" required />
				</div>
			</div>
			<div className="col-md-6">
				<div className="reg-login-info">
					<input placeholder="Last Name" type="text" required />
				</div>
			</div>
			<div className="col-md-6">
				<div className="reg-login-info" id="">
					<input placeholder="Address" type="text" required />
				</div>
			</div>
			<div className="col-md-6">
				<div className="reg-login-info" id="">
					<input placeholder="Email" type="text" required />
				</div>
			</div>
			<div className="col-md-6">
				<div className="reg-login-info" id="">
					<input placeholder="City/Town" type="text" required />
				</div>
			</div>
			<div className="col-md-12">
				<p> Enter your account details below</p>
			</div>
			<div className="col-md-6">
				<div className="reg-login-info" id="">
					<input placeholder="User Name" type="text" required />
				</div>
			</div>
			<div className="col-md-6">
				<div className="reg-login-info" id="">
					<input placeholder="Password" type="password" required />
				</div>
			</div>
			<div className="col-md-6">
				<div className="reg-login-info" id="">
					<input placeholder="Re-type Password" type="password" required />
				</div>
			</div>
			<div className="col-md-12">
				<label className="active customlabel reg-bottom">
				  <input type="checkbox" name='email1' /><i className="fa fa-square-o"></i><i className="fa fa-check-square-o"></i> <span> I agree to the Terms of Service and Privacy Policy</span>
				</label>
							</div>
            <button className="btn btn-md btn-login btn-block" type="submit">Submit</button>
            <div className="registration">
                Already Registered.
                <a className="" href="/">
                    Login
                </a>
            </div>

        </div>

      </form>

    </div>

  </div>

  
    );
  }
}

export default Registration;
