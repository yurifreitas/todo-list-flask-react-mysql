import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/index';
import AddNew from './pages/New';
import Landing from './pages/Landing';
import NoMatch from './pages/NoMatch';
import ItemDetails from './pages/ItemDetails';
import ProtectedRoute from './auth/protected-route';
import { useAuth0 } from '@auth0/auth0-react';

import Loading from './components/Loading';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <Loading />;

  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path='/' component={Home} />
        <ProtectedRoute exact path='/new' component={AddNew} />
        <ProtectedRoute exact strict path='/detail/:id' component={ItemDetails} />
        <Route exact path='/landing' component={Landing} />
        <Route path='*' component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
