import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

import Header from './Header/Header'
import Footer from './Footer/Footer'
import Home from './Home/Home';
import Search from './Search/Search';
import Page from './Page/Page';
import Single from './Single/Single';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Switch>
            <Route path="/page">
              <Page />
            </Route>
            <Route path="/details/:id">
              <Single />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route path="*">
              <Home />
            </Route>          
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
