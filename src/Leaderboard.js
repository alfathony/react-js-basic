import React from 'react';
import Players from './Players.js';
import AddPlayer from './AddPlayer.js';

class Leaderboard extends React.Component{
  constructor(props){
    super(props)

    const PLAYERS = [
      {id: 1, name: "Azzam Kurnia", score: 26},
      {id: 2, name: "Dilan Baiq", score: 16},
      {id: 3, name: "Dodo", score: 10},
      {id: 4, name: "Supena", score: 5}
    ]
    this.state = {
      members : PLAYERS
    }

    this.onPlayerAdd = this.onPlayerAdd.bind(this)
  }

  onPlayerAdd(name){
    let new_members = this.state.members
    new_members.push({id : new_members.length + 1 , name : name, score : 10})
    this.setState({
      members : new_members
    })
  }

	render(){

		return (
      <div className="container">
        <div><h1>Leaderboard</h1></div>
        <Players members={this.state.members} />
        <AddPlayer onAdd={this.onPlayerAdd} />
      </div>
    )
	}
}

export default Leaderboard
