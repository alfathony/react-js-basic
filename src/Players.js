import React from 'react';
import Player from './Player.js';

class Players extends React.Component{
	render(){
		return (
      <div>
      {this.props.members.map( (players) => {
        return(
          <Player key={players.id} name={players.name} score={players.score} />
        )
      })}

      </div>
    )
	}
}

export default Players
