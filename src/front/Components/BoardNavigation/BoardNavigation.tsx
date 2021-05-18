import {Link} from 'react-router-dom';

import {boardTypes} from 'routes/routes';

interface BoardNavigationProps {
  classes?: Partial<{
    type: string,
    typeLabel: string,
    typeBoards: string,
    board: string,
    boardLink: string,
    container: string,
    types: string
  }>
}

export const BoardNavigation =
  ({classes: c = {}}: BoardNavigationProps): JSX.Element => (
    <nav className={c.container}>
      <ul className={c.types}>
        {
          boardTypes.map(({label, boards})=> (
            <li key={label} className={c.type}>
              <span className={c.typeLabel}>{label}</span>
              <ul className={c.typeBoards}>
                {
                  boards.map(({label, path}) => (
                    <li key={path} className={c.board}>
                      <Link to={path} className={c.boardLink}>{label}</Link>
                    </li>
                  ))
                }
              </ul>
            </li>
          ))
        }
      </ul>
    </nav>
  );
