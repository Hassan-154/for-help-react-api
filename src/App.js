import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SideNav from './components/SideNav';
import GalleryCollection1 from './components/GalleryCollection1';
import GalleryCollection2 from './components/GalleryCollection2';
import GalleryCollection3 from './components/GalleryCollection3';

function App() {
  return (
    <div className="app-container">
    <Router>
    <SideNav/>
      <Switch className="main-view">
      <Route path="/gallery2"><GalleryCollection2/></Route>
      <Route path="/gallery3"><GalleryCollection3/></Route>
      <Route path="/"><GalleryCollection1/></Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;