import React from 'react';
import FollowerList from './components/FollowerList';
import User from './components/User';
import axios from 'axios';

class App extends React.Component {
  state = {
    user:'',
    info:{
      userImg:'',
      name:'',
      repo:'',
      follow:''
    },
    followers:[]
  }
  
  componentDidMount() {
    axios.get('https://api.github.com/users/sagun1151')
    .then(res => {
      this.setState({
        user:'sagun1151',
        info:{
          userImg: res.data['avatar_url'],
          name: res.data.name,
          repo: res.data['public_repos'],
          follow: res.data.followers
        }
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.info.name !== this.state.info.name){
      axios.get(`https://api.github.com/users/${this.state.user}/followers`)
      .then(res => {
        this.setState({
          ...this.state,
          followers: res.data
        })
      })
      .catch(err=>{
        console.error(err);
      })
    }
  }

  handleClick = (x) => {
    x.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.user}`)
    .then(res => {
      this.setState({
        info:{
          userImg: res.data['avatar_url'],
          name: res.data.name,
          repo: res.data['public_repos'],
          follow: res.data.followers
        }
      })
    })
    .catch(err=>{
      console.error(err);
    })
  }
  
  handleChange = (x) => {
    x.preventDefault();
    console.log("this is x", x.target.value)
    this.setState({
      ...this.state,
      user: x.target.value
    })
  }

  render() {
    return(
      <div>
        <h1>Github Info</h1>
        <form>
          <input onChange={this.handleChange}/>
          <button onClick={this.handleClick}>Search</button>
        </form>
        <User person={this.state}/>
        <FollowerList followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;