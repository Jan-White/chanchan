import {BoardNavigation} from 'Components/BoardNavigation/BoardNavigation';

import s from './Header.scss';

export const Header = (): JSX.Element => (
  <BoardNavigation classes={{
    board: s.board,
    container: s.header,
    typeBoards: s.typeBoards,
    typeLabel: s.typeLabel,
    types: s.boardTypes,
  }}/>
);
