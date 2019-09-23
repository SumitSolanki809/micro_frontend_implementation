import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './Register.css'
import { BrowserRouter as Router, Route,Switch, Link } from "react-router-dom";
//import Pic from '../login/Pic.png'
class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      user_name:'',
      password:''
    }
  }
  handleClick(event){
    const obj=this.state;
    const username=obj.user_name
    const password=obj.password
    }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Register"
           />
           {/* <div className = "animation">
           <img src={Pic} />
           </div> */}
           <div className="mid">
           <TextField className="Textt"
             hintText="Enter your User Name"
             floatingLabelText="User Name"
             onChange = {(event,newValue) => this.setState({user_name:newValue})}
             />
           {/* <br/>
           <TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => this.setState({last_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             /> */}
           <br/>
           <TextField className="Textt"
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton className="TexttSubmit"
           label="Register" primary={true} onClick={(event) => this.handleClick(event)}/>
           <Link to='/Login'><h2 className = "TextH1">If already registered click here to login</h2></Link>
          </div>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

export default Register;