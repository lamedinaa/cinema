import React, {Component} from 'react'; 

class EditMovie extends Component {
    render() {
        return (
            <div className="insertMovie">
                <form id="form" className="form-horizontal" >

                    <div className="form-group">
                        <label className="col-lg-2 col-md-2 col-sm-2 col-xs-2  control-label">Select movie</label>
                        <div className="col-lg-8 col-md-8 col-sm-10 col-xs-10">
                            <select>
                                <option>Pirate 1</option>
                                <option>Pirate 2 </option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-lg-2 col-md-2 col-sm-2 col-xs-2  control-label">Nombre</label>
                        <div className="col-lg-8 col-md-8 col-sm-10 col-xs-10">
                            <input type="text" maxLength="500" name="Nombre" className="form-control" required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-lg-2 col-md-2 col-sm-2 col-xs-2  control-label">Genero</label>
                        <div className="col-lg-8 col-md-8 col-sm-10 col-xs-10">
                            <input type="text" maxLength="500" name="Nombre" className="form-control" required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 m-r-xl">
                           <input type="submit " value="Save" className="btn btn-sm btn-primary pull-right" />
                        </div>
                    </div>
                </form>
            </div>

        )
    }
};

export default EditMovie;
