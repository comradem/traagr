import React, {Fragment} from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch} from 'react-router-dom';


import EventPicker from '../src/components/pages/EventPicker'
import  Error from '../src/components/pages/Error'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
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

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-wrap: no wrap;

`;
