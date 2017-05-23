import React, { Component } from 'react'

class ColourPicker extends Component {
  constructor() {
    super()
    this.state = {
      colour: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({colour: e.target.value})
  }

  handleSubmit(e) {
    this.props.addColour(this.state.colour)
  }

  render() {
    const { colour } = this.state
    return (
      <div>
        <input type="text" className="form-control" value={colour} onChange={this.handleChange} />
        <button className="btn btn-default" onClick={this.handleSubmit}>Add</button>
      </div>
    )
  }
}

export default ColourPicker
