import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./components/Form";
import FBLogin from "./components/FBLogin";
import Header from "./components/Header";
// import Instructions from "./components/Instructions";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Instructions /> */}
        <FBLogin />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
