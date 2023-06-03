import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Home = () => {
  interface User {
    id: number;
    name: string;
    username: string;
    email: string;
  }

  const { data, isLoading, isError, isFetching } = useQuery(['users'], () =>
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users'),
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      <div>Home</div>
      {data?.data.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
      <div>{isFetching && 'isFetching'}</div>
    </div>
  );
};

export default Home;
