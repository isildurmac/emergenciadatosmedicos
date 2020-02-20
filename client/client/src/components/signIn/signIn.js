import React,  { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import { useState, useEffect } from 'react';
import {InputText} from 'primereact/inputtext';
import { Password } from 'primereact/password';
import {Checkbox} from 'primereact/checkbox';
import { Button } from 'primereact/button';

//import LoginForm from './signInForm';

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.onUserChange = this.onUserChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onRememberChecked = this.onRememberChecked.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            user: '',
            password: '',
            remember: false
        }
    }
    
    onUserChange(e) {
        this.setState({user: e.target.value});
    }

    onPasswordChange(e) {
        this.setState({password: e.target.value});
    }

    onRememberChecked(e) {
       e.checked ? this.setState({remember: e.checked}) : this.setState({remember: !e.checked});
    }

    handleClick() {
        this.props.history.push('/');
    }

    render() {
        return (
          <div>
              <div>
                  <i className="pi pi-user" style={{'fontSize': '3em'}}></i>
              </div>
              <br/>
              <div>
                  {/* <Router>
                      <Route to="/login" component={LoginForm}></Route>
                  </Router> */}
                  <LoginForm 
                    user={this.state.user}
                    password={this.state.password}
                    remember={this.state.remember}
                    userChange={this.onUserChange}
                    passwordChange={this.onPasswordChange}
                    rememberChecked={this.onRememberChecked}
                  />
              </div>
              <br/>
              <br/>
              {/* <div>
                <FacebookLogin
                    appId="" //APP ID NOT CREATED YET
                    fields="name,email,picture"
                    callback={responseFacebook}
                />
              </div>
              <div>
                <GoogleLogin
                    clientId="" //CLIENTID NOT CREATED YET
                    buttonText="LOGIN WITH GOOGLE"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                />
              </div>
   */}
          </div>
        );
    }
}

const LoginForm = (props) => {

    const { user, password, remember} = props;

    return (
      <div className="input-group mb-3">
          <table>
              <tr>
                 <div className="p-col-12">
                   <td><label>Usuario:</label></td>
                   <td><InputText value={user} onChange={this.userChange} /></td>
                 </div>
              </tr>
              <tr>
                 <div className="p-col-12">
                   <td><label>Contraseña:</label></td>
                   <td><Password value={password} onChange={this.passwordChange} /></td>
                 </div>
              </tr>
              <tr>
                <div className="p-col-12">
                    <td><Checkbox inputId="cb1" value={remember} onChange={this.rememberChecked} ></Checkbox>
                    <label htmlFor="cb1" className="p-checkbox-label">Recordarme</label></td>
                </div>
              </tr>
              <tr>
                <div className="p-col-12">
                  <td><Button label="Entrar" onClick={this.handleClick} /></td>
                </div>
              </tr>
          </table>
      </div>
    )
}


export default LoginPage;