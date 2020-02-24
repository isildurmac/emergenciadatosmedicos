import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import RegistryService from '../../services/RegistryService';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Validator } from "validator";

const sexoSelectItems = [
  { label: 'Masculino', value: 'M' },
  { label: 'Femenino', value: 'F' }
];

class Registry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      data:{
      name:'',
      email:'',
      ci:'',
      userName:'',
      password:'', 
      contrasena1:'',
      address:'',
      gender:'' },
    
    };
    this.registryService = new RegistryService();
    
  }
onChange = e => 
    this.setState({
      data:{...this.state.data,[e.target.name]:e.target.value}
    });

  componentDidMount() {
    this.registryService.obtenerResultado().then(res => {
      const users = res.data;
      this.setState({ users });
     })
  }

  onSubmit=()=>{
    const errors=this.validate(this.state.data);
    this.setState({errors});
    console.log('*********************************************************************');
    console.log(this.state.data);
    this.registryService.saveUser(this.state.data).then(res=>{
      console.log (res);
      this.preventDefault();
    })
  }
 
  }
  render() {
    return (
      <section className="section_padding">
        <div className="container">
       
          <form onSubmit={this.onSubmit}>
            <span className="p-float-label">
              <InputText id="nombre" name='name' value={this.state.data.name} onChange={this.onChange}/>
              <label htmlFor="in">Nombre</label>
            </span>
            <br />
            <span className="p-float-label">
              <InputText id="ci" name='ci' value={this.state.data.ci} onChange={this.onChange}/>
              <label htmlFor="in">CI</label>
            </span>
            <br />
            <span className="p-float-label">
              <InputText id="direccion" name='address' value={this.state.data.address} onChange={this.onChange}/>
              <label htmlFor="in">Direcci&oacute;n</label>
            </span>
            <br />
            <span className="p-float-label">
              <InputText type="email" id="correo" name='email' value={this.state.data.email} onChange={this.onChange} />
              <label htmlFor="in">Correo</label>
            </span>
            <br />
            <span className="p-float-label">
              <InputText id="usuario" name='userName' value={this.state.data.userName} onChange={this.onChange} />
              <label htmlFor="in">Usuario</label>
            </span>
            <br />
            <Dropdown value={this.state.data.gender} name='gender' options={sexoSelectItems} onChange={this.onChange} placeholder="Seleccione el sexo" />
            <br />
            <br />
            <span className="p-float-label">
              <InputText type="password" id="contrasena" name='password' value={this.state.data.password} onChange={this.onChange}/>
              <label htmlFor="in">Contraseña</label>
            </span>
            <br />
            <Button label="Aceptar" />
          </form>
          <br />
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