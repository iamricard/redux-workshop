import ReactDOM from 'react-dom';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  handleCount(change) {
    return evt => {
      this.setState({ count: this.state.count + change });
    };
  }

  render() {
    return (
      <div className="container">
        <h1 className="counter">{this.state.count}</h1>

        <a className="btn large disabled">count down</a>
        <a onMouseDown={this.handleCount(1)} className="btn large">count up</a>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
