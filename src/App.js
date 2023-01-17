import "./App.css";
import Home from "./layout/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./layout/Dashboard";
import Nav from "./layout/Nav";
import SideNav from "./layout/SideNav";
import Cards from "./layout/Cards";
import Board from "./layout/Board";
import PieChart from "./layout/PieChart";
import ProjectPage from "./layout/ProjectPage";
import NavBar from "./layout/NavBar";
import Info from "./layout/Info";
import Drag from "./layout/Drag";
import DragDrop from "./layout/DragDrop";
import Alert from "./layout/Alert";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/Nav" component={Nav} />
            <Route path="/SideNav" component={SideNav} />
            <Route path="/Cards" component={Cards} />
            <Route path="/Board" component={Board} />
            <Route path="/Pie" component={PieChart} />
            <Route path="/Info" component={Info} />
            <Route path="/ProjectPage" component={ProjectPage} />
            <Route path="/Drag" component={Drag} />
            <Route path="/DragDrop" component={DragDrop} />
            <Route path="/NavBar" component={NavBar} />
            <Route path="/Alert" component={Alert} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
