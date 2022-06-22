import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { auth, db, fb } from "./firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import * as firebaseui from "firebaseui";

export function Login(props) {
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Disable Account chooser flow
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "/app/",
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      fb.auth.EmailAuthProvider.PROVIDER_ID,
      fb.auth.GoogleAuthProvider.PROVIDER_ID
    ]
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(u => {
      if (u) {
        props.history.push("/app");
      }
      //do something
    });

    return unsubscribe;
  }, [props.history]);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography color="inherit" variant="h6">
            Sign In
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: 20 }}>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </div>
    </div>
  );
}

export function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    console.log(email);
    console.log(password);
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        //navigate to new screen
      })
      .catch(error => {
        alert(error.message);
        console.log(error);
        //display error message
      });
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography color="inherit" variant="h6">
            Sign In
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Paper style={{ width: "400px", marginTop: 30, padding: "40px" }}>
          <TextField
            fullWidth={true}
            placeholder={"email"}
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            fullWidth={true}
            placeholder="password"
            type={"password"}
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
            style={{ marginTop: 20 }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "30px",
              alignItems: "center"
            }}
          >
            <div>
              Don't have an account? <Link to="/signup">Sign up!</Link>
            </div>

            <Button color="primary" variant="contained" onClick={handleSignIn}>
              Sign In
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
}

export function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(u => {
      if (u) {
        props.history.push("/app");
      }
      //do something
    });

    return unsubscribe;
  }, [props.history]);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {})
      .catch(error => {
        console.log("error");
        alert(error.message);
        //display error message
      });
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography color="inherit" variant="h6">
            Sign Up
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Paper style={{ width: "400px", marginTop: 30, padding: "40px" }}>
          <TextField
            fullWidth={true}
            placeholder="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            fullWidth={true}
            placeholder="password"
            type={"password"}
            style={{ marginTop: 20 }}
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "30px",
              alignItems: "center"
            }}
          >
            <div>
              Already have an account? <Link to="/">Sign In!</Link>
            </div>

            <Button color="primary" variant="contained" onClick={handleSignUp}>
              Sign Up
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
}
