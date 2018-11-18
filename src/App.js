import React, { Component } from 'react';
import './App.css';



class App extends Component {

  boxClient = () => {
    const BoxSDK = require('box-node-sdk');
    // Create new Box SDK instance
    const sdk = new BoxSDK({
      clientID: 'm1pqiy0vuuhz0ybejni75yf77664lplu',
      clientSecret: 'MLXjmrDiwq4dPb6JlQpnokg0JhuGxNxK'
    });
    // Create new basic client with developer token
    const client = sdk.getBasicClient('J7xXXQtpcgvSCPawrvDvDvxdWCOMhP7j');
    return client;
  }
  componentDidMount() {
    this.boxClient().folders.get('/0')
	    .then(data => data.item_collection.entries)
      .then(items => console.log(items));
  }
  render() {
    return (
      <div>
        {}
      </div>
    );
  }
}

export default App;
