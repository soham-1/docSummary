import { BrowserRouter as Router,
      Switch,
      Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Keywords from './components/Keywords';
import Summary from './components/Summary';
import Ner from './components/Ner';

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar title="Document Summarizer"/>
          <Switch>
            <Route exact path="/">
              <Summary />
            </Route>
            <Route exact path="/keywords">
              <Keywords />
            </Route>
            <Route path="/NER">
              <Ner />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
