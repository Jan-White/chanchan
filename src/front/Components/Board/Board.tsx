import {useParams, useRouteMatch, Link} from 'react-router-dom';

export const Board = (): JSX.Element => {
  const {board} = useParams<{board: string}>();
  const match = useRouteMatch();

  console.log('Rendered board on match ', match);

  return (
    <p>
      Placeholder for board {board}&nbsp;<br/>
      {Array(5).fill(null).map((_,i) =>(
        <Link
          to={`${match.url}/${1000 + Math.floor(Math.random() * 1000 + 1)}`}
          key={i}
        >
          Mock thread for testing<br/>
        </Link>
      ))}
    </p>
  );
};
