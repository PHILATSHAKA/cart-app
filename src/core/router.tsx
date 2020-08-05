import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from '~/organisms';
import { PageWrapper } from './style';
import {
  Home,
  PageNotFound,
  ErrorPage, CartPage,
} from '~/pages';
import { ErrorBoundary } from '~/atoms';

const AppRouter = () => {
  return (
    <Router>
      <Header/>
      <PageWrapper>
        <ErrorBoundary>
          <Switch>
            {/* Main routes */}
            <Route path="/" exact component={Home} />
            <Route path="/cart" exact component={CartPage} />
            {/* Error route */}
            <Route path="/error-page" exact component={ErrorPage} />
            {/* 404 route */}
            <Route path="/*" exact component={PageNotFound} />
          </Switch>
        </ErrorBoundary>
      </PageWrapper>
    </Router>
  );
};

export default AppRouter;
