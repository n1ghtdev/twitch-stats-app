import React from 'react';
import { Router } from '../../server/routes';

const Index: React.FC = () => {
  const [username, setUsername] = React.useState('');

  const onSubmit = async (e): void => {
    if (!username) return;
    e.preventDefault();
    Router.pushRoute('user', { username });
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <button type="submit">GET ID</button>
        </label>
      </form>
    </>
  );
};

export default Index;
