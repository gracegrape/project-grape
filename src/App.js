import { Switch, Route } from "react-router-dom";
import Navigation from "./pages/Navigation";

import HomePage from "./pages/HomePage";
import NotesPage from "./pages/NotesPage";

import Create from "./components/mongo-records/createRecord";
import EditRecord from "./components/mongo-records/editRecord";
import Records from "./components/mongo-records/recordList";

const App = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/notespage" component={NotesPage} />

          <Route path="/create" component={Create} />
          <Route path="/edit/:id" component={EditRecord} />
          <Route path="/recordsList" component={Records} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
