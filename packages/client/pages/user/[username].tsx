import React from 'react';
import { getFollowersCount } from '../../api';
import { Container, FlexRow } from '../../components/Grid';
import Column from '../../components/Column';
import Box from '../../components/Box';
import ProfileContainer from '../../containers/ProfileContainer';
import { userInfo } from 'os';

const User: React.FC = ({ data }) => (
  <Container>
    <FlexRow>
      <Column only>
        <ProfileContainer
          login={data.userData.login}
          name={data.userData.display_name}
          picture={data.userData.profile_image_url}
          viewCount={data.userData.view_count}
          description={data.userData.description}
          offlinePicture={data.userData.offline_image_url}
          followersCount={data.followersCount}
        />
      </Column>
    </FlexRow>
    <FlexRow>
      <Column only>
        <Box>
          <table>
            {data.followers.map(
              ({
                from_id: fromId,
                from_name: fromName,
                followed_at: followedAt,
              }) => (
                <tr key={fromId}>
                  <td>{fromId}</td>
                  <td>{fromName}</td>
                  <td>{followedAt}</td>
                </tr>
              ),
            )}
          </table>
        </Box>
      </Column>
    </FlexRow>
  </Container>
);

User.getInitialProps = async ({ query }) => {
  const userData = await getFollowersCount(query.username);
  console.log(userData);
  return { data: userData };
};

export default User;
