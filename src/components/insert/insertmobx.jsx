import React, { Component } from 'react';
import Axiox from 'axios';
import { observer } from 'mobx-react';

@observer
class InsertMobx extends Component {
     constructor(props) {
         super(props);

     }
     render(){
         return (
             <div className="Insertmobx">
                <h2>{this.props.store}</h2>
             </div>
         )
     }
}

export default InsertMobx;
