import React, { Component } from "react";
import classes from './App.module.css';


import Aux from './Utility/HOC/auxilliary';
import Homepage from "./Containers/Homepage";
import Navigation from "./Components/Navigations/Navigation";
import OtherList from "./Containers/otherList/otherlist";
import asyncComponent from "./Utility/lazyloader/lazyloader";
import Detailed from "./Components/detailedoutput/detailedoutput";
import ErrPage from "./Utility/ErrorPage";
import NothingPage from "./Components/nothing";

import { Routes, Route } from "react-router-dom";


class App extends Component {
    render () {

      const async = asyncComponent(() => {
        return import("./Containers/otherList/otherlist");
      });

      return (
          <Aux>
            <Navigation />
            <div className={classes.App}>
            <Routes>
              <Route path="/" element={ <Homepage /> } />
              <Route path="/views" element={ <OtherList /> } />
              <Route path="/detailed/:id" element={ <Detailed /> } />
              <Route path="/nothing" element={ <NothingPage /> } />
              <Route path="*" element={<ErrPage />} />
            </Routes>
          </div>
          </Aux>
      );
    }
}

export default App;
