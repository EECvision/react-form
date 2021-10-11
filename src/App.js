import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Form from './pages/form/form';
import Submit from './pages/submit/submit';

function App() {
  return (
    <div className="App">
      <div className="App-Container">
        <nav>
          <Navbar />
        </nav>
        <Switch>
          <Redirect exact from="/" to="/form" />
          <Route exact path="/form" component={Form} />
          <Route exact path="/form/submit" component={Submit} />
        </Switch>
      </div>

    </div>
  );
}

export default App;
