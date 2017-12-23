import React, {Component} from 'react';
import Axios from 'axios';

class InsertMovie extends Component {


    _validateForm(event) {
        console.log("HOLA MUNDO");
        // event.preventDefault();
        var $form = $('#form');
        if ($form.valid()) {
            alert("hola movieeee!!!")
            // Axios.post('/api/insertmovie/', $form.serialize()).then((response) => {
            //     alert("creado correctamente");
            // }).catch((err) => {
            //     alert("no se ha podido crear")
            // });
        }
    }

    render() {
        return (
            <div className="insertMovie">
                <form id="form" className="form-horizontal" >
                    <div className="form-group">
                        <label className="col-lg-2 col-md-2 col-sm-2 col-xs-2  control-label">Nombre</label>
                        <div className="col-lg-8 col-md-8 col-sm-10 col-xs-10">
                            <input type="text" maxLength="500" name="nombre" className="form-control" required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-lg-2 col-md-2 col-sm-2 col-xs-2  control-label">Descripción</label>
                        <div className="col-lg-8 col-md-8 col-sm-10 col-xs-10">
                            <input type="text" maxLength="500" name="descripcion" className="form-control" required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 m-r-xl">
                           <input type="submit " value="Save" onClick={this._validateForm.bind(this)} className="btn btn-sm btn-primary pull-right" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }

};

export default InsertMovie;
