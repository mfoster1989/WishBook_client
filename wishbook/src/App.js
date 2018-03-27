import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./components/Form";
import FBLogin from "./components/FBLogin";
import Header from "./components/Header";
// import Instructions from "./components/Instructions";
import Footer from "./components/Footer";
import NewFB from "./components/NewFB"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'Happy Birthday!'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Your message was submitted!");
    event.preventDefault();
    console.log(this.state);
    
  }

  responseFacebook(response) {
    console.log("facebook", response)
    this.setState({facebook:response})
  }


  render() {
    return (
      <div className="App">
        <Header />
        <NewFB responseFacebook={this.responseFacebook} /> 
        {/* <Instructions /> */}
        {/* <FBLogin /> */}
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} value={this.state.value} />
        <Footer />
      </div>
    );
  }
}

export default App;
