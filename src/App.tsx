import React from "react";
import "./App.css";
import { createBrowserHistory } from "history";
import { Router } from "react-router";
const browserHistory = createBrowserHistory();

const LayoutContainer = React.lazy(() =>
  import("./routes").then(({ Layout }) => ({ default: Layout }))
);
function App() {
  return (
    <Router history={browserHistory}>
      <React.Suspense fallback={null}>
        <React.StrictMode>
          <LayoutContainer />
        </React.StrictMode>
      </React.Suspense>
    </Router>
  );
}

export default App;
