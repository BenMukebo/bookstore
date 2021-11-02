import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './src/components/Header';                                
import './App.css';

function App() {
  return (
    <Router>
    <Header />
    <main className="container">
      <Switch>
        <Route exact path="/">
          <Books />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </main>
  </Router>
  );
}

export default App;
