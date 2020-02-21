import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import {Dropdown} from 'primereact/dropdown';
import  RegistryService  from '../../services/RegistryService';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


const sexoSelectItems = [
  {label: 'Masculino', value: 'M'},
  {label: 'Femenino', value: 'F'}
 ];

class Registry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    };

    this.registryService = new RegistryService();
  }

  
  componentDidMount() {
    this.registryService.obtenerResultado().then(res => {
      const users = res.data;
      console.log(users);
      this.setState({ users });
    })
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
         <br/>
         <DataTable value={this.state.users}>
                  <Column field="name" header="Nombre" style={{ width: 'auto' }} />
                  <Column
                    field="email"
                    header="Email"
                    style={{ width: 'auto' }}
                  />
                 <Column
                    field="ci"
                    header="CI"
                    style={{ width: 'auto' }}
                  />
                  <Column
                    field="address"
                    header="Dirección"
                    style={{ width: 'auto' }}
                  />
                  <Column
                    field="gender"
                    header="Sexo"
                    style={{ width: '10%' }}
                  />
                </DataTable>
        </div>
      </section>

    );
  }
}

export default Registry;