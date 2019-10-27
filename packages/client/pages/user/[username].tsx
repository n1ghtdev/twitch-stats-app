import React from 'react';
import { getFollowersCount } from '../../api';

const User: React.FC = ({ followers }) => (
  <table>
    {followers.map(
      ({ from_id: fromId, from_name: fromName, followed_at: followedAt }) => (
        <tr key={fromId}>
          <td>{fromId}</td>
          <td>{fromName}</td>
          <td>{followedAt}</td>
        </tr>
      ),
    )}
  </table>
);

User.getInitialProps = async ({ query }) => {
  console.log(query);
  const followers = await getFollowersCount(query.username);
  return { followers };
};

export default User;
