import React from 'react';
import Contactform from './contactform';

class Contact extends React.Component {
    render() {
        return(
            <section className="banner_part" >
                <div className="container" >
                    <div className="row align-items-center" >
                        <div className="col-lg-6 col-xl-6" >
                            <div className="banner_text" >
                                <div className="banner_text_iner" >
                                    <h1 > Formulario de Contacto </h1>
                                    <Contactform />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Contact;