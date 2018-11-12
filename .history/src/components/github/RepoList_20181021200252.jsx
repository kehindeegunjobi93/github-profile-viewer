import React, { Component } from 'react';
import Repo from './Repo';



class RepoList extends Component {
  


   render(){
       return(
        <div>
           <ul className="item-group">
              {
                  this.props.userRepos.map(repo => {
                      return <Repo 
                                repo={repo}
                                key={repo.id}
                                {...this.props} />

                  })
              }
           </ul>
        </div>
        )
}
}



export default RepoList