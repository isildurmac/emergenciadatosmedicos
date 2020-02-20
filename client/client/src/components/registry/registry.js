import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import {Dropdown} from 'primereact/dropdown';

const sexoSelectItems = [
  {label: 'Masculino', value: 'M'},
  {label: 'Femenino', value: 'F'}
 ];

class Registry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  actionPad(rowData, column) {
    return (
      <div>
        <Button
          type="button"
          icon="pi pi-search"
          className="p-button-success"
          style={{ marginRight: '.5em' }}
        ></Button>
        <Button
          type="button"
          icon="pi pi-pencil"
          className="p-button-warning"
        ></Button>
      </div>
    );
  }
  
  render() {
    return (
      
    
      <section className="section_padding">
        <div className="container">
          <form>
            <span className="p-float-label">
              <InputText id="nombre" />
              <label htmlFor="in">Nombre</label>
            </span>
            <br />
            <span className="p-float-label">
              <InputText id="ci" />
              <label htmlFor="in">CI</label>
            </span>
            <br />
            <span className="p-float-label">
              <InputText id="direccion" />
              <label htmlFor="in">Direcci&oacute;n</label>
            </span>
            <br />
            <span className="p-float-label">
              <InputText type="email" id="correo" />
              <label htmlFor="in">Correo</label>
            </span>
            <br />
            <span className="p-float-label">
              <InputText id="usuario" />
              <label htmlFor="in">Usuario</label>
            </span>
            <br />
            <Dropdown value={this.state.sexo} options={sexoSelectItems} onChange={(e) => {this.setState({sexo: e.value})}} placeholder="Seleccione el sexo"/>
            <br />
            <br />
            <span className="p-float-label">
              <InputText type="password" id="contrasena" />
              <label htmlFor="in">Contraseña</label>
            </span>
            <br />
            <Button label="Aceptar" />
          </form>
        </div>
      </section>

    );
  }
}

export default Registry;