import React from 'react';
import { InputText } from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

class Contactform extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '',email: '', text: ''};

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onSend = this.onSend.bind(this);
  }

  onChangeEmail(e) {
    this.setState({email: e.target.value});
  }

  onChangeName(e) {
    this.setState({name: e.target.value});
  }

  onChangeText(e) {
    this.setState({text: e.target.value});
  }
  
  onSend() {
      this.props.history.push('/');
  }

  render() {
    return (
      <form>
        <div className="input-group mb-3">
          <span className="p-float-label" style={{ width: '100%' }}>
            <InputText
              id="name"
              value={this.state.name}
              style={{ width: '100%' }}
              onChange={this.onChangeName}
            />
            <label htmlFor="name">Nombre</label>
          </span>
        </div>
        <div className="input-group mb-3">
          <span className="p-float-label" style={{ width: '100%' }}>
            <InputText
              id="email"
              value={this.state.email}
              style={{ width: '100%' }}
              onChange={this.onChangeEmail}
            />
            <label htmlFor="email">Correo Electr&oacute;nico</label>
          </span>
        </div>
        <div className="input-group mb-3">
        <span className="p-float-label" style={{ width: '100%' }}>
          <InputTextarea 
            id="text"
            rows={5} 
            style={{ width: '100%' }}
            value={this.state.text} 
            onChange={this.onChangeText} />
            <label htmlFor="text">Texto</label>
            </span>
        </div>  
        <div className="input-group mb-3">
            <Button
              label="Enviar"
              icon="pi pi-sign-in"
              style={{ width: '100%', paddingBottom: '5px' }}
              onClick={this.onSend}
            />  
        </div>    
      </form>
    );
  }
}

export default Contactform;