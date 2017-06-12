import React  from 'react';
import axios from 'axios';
import './index.css';



class Registration extends React.Component {
    
       constructor(props) 
            {
            super(props);
                    this.state = {
                    FirstName: '',
                    LastName: '',
                    Address: '',
                    Email: '',
                    City: '',
                    UserName: '',
                    Password: '',
                    Repassword: '',
                    Agree:false   
                                };
          
      
      
            }
      
    FirstName(event)
            {
                this.setState({FirstName: event.target.value});
                //console.log("FirstName:"+this.state.FirstName)
            }
    
    LastName(event)
            {
                this.setState({LastName: event.target.value});
                //console.log("LastName:"+this.state.LastName)
            }
      
    Address(event)
            {
                this.setState({Address: event.target.value});
               // console.log("Address:"+this.state.Address)
            }
    Email(event)
            {
                this.setState({Email: event.target.value});
                //console.log("Email:"+this.state.Email)
            }
    City(event)
            {
                this.setState({City: event.target.value});
                //console.log("City:"+this.state.City)
            }
    UserName(event)
            {
                this.setState({UserName: event.target.value});
                //console.log("UserName:"+this.state.UserName)
            }
    Password(event)
            {
                this.setState({Password: event.target.value});
               // console.log("Password:"+this.state.Password)
            }
    Repassword(event)
            {
                this.setState({Repassword: event.target.value});
               // console.log("Repassword:"+this.state.Repassword)
            }
     Agree(event)
            {
                this.setState({Agree: event.target.checked});
                //console.log("Agree:"+this.state.Agree)
                //alert(this.state.Agree)
            }
        
    
    UserRegister(){        
   	axios({
  method: 'post',
  url: '/api/register',
  data: {
    email: this.state.Email,
    username: this.state.UserName,
    password: this.state.Password,
    firstName: this.state.FirstName,
    lastName: this.state.LastName,
    city:this.state.City,
    address:this.state.Address,
    agree:this.state.Agree
 
  }
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    
    }
    
  render() {
     
   
    return (
      <div className="login-body login-body2" >
    <div className="container" >
      <div className="form-signin form-reg" action="index.html">
        <h2 className="form-signin-heading">registration now</h2>
        <div className="reg-wrap" id="reg-login">
			<div className="col-md-12">
				<p>Enter your personal details below</p>
			</div>
			<div className="col-md-6">
				<div className="reg-login-info">
					<input placeholder="First Name" type="text" onChange={this.FirstName.bind(this)} />
				</div>
			</div>
			<div className="col-md-6">
				<div className="reg-login-info">
					<input placeholder="Last Name" type="text" onChange={this.LastName.bind(this)} />
				</div>
			</div>
			<div className="col-md-6">
				<div className="reg-login-info" id="">
					<input placeholder="Address" type="text" onChange={this.Address.bind(this)} />
				</div>
			</div>
			<div className="col-md-6">
				<div className="reg-login-info" id="">
					<input placeholder="Email" type="text" onChange={this.Email.bind(this)} />
				</div>
			</div>
			<div className="col-md-6">
				<div className="reg-login-info" id="">
					<input placeholder="City/Town" type="text" onChange={this.City.bind(this)} />
				</div>
			</div>
			<div className="col-md-12">
				<p> Enter your account details below</p>
			</div>
			<div className="col-md-6">
				<div className="reg-login-info" id="">
					<input placeholder="User Name" type="text" onChange={this.UserName.bind(this)} />
				</div>
			</div>
			<div className="col-md-6">
				<div className="reg-login-info" id="">
					<input placeholder="Password" type="password" onChange={this.Password.bind(this)} />
				</div>
			</div>
			<div className="col-md-6">
				<div className="reg-login-info" id="">
					<input placeholder="Re-type Password" type="password" onChange={this.Repassword.bind(this)} />
				</div>
			</div>
			<div className="col-md-12">
				<label className="active customlabel reg-bottom">
				  <input type="checkbox" name='email1'  onChange={this.Agree.bind(this)}/><i className="fa fa-square-o"></i><i className="fa fa-check-square-o"></i> <span> I agree to the Terms of Service and Privacy Policy</span>
				</label>
							</div>
            <button className="btn btn-md btn-login btn-block" onClick={this.UserRegister.bind(this)}>Submit</button>
            <div className="registration">
                Already Registered.
                <a className="" href="/">
                    Login
                </a>
            </div>

        </div>

      </div>

    </div>

  </div>

  
    );
  }
}

export default Registration;
