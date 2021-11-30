import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {

    render(){
        return (
            <div>
                <h2>FOLLOWERS: </h2>
                {this.props.followers.map((user) => {
                    return <Follower user={user}/>
                })}
                {/* {<Follower />} */}
            </div>
        )
    }
}

export default FollowerList;