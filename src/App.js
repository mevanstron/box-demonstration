import React, { Component } from 'react';
import boxClient from './components/BoxClient';
import './App.css';



import { ContentExplorer } from 'box-ui-elements';
import messages from 'box-ui-elements/i18n/en-US';
import 'box-ui-elements/dist/explorer.css';




class App extends Component {
  componentDidMount() {
    boxClient().folders.get('/0')
	    .then(data => data.item_collection.entries)
      .then(items => console.log(items));
  }
  render() {
    return (
      <ContentExplorer
          token='6he0Kaibh4Bz6n8T9JNRu0b3lHIHfn9q'
          language='en-US'
          messages={messages}
      />
    );
  }
}

export default App;
