import React from "react";
import myGif from "../assets/landing.gif";

function Login() {
  return (
    <div className="App">
      <img src={myGif} alt="my-gif" className="landing-gif" />
      <header className="App-header">
        <a className="btn-spotify" href="/auth/login">
          Login with Spotify
        </a>
      </header>
    </div>
  );
}

export default Login;
