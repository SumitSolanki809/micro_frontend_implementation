// import React from 'react'
// import { BrowserRouter as Router, Route,Switch, Link } from "react-router-dom";
import './Login.css'
// class Login extends React.Component{
//     authenticateUser() {
//         let enteredUserName = this.usernameRef.value
//         let enteredPassword = this.passwordRef.value
//             alert('You are logged in successfully ${enteredUserName}')
//     }
//     render() {
//             return (
//                 <div className="LoginStyle">
//                 <br /> username :<input type='text' ref={el => { this.usernameRef = el }} />
//                 <br /> password : <input type='password' ref={el => { this.passwordRef = el }} />
//                 <br /> <button onClick={this.authenticateUser.bind(this)}>login</button>
//                 {/* <div style={{ width: 1000, margin: '0 auto' }}>

//                     <Link to='/Register'>If not registered click here</Link>

//                 </div> */}
//             </div>
//             )
//         }
     
// }
//import Pic from './Pic.png'
import Data from '../../data/data.json'
import React,{Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { BrowserRouter as Router, Route,Switch, Link } from "react-router-dom";
class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
handleClick(event){
    const obj=this.state;
    const username=obj.username
    const password=obj.password
    var res=false
    for(let user of Data){
        if(user.username==username && user.password==password){
            res=true
            alert("login successfull")
            
        }
    }
    if(res==false){
        alert("incorrect username or password!!please try again")
    }
    }
render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           {/* <div className = "animation">
           <img src={Pic} />
           </div> */}
           <div className="mid">
           <TextField className="Textt"
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField className="Textt"
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton className="TexttSubmit" label="Login" primary={true} 
            //  style={style} 
             onClick={(event) => this.handleClick(event)}/>
             
             <Link to='/Register'><h2 className = "TextH1">If not registered click here to register</h2></Link>
          </div>
         {/* <RaisedButton className="TextRegister" label="Register" primary={true} 
            //  style={style} 
             onClick={(event) => this.handleClick(event)}/> */}
         </div>
         
         </MuiThemeProvider>
         
      </div>
    );
  }
}
// const style = {
//  margin: 15,
// };
export default Login;