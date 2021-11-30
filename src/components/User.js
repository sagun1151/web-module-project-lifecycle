import React from 'react';

class User extends React.Component {
    

    render(){
        return(
            <div>
                <img src={this.props.person.info.userImg} />
                <div>
                    <h3>{this.props.person.info.name}</h3>
                    <p>TOTAL REPOS: {this.props.person.info.repo}</p>
                    <p>TOTAL FOLLOWERS: {this.props.person.info.follow}</p>
                </div>
            </div>
        )
    }
}

export default User;