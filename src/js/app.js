import React from 'react';
import ReactDOM from 'react-dom';

import './../sass/styles.scss';

class App extends React.Component {
  render() {
    return (
      <div className="box">
      </div>
    )
  }
}

let root = document.querySelector('#root');

ReactDOM.render(<App />, root);
