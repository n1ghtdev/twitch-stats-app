import makeRequest from '../utils/makeRequest';
import { TWITCH_CLIENT_ID } from '../../server/secret/tokens';

const TWITCH_API = 'https://api.twitch.tv/helix/';
const HEADERS = {
  'Client-ID': TWITCH_CLIENT_ID,
}

export const getUserIDByUsername = async (username): Promise<any> => {
  const response = await makeRequest('GET', `${TWITCH_API}users?login=${username}`, HEADERS);
  // if (Array.isArray(response.data)) {
  //   return response.data[0].id;
  // }
  console.log(response.data[0].id)
  return response.data[0];
};

export const getFollowersCount = async (username): Promise<any> => {
  const userData = await getUserIDByUsername(username);
  const response = await makeRequest('GET', `${TWITCH_API}users/follows?to_id=${userData.id}&total`, HEADERS);

  return { userData, followers: response.data, followersCount: response.total };
};
