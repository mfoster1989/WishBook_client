import React from 'react';
import FacebookLogin from 'react-facebook-login';

class FBLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    

    loadFbLoginApi() {

        window.fbAsyncInit = function () {
            window.FB.init({
                appId: "2052548785020865",
                cookie: true,  // enable cookies to allow the server to access
                // the session
                xfbml: true,  // parse social plugins on this page
                version: 'v2.12' // use version 2.1
            });
        };

        console.log("Loading fb api");
        // Load the SDK asynchronously
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    componentDidMount() {
        this.loadFbLoginApi();
    }

    testAPI() {
        console.log('Welcome!  Fetching your information.... ');
        window.FB.api('/me', function (response) {
            console.log(response.accessToken)
        });
    }

    statusChangeCallback(response) {
        console.log('statusChangeCallback');
        console.log(response);
        if (response.status === 'connected') {
            this.testAPI();
        } else if (response.status === 'not_authorized') {
            console.log("Please log into this app.");
        } else {
            console.log("Please log into this facebook.");
        }
    }

    checkLoginState() {
        window.FB.getLoginStatus(function (response) {
            this.statusChangeCallback(response);
        }.bind(this));
    }

    handleFBLogin() {
        window.FB.login(this.checkLoginState());
    }

    render() {
        return (
            <div>
                <FacebookLogin
                    classNames="btn-facebook"
                    id="btn-social-login"
                    whenClicked={this.handleFBLogin}
                >
                    <span className="fa fa-facebook"></span> Sign in with Facebook
                    </FacebookLogin>
            </div>
        );
    }
}

export default FBLogin