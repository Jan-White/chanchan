import {useParams, useRouteMatch} from 'react-router-dom';

export const Thread = (): JSX.Element => {
  const {board, thread} = useParams<{board: string, thread: string}>();
  const match = useRouteMatch();

  console.log('Rendered thread on match ', match);

  return <span>Placeholder for thread {thread} on board {board}</span>;
};
