import "./styles.css";
import { Route, Switch } from "react-router-dom";
import Main from "./Main";
import Triangle from "./Triangle";
export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/triangle/:num" component={Triangle} />
      </Switch>
    </div>
  );
}
