import React, {Fragment} from "react";
import { BrowserRouter, Route, Switch} from 'react-router-dom';


import EventPicker from '../src/components/pages/EventPicker'
import  Error from '../src/components/pages/Error'
import Navigation from "./components/common/Navigation";
import Footer from './components/common/Footer'
import Info from './components/pages/Info'
import Contact from './components/pages/Contact'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Navigation/>
          <Switch>
            <Route path="/events" component={EventPicker} exact/>
            <Route path="/info" component={Info} exact/>
            <Route path="/contact" component={Contact} exact/>
            <Route component={Error}/>
          </Switch>
          <Footer/>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

