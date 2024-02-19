import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const authBaseUrl = process.env.REACT_APP_AUTH0_DOMAIN;
const apiToken = process.env.REACT_APP_AUTH0_TOKEN;

const fetchUser = async <T>(userID: T) => {
  return await axios.get(`https://${authBaseUrl}/api/v2/users/${userID}`, {
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
  });
};

export const useFetchUser = <T>(userID: T) => {
  return useQuery({
    queryKey: ['userInfo', userID],
    queryFn: () => fetchUser(userID),
    enabled: false,
  });
};

export const updateUser = <T>(userID: T, data: T[]) => {
  let config = {
    method: 'patch',
    maxBodyLength: Infinity,
    url: `https://${authBaseUrl}/api/v2/users/${userID}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${apiToken}`,
    },
    data: data,
  };
  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const sendAvatar = <T>(userID: T, avatar: T) => {
  var options = {
    method: 'PATCH',
    url: `https://dev-lf68rvae2qj3j5a0.us.auth0.com/api/v2/users/${userID}`,
    headers: {
      authorization: `Bearer ${apiToken}`,
      'content-type': 'application/json',
    },
    data: {
      user_metadata: { picture: `${avatar}` },
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
