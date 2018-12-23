import React, {Fragment} from "react";
import { BrowserRouter, Route, Switch} from 'react-router-dom';


import EventPicker from '../src/components/pages/EventPicker'
import  Error from '../src/components/pages/Error'
import Navigation from "./components/common/Navigation";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Navigation/>
          <Switch>
            <Route path="/events" component={EventPicker} exact/>
            <Route component={Error}/>
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

