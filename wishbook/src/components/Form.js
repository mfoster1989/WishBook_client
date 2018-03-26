import React from 'react';
import "../css/Form.css"

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Happy Birthday!'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert("Your message was submitted!");
        event.preventDefault();
        
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <p>Enter a birthday message:</p>
                <label>
                
                 <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input className="submit" type="submit" value="Submit" />
            </form>
        );
    }
}

export default Form