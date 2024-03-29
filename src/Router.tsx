import { Switch, Route, BrowserRouter } from "react-router-dom";
import Counter from "@/screens/counter";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Counter} />
    </Switch>
  </BrowserRouter>
);

export default Router;
