import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import userRoutes from './routes';
import "./app.scss";

function App() {
  const routes = userRoutes(false);
  return (
    <Router>
      <div className="app">
        {routes}
      </div>
    </Router>
  );
}

export default App;
