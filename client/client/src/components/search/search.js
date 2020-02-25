import React from 'react';
import { Formik, useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const Search = (props) => {
    const formik = useFormik({
        initialValues: {
            search: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
        },
    });
    
    return(
            <section className="section_padding">
                <div className="container">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="row">
                            <div className="col-10">
                                <div className="input-group mb-3">
                                    <span className="p-float-label" style={{ width: '100%' }}>
                                        <InputText
                                            id="search"
                                            value={formik.values.search}
                                            style={{  }}
                                            onChange={formik.handleChange}
                                        />
                                        <label htmlFor="email">Correo Electr&oacute;nico</label>
                                    </span>
                                </div>
                            </div>
                            <div className="col-2">
                                <Button
                                    label="Entrar"
                                    icon="pi pi-sign-in"
                                    style={{  }}
                                    type="submit"/>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        );
}

/* class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const formik = useFormik({
            initialValues: {
                search: '',
            },
            onSubmit: values => {
                alert(JSON.stringify(values));
            },
        });
        return(
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="input-group mb-3">
                        <span className="p-float-label" style={{ width: '100%' }}>
                            <InputText
                                id="search"
                                value={formik.values.search}
                                style={{ width: '100%' }}
                                onChange={formik.handleChange}
                            />
                            <label htmlFor="email">Correo Electr&oacute;nico</label>
                        </span>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Button
                                label="Entrar"
                                icon="pi pi-sign-in"
                                style={{ width: '100%', paddingBottom: '5px' }}
                                type="submit"/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
} */

export default Search;