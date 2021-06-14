import React from "react";
import "./App.css";
import { createBrowserHistory } from "history";
import { Router } from "react-router";
import firebase from 'firebase';
import { FirebaseAuthProvider } from "@react-firebase/auth";
import { FirestoreProvider } from "@react-firebase/firestore";

const browserHistory = createBrowserHistory();
const firebaseConfig = {
  apiKey: "AIzaSyAWqe7gguIgsFcr_WN_cY-KGWl9-Mrxosg",
  authDomain: "cleaning-booking.firebaseapp.com",
  projectId: "cleaning-booking",
  storageBucket: "cleaning-booking.appspot.com",
  messagingSenderId: "63949776074",
  appId: "1:63949776074:web:28ae9e3e8f262b99bb0033",
  databaseURL: "https://cleaning-booking.firebaseio.com",
};
const LayoutContainer = React.lazy(() =>
  import("./routes").then(({ Layout }) => ({ default: Layout }))
);
function App() {
  return (
    <Router history={browserHistory}>
      <React.Suspense fallback={null}>
        <React.StrictMode>
          <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
            <FirestoreProvider {...firebaseConfig} firebase={firebase}>
              <LayoutContainer />
            </FirestoreProvider>
          </FirebaseAuthProvider>
        </React.StrictMode>
      </React.Suspense>
    </Router>
  );
}

export default App;
