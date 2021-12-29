import React, { useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Loading from './components/Loading'
import "./App.css";
import { useDataLayerValue } from "./StateProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./firebase";
import { actionType } from "./reducer";
import {useAuthState} from 'react-firebase-hooks/auth';

function App() {
  const [, dispatch] = useDataLayerValue();
  const [user,loading] = useAuthState(auth)

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: actionType.SET_USER,
          user: authUser,
        });
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      {loading && <Loading/> }
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
