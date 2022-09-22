import ProductFeature from 'Product';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/products" component={ProductFeature} />
      </Switch>
    </div>
  );
}

export default App;
