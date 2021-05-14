/** The app (duh) */
import {hot} from 'react-hot-loader/root';

let App = (): JSX.Element => (
  <span>App will be here</span>
);

if (IN_DEV) {
  App = hot(App);
}

export {App};
