import makeRequest from '../utils/makeRequest';
import { TWITCH_CLIENT_ID } from '../../server/secret/tokens';

const TWITCH_API = 'https://api.twitch.tv/helix/';
const HEADERS = {
  'Client-ID': TWITCH_CLIENT_ID,
}

export const getUserIDByUsername = async (username): Promise<any> => {
  const response = await makeRequest('GET', `${TWITCH_API}users?login=${username}`, HEADERS);

  if (Array.isArray(response.data)) {
    return response.data[0].id;
  }

  return response.data.id;
};

export const getFollowersCount = async (username): Promise<any> => {
  const userID = await makeRequest('GET', `${TWITCH_API}users?login=${username}`, HEADERS);
  const response = await makeRequest('GET', `${TWITCH_API}users/follows?to_id=${userID.data[0].id}`, HEADERS);

  return response.data;
};

///users/follows?to_id