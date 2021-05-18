import {hot} from 'react-hot-loader/root';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import {Home} from 'Components/Home/Home';
import {Header} from 'Components/Header/Header';
import {Board} from 'Components/Board/Board';
import {Thread} from 'Components/Thread/Thread';
import {Footer} from 'Components/Footer/Footer';

import './Styles/globalStyles.scss';

/**The App (duh) */
let App = (): JSX.Element => (
  <Router>
    <Switch>
      <Route path='/' exact>
        <Home/>
      </Route>
      <Route>
        <Header/>
        <Switch>
          <Route path='/:board/:thread'>
            <Thread/>
          </Route>
          <Route path='/:board'>
            <Board/>
          </Route>
        </Switch>
      </Route>
    </Switch>
    <Footer/>
  </Router>
);

if (IN_DEV) {
  App = hot(App);
}

export {App};
