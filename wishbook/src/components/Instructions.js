import React from "react"
class Instructions extends Component {
    state = {}
    render() { 
        return ( 
            <Jumbotron>
                <h1>Welcome to Wishbook!</h1>
                <p>
                    If you aren't already, log in to Facebook by clicking the button above, and then submit a custom birthday message.  That's it!  You are done!
                </p>  
            </Jumbotron>;
         )
    }
}
 
export default Instructions;