import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import NotesPage from "../pages/NotesPage";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/notespage" component={NotesPage} />
    </Router>
  );
};

export default Routes;
