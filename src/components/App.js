import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import BooksPage from './BooksPage';
import CategoriesPage from '../redux/categories/categories';

const bodyStyle = {
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  padding: '0',
  margin: '0',
  // backgroundColor: '#f5f6fa',
};

const App = () => (
  <div style={bodyStyle}>
    <Header />
    <Switch>
      <Route exact path="/">
        <BooksPage />
      </Route>
      <Route path="/categories">
        <CategoriesPage />
      </Route>
    </Switch>
  </div>
);

export default App;
