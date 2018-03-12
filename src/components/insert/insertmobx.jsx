import React, {Component} from 'react';
import Axios from 'axios';
import {observer} from 'mobx-react';

@observer
class InsertMobx extends Component {
     constructor(props) {
         super(props);
         this.store = this.props.store;
        //  console.log(this.props.store);
     }

     filter(e) {
         this.store.filter = e.target.value
     }


     render(){

         return (
             <div className="Insertmobx">
                <h2>{this.store.filter}</h2>
                <h3>
                    <ul>
                    {
                    this.store.todos.map( (ele) => {return(<h1>{ele}</h1>)} )
                    }
                    </ul>
                </h3>
                <br></br>
                <input  className="filter" onChange={this.filter.bind(this)}/>

             </div>
         )
     }
}
export default InsertMobx;
