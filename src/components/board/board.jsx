import React, {Component} from 'react';
import Axios from 'axios';
import {observer} from 'mobx-react';

@observer
class Board extends Component {

    constructor(props) {
        super(props);
        Axios.get('/api/getmovies').then((response)=> {
            console.log("pelis piratas");
            console.log(response.data.movies);
        }).catch((err) => {
            console.log(err);
        })


    }

    render() {
        return (
            <div>
            <div className="row">
                <div className="col-sm-4">
                  <h3>Column 1</h3>
                  <p>Lorem ipsum dolor..</p>
                  <p>Ut enim ad..</p>
                </div>
                <div className="col-sm-4">
                  <h3>Column 2</h3>
                  <p>Lorem ipsum dolor..</p>
                  <p>Ut enim ad..</p>
                </div>
                <div className="col-sm-4">
                  <h3>Column 3</h3>
                  <p>Lorem ipsum dolor..</p>
                  <p>Ut enim ad..</p>
                </div>
            </div>
        </div>
        )
    }
}

export default Board;
