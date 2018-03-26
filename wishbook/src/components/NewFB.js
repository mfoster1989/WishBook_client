'use strict';

import React from 'react';
import FacebookLogin from 'react-facebook-login';

class NewFB extends React.Component {
    responseFacebook(response) {
        console.log(response)
    }

    render() {
        return (
            <FacebookLogin
                appId="2052548785020865"
                autoLoad={true}
                fields="name,email,picture,public_profile,user_friends"
                scope="public_profile,user_friends,"
                callback={this.responseFacebook}
            />
        )
    }
}

export default NewFB;