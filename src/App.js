import "./App.css";

import React, { Component } from "react";
import Navbars from "./components/Navbars";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          {/* Navbars component will always be rendered */}
          <Navbars />
          {/* Routes component defines the routing logic */}
          <Routes>
            {/* Each Route now uses the 'element' prop to render the component */}
            {/* The root path "/" */}
            <Route
              path="/"
              element={<News key="general" pageSize={5} country="us" category="general" />}
            />
            {/* Business category route */}
            <Route
              path="/Bussiness"
              element={<News key="Bussiness" pageSize={5} country="us" category="Bussiness" />}
            />
            {/* Entertainment category route */}
            <Route
              path="/Entertainment"
              element={
                <News key="Entertainment" pageSize={5} country="us" category="Entertainment" />
              }
            />
            {/* Sports category route */}
            <Route
              path="/Sports"
              element={<News key="Sports" pageSize={5} country="us" category="Sports" />}
            />
            {/* Health category route */}
            <Route
              path="/Health"
              element={<News key="Health" pageSize={5} country="us" category="Health" />}
            />
            {/* Science category route */}
            <Route
              path="/Science"
              element={<News key="Science" pageSize={5} country="us" category="Science" />}
            />
            {/* Technology category route */}
            <Route
              path="/Technology"
              element={<News key="Technology" pageSize={5} country="us" category="Technology" />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
