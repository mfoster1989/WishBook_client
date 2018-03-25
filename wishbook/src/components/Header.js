import React from "react"
import "../css/Header.css"
class Header extends React.Component {
    state = {}
    render() { 
        return (
            <div className="header">
                <img src="./Logoheader.jpeg" alt="header"/>
            </div>
          )
    }
}
 
export default Header;