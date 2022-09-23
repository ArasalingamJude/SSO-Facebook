import "./App.css";
import FacebookLogin from "react-facebook-login";
import React from "react";

const responseFacebook = (response) => {
  console.log("login result", response);
};

const componentClicked = (data) => {
  console.warn(data);
};

function App() {
  return (
    <div className="App">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-5 mt-5">Login with Facebook</h1>

        <div className=" bg-slate-800 ">
          <FacebookLogin
            appId="602725941584547"
            autoLoad={false}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
