import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
var dic = {
  name:"hello",
  value:"world",
}
class App extends Component {

  render() {
    return (
      <div className="App">
        App
        <div>
          <Link to={{
            pathname:"/page1",
            state:{data:dic}
          }}>to Page1</Link>
          </div>
      </div>
    );
  }
}

export default App;
