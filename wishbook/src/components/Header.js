import React from "react"
import "../css/Header.css"
class Header extends React.Component {
    state = {}
    render() { 
        return (
            <div className="header">
                <img src="./wblogo.png" alt="header"/>
            </div>
          )
    }
}
 
export default Header;