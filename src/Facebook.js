import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

export default class Facebook extends Component {
  state = {
    auth: false,
    name: "",
    picture: "",
  };

  responseFacebook = (response) => {
    console.log(response);
    if (response.status !== "unknown")
      this.setState({
        auth: true,
        name: response.name,
        picture: response.picture.data.url,
      });
  };

  componentClicked = () => {
    console.log("Facebook btn clicked");
  };

  render() {
    let facebookData;

    this.state.auth
      ? (facebookData = (
          <div
            style={{
              width: "400px",
              margin: "auto",
              background: "#f4f4f4",
              padding: "20px",
              color: "#000",
            }}
          >
            <img src={this.state.picture} alt={this.state.name} />
            <h2>Welcome {this.state.name}!</h2>
          </div>
        ))
      : (facebookData = (
          <>
            <div className="App">
              <div className="flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-5 mt-5">
                  Login with Facebook
                </h1>
                {facebookData}
              </div>
            </div>

            <a
              className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
              style={{ backgroundColor: "#3b5998" }}
              href="#!"
              role="button"
            >
              <FacebookLogin
                appId="602725941584547"
                autoLoad={false}
                fields="name,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
              />
            </a>
          </>
        ));

    return <>{facebookData}</>;
  }
}
