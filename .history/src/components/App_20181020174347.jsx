import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class App extends Component {
   constructor(props){
        super(props);
        this.state = {
            username: 'kehindeegunjobi',
            userData: [],
            userRepos: [],
            perPage: 5
        }
   }

   render(){
       return(
           <div>
               {this.state.username}
           </div>
       )
   }
}

App.propTypes = {
    clientId: React.PropTypes.string,
    clientSecret: React.PropTypes.string
};
App.defaultProps = {
    clientId: '7596a94d367f7ecfed96',
    clientSecret: 'ac3cc1b985e68f18830b329033493280987422ff'
}

export default App;