import {BoardNavigation} from 'Components/BoardNavigation/BoardNavigation';

import s from './Home.scss';

export const Home = (): JSX.Element => (
  <>
    <div>
      <h1>Welcome to ChanChan</h1>
      <p>
        ChanChan is a simple imageboard I made to showcase my skill.
      </p>
    </div>
    <div>
      <h2>Boards</h2>
      <BoardNavigation classes={{
        types: s.boardTypesList
      }}/>
    </div>
  </>
);
