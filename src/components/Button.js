import React from 'react'

class Button extends React.Component {
  render() {
    const className = `btn btn-${this.props.color} btn-${this.props.size}`
    return(
      <div className="m-2">
        <button
          className={className}
          onClick={this.props.onClick}
        >
          Hello World
        </button>
      </div>
    )
  }
}

export default Button
