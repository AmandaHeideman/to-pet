import { Switch, Route } from 'react-router-dom';
import ListPage from './Pages/ListPage';
import ListDetailPage from './Pages/ListDetailPage';
import EditListPage from './Pages/EditListPage';

function App() {
  return (
    <Switch>
      <Route path="/:id/edit" component={EditListPage} />
      <Route path="/:id" component={ListDetailPage} />
      <Route path="/" component={ListPage} />
    </Switch>
  );
}

export default App;
