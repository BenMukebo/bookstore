import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import BooksPage from './BooksPage';
import CategoriesPage from '../redux/categories/categories';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/">
        <BooksPage />
      </Route>
      <Route path="/categories">
        <CategoriesPage />
      </Route>
    </Switch>
  </>
);

export default App;
