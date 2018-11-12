import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class App extends Component {
   constructor(props){
        super(props);
        this.state = {
            username: 'kehindeegunjobi93',
            userData: [],
            userRepos: [],
            perPage: 5
        }
   }

   getUserData(){
       $.ajax({
           url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
           dataType: 'json',
           cache: false,
           success: function(data){
               console.log(data);
           }.bind(this),
           error: function(xhr, status, err){
                alert(err);
           }.bind(this)
       });
   }

   componentDidMount(){
       this.getUserData();
   }

   render(){
       return(
           <div>
               {this.state.clientId}
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