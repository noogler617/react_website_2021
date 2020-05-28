import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/home';
import { Contact } from './components/contact';
import { About } from './components/about';
import { Portfolio } from './components/portfolio';
import { Navigation } from './components/navigation';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle';
function App() {
  return (
    <BrowserRouter>

        <div className="">
        <Navigation />

          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
