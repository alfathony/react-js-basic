import React from 'react';

class AddPlayer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name : ""
    }
    this.onPlayerChange = this.onPlayerChange.bind(this)
    this.addPlayer = this.addPlayer.bind(this)
  }

  onPlayerChange(event){
    this.setState({
      name  : event.target.value
    })
  }

  addPlayer(event){
    this.props.onAdd(this.state.name)
  }

  render(){
    return(
      <div className="row">
        <div className="col-xs-4">
          <input onChange={this.onPlayerChange} type="text" placeholder="Write a name..." value={this.state.name} className="form-control" />
        </div>
        <button onClick={this.addPlayer} className="btn btn-primar">Add Player</button>
      </div>
    )
  }
}

export default AddPlayer
