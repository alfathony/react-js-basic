import React from 'react';

class Player extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      score : this.props.score
    }
    this.incrementScore = this.incrementScore.bind(this)
    this.decrementScore = this.decrementScore.bind(this)
  }

  incrementScore(event){
    this.setState({
      score: this.state.score + 1
    })
  }

  decrementScore(event){
    this.setState({
      score: this.state.score - 1
    })
  }

	render(){
    const styles = {
      listPlayer: {
        padding:10
      },
      spaceScore: {
        width : 50,
        display: 'inline-block',
        textAlign: 'center',
      }
    }

		return (
      <div className="row" style={styles.listPlayer}>
        <div className="col-xs-4">{this.props.name}</div>
        <div className="col-xs-4">
          <button onClick={this.decrementScore} className="btn btn-default">-</button>
          <span style={styles.spaceScore}>{this.state.score}</span>
          <button onClick={this.incrementScore} className="btn btn-default">+</button>
        </div>
      </div>
    )
	}
}

export default Player
