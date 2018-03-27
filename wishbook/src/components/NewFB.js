'use strict';

import React from 'react';
import FacebookLogin from 'react-facebook-login';

class NewFB extends React.Component {
    
    render() {
        return (
            <FacebookLogin
                appId="2052548785020865"
                autoLoad={true}
                fields="name,email,picture,user_friends"
                scope="public_profile,user_friends"
                callback={this.props.responseFacebook}
            />
        )
    }
}

export default NewFB;