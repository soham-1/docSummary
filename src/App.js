import { BrowserRouter as Router,
      Switch,
      Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar title="Document Summarizer"/>
          <Switch>
            <Route exact path="/">
              <TextForm />
            </Route>
            {/* <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route> */}
          </Switch>
      </div>
    </Router>
  );
}

export default App;
