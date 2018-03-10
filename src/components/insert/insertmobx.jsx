import React, { Component } from 'react';
import Axiox from 'axios';
import { observer } from 'mobx-react';

@observer
class InsertMobx extends Component {
     constructor(props) {
         super(props);

         console.log("hoal");

     }
     render(){
         return (
             <div className="Insertmobx">

             </div>
         )
     }
}

export default InsertMobx;
