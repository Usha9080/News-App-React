// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state={
    progress:0
  }
  setProgress = (progress)=>{
    this.setState({progress:progress});
  }
  render() {
    return (
      <div>
        {/* <Navbar/>
        <div className='container'>
        <News setProgress={this.state.setProgress} pageSize={5} country='us' category='technology'/>

        </div> */}
          <LoadingBar
        color="#f11946"
        progress={this.state.progress}
      />
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
               <News setProgress={this.setProgress}
                  key="general"
                  pageSize={5}
                  country="us"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
               <News setProgress={this.setProgress}
                  key="Business"
                  pageSize={5}
                  country="us"
                  category="Business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
               <News setProgress={this.setProgress}
                  key="Entertainment"
                  pageSize={5}
                  country="us"
                  category="Entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
               <News setProgress={this.setProgress}
                  key="General"
                  pageSize={5}
                  country="us"
                  category="General"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
               <News setProgress={this.setProgress}
                  key="Science"
                  pageSize={5}
                  country="us"
                  category="Science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
               <News setProgress={this.setProgress}
                  key="Sports"
                  pageSize={5}
                  country="us"
                  category="Sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
               <News setProgress={this.setProgress}
                  key="technology"
                  pageSize={5}
                  country="us"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
