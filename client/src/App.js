import { Switch, Route } from 'react-router-dom';
import ListPage from './Pages/ListPage';
import ListDetailPage from './Pages/ListDetailPage';

function App() {
  return (
    <Switch>
      <Route path="/:id" component={ListDetailPage} />
      <Route path="/" component={ListPage} />
    </Switch>
  );
}

export default App;
