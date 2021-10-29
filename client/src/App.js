import { Switch, Route } from 'react-router-dom';
import ListPage from './Pages/ListPage';

function App() {
  return (
    <Switch>
      <Route path="/list" component={ListPage} />
    </Switch>
  );
}

export default App;
