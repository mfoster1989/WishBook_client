import React from 'react';
import "../css/Form.css"

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Happy Birthday!'
        };

    }

 

    render() {
        return (
            <form className="form" onSubmit={this.props.handleSubmit}>
                <p>Enter a birthday message:</p>
                <label>
                 <textarea value={this.props.value} onChange={this.props.handleChange} />
                </label>
                <input className="submit" type="submit" value="Submit" />
            </form>
        );
    }
}

export default Form