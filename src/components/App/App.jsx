import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

@observer
class App extends Component {
    constructor(props){
		super(props);
        console.log("hola app");
        console.log(this.props.store.todos[0]);
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
                    <h2>{this.props.store.todos[0]}</h2>
                </div>
                <div className="container">
                    {this.props.children}
                </div>

            </div>
        )
    }

}

export default App;
