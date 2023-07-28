import { Switch, Route } from "react-router-dom";

import Home from "../../pages/Home";
import Post from "../../pages/Post";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/post/:id" exact>
        <Post />
      </Route>
    </Switch>
  );
};

export default App;
