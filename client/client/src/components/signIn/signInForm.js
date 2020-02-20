import { useState, useEffect } from 'react';
import {InputText} from 'primereact/inputtext';
import { Password } from 'primereact/password';
import {Checkbox} from 'primereact/checkbox';
import { Button } from 'primereact/button';


export const LoginForm = (props) => {
    
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    return (
      <div className="input-group mb-3">
          <table>
              <tr>
                 <div className="p-col-12">
                   <td><label>Usuario:</label></td>
                   <td><InputText value={this.state.user} onChange={this.userChange} /></td>
                 </div>
              </tr>
              <tr>
                 <div className="p-col-12">
                   <td><label>Contraseña:</label></td>
                   <td><Password value={this.state.password} onChange={this.passwordChange} /></td>
                 </div>
              </tr>
              <tr>
                <div className="p-col-12">
                    <td><Checkbox inputId="cb1" value={this.state.remember} onChange={this.rememberChecked} ></Checkbox>
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

