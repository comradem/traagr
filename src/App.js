import React, {Fragment} from "react";
import { BrowserRouter, Route, Switch} from 'react-router-dom';


import EventPicker from '../src/components/pages/EventPicker';
import  Error from '../src/components/pages/Error';
import Navigation from "./components/common/Navigation";
import Footer from './components/common/Footer';
import Info from './components/pages/Info';
import Contact from './components/pages/Contact';
import Main from './components/pages/Main';
import Basket from './components/pages/Basket';



class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/events" component={EventPicker}/>
            <Route exact path="/info" component={Info}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/basket" component={Basket}/>
            <Route component={Error}/>
          </Switch>
          <Footer/>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

