import * as React from 'react';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="/logo.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>
          {this.props.children}
        </p>
      </div>
    );
  }
}

export default App;
