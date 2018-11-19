import React, { Component } from 'react';
import boxClient from './components/BoxClient';
import './App.css';



import { ContentExplorer } from 'box-ui-elements';
import messages from 'box-ui-elements/i18n/en-US';
import 'box-ui-elements/dist/explorer.css';




class App extends Component {

  componentDidMount() {
    boxClient().folders.get("58687690951")
      .then(data => console.log(data.item_collection.entries))

  }

  render() {
    return (
      <div>
        <header>
          <img src={"https://app.box.com/shared/static/iguuvju9y22z6npj1828ytko26dzrx4l.jpg"} alt="Banner" height="75" />
        </header>
        <ContentExplorer
            token='hz1NIuHjFcwJOJrO34aEzDsi3zhVt0rP'
            language='en-US'
            messages={messages}
            rootFolderId={"58778984061"}
            //logoUrl={"https://app.box.com/shared/static/iguuvju9y22z6npj1828ytko26dzrx4l.jpg"}
        />
      </div>
    );
  }
}

export default App;
