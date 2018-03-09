import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    constructor(props){
		super(props);
	}

    render() {
        return(
            <div>
                <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                        <div className="navbar-header">
                          <a className="navbar-brand" ><h4>Pirate movies</h4></a>
                        </div>
                              <ul className="nav navbar-nav navbar-left">
                                  <li><Link to="/"><h4>Board</h4></Link></li>
                                  <li><Link to="/insertmovie"><h4>Insert Movie</h4></Link></li>
                                  <li><Link to="/editmovie"><h4>Edit Movie</h4></Link></li>
                                  <li><Link to="/insertmobx"><h4>Insert mobx</h4></Link></li>
                              </ul>
                        </div>
                   </nav>

                <br></br>

                <div className="container">
                    {this.props.children}
                </div>

            </div>
        )
    }

}

export default App;
