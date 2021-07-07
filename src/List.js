import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Animal from './Animal';


function List() {
    return (
        <Router>
            <Switch>
                <Route exact path="/:name" render={(props) => <Animal {...props} />} />
                <Route path='/' render={(props) => <App {...props} />} />
            </Switch>
        </Router>
    );
}

export default List;