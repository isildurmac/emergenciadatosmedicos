import React from 'react';
import {Panel} from 'primereact/panel';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import {helpers} from '../tools/helpers';

class UserData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image:'',
            padecimientos:[
                {id:1, padecimiento: 'Hipotiroidismo', doctor: 'Alexis Valdes'},
                {id:2, padecimiento: 'Diabetes Melitus', doctor: 'Alexis Valdes'},
                {id:3, padecimiento: 'Hipertension Arterial', doctor: 'Alexis Valdes'}
            ],
            alergias:[
                {id:1, alergia: 'Mariscos'},
                {id:2, alergia: 'Penicilina'},
                {id:3, alergia: 'Polvo'},
                {id:4, alergia: 'Cambio de tiempo'}
            ],
            contactos:[
                {id:1, nombre: 'Marta Perez', telefono: '54234234', relacion: 'Mama'},
                {id:2, nombre: 'Daniel de Arcos', telefono: '54234235', relacion: 'Papa'},
                {id:3, nombre: 'Alejandro Rodriguez', telefono: '54234236', relacion: 'Hermano'}
            ]
        };
    }

    componentDidMount() {
      helpers.generateQR('http://localhost:3000/qr')
      .then(data => {
              console.log("Data*******************: ", data);
              this.setState({image: data});
            });
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
              <div
                className="row align-items-center"
                style={{
                  paddingTop: '10px',
                  paddingBottom: '20px',
                  borderBottom: '2px dotted #eee',
                }}
              >
                <div className="col-lg-3 col-xl-3">
                  <Panel header="Foto">
                    <div className="col-sm-12 col-lg-12">
                      <img
                        src="assets/img/doctor/doctor_1.png"
                        alt="doctor"
                        width="250"
                        height="250"
                      />
                    </div>
                  </Panel>
                </div>
                <div className="col-lg-9 col-xl-9">
                  <div className="row">
                    <div className="col-lg-2">
                      <label style={{ fontWeight: 'bolder' }}>Nombre: </label>
                    </div>
                    <div className="col-lg-10">Alexis de Arcos Perez</div>
                    <div className="col-lg-2">
                      <label style={{ fontWeight: 'bolder' }}>CI: </label>
                    </div>
                    <div className="col-lg-10">88020717940</div>
                    <div className="col-lg-2">
                      <label style={{ fontWeight: 'bolder' }}>
                        Direcci&oacute;n:{' '}
                      </label>
                    </div>
                    <div className="col-lg-10">Cerro</div>
                    <div className="col-lg-2">
                      <label style={{ fontWeight: 'bolder' }}>Correo: </label>
                    </div>
                    <div className="col-lg-10">alexdarcosperez@gmail.com</div>
                    <div className="col-lg-2">
                      <label style={{ fontWeight: 'bolder' }}>Qr: </label>
                    </div>
                    <img src= {this.state.image} alt="Red dot" />
                  </div>
                </div>
              </div>
              <div
                className="row align-items-center"
                style={{
                  paddingTop: '10px',
                  paddingBottom: '20px',
                  borderBottom: '2px dotted #eee',
                }}
              >
                <h1>Padecimientos</h1>
                <br />
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <br />
                <br />
                <DataTable value={this.state.padecimientos}>
                  <Column field="id" header="No." style={{ width: '5%' }} />
                  <Column
                    field="padecimiento"
                    header="Padecimiento"
                    style={{ width: 'auto' }}
                  />
                  <Column
                    field="doctor"
                    header="Doctor"
                    style={{ width: 'auto' }}
                  />
                  <Column body={this.actionPad} style={{ width: '10%' }} />
                </DataTable>
              </div>
              <div
                className="row align-items-center"
                style={{
                  paddingTop: '10px',
                  paddingBottom: '20px',
                  borderBottom: '2px dotted #eee',
                }}
              >
                <h1>Alergias</h1>
                <br />
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <br />
                <br />
                <DataTable value={this.state.alergias}>
                  <Column field="id" header="No." style={{ width: '5%' }} />
                  <Column
                    field="alergia"
                    header="Alergia"
                    style={{ width: 'auto' }}
                  />
                  <Column body={this.actionPad} style={{ width: '10%' }} />
                </DataTable>
              </div>
              <div
                className="row align-items-center"
                style={{
                  paddingTop: '10px',
                  paddingBottom: '20px',
                  borderBottom: '2px dotted #eee',
                }}
              >
                <h1>Contactos</h1>
                <br />
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <br />
                <br />
                <DataTable value={this.state.contactos}>
                  <Column field="id" header="No." style={{ width: '5%' }} />
                  <Column
                    field="nombre"
                    header="Nombre"
                    style={{ width: 'auto' }}
                  />
                  <Column
                    field="telefono"
                    header="Telefono(s)"
                    style={{ width: 'auto' }}
                  />
                  <Column
                    field="relacion"
                    header="Relacion"
                    style={{ width: 'auto' }}
                  />
                  <Column body={this.actionPad} style={{ width: '10%' }} />
                </DataTable>
              </div>
            </div>
          </section>
        );
    }
}

export default UserData;