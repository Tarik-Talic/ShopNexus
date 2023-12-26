import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { ManagementClient } from 'auth0';

const authBaseUrl = process.env.REACT_APP_AUTH0_DOMAIN;
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID;
const apiToken = process.env.REACT_APP_AUTH0_TOKEN;
const clientSecret = process.env.REACT_APP_AUTH0_CLIENT_SECRET;

// export const useApitokenCall = async () => {
//   const { getAccessTokenSilently } = useAuth0();
//   const token = await getAccessTokenSilently();
//   return token;
// };

const fetchUser = (userID) => {
  return axios.get(`https://${authBaseUrl}/api/v2/users/${userID}`, {
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
  });
};

export const useFetchUser = (userID) => {
  return useQuery(['userInfo', userID], () => fetchUser(userID));
};

export const updateUser = (userID, data) => {
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
const getToken = () => {
  var options = {
    method: 'POST',
    url: `https://dev-lf68rvae2qj3j5a0.us.auth0.com/oauth/token`,
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: new URLSearchParams({
      grant_type: 'user_credentials',
      client_id: `GXlAWsKxThdF4lO3JFYMEoLgitBdcxrm`,
      client_secret: `ulWUCp_HwzuGThD1GpDci1bkSKnCfXDizw186swUuJ0pImuZ257RkPnwMPB0sQfG`,
      audience: 'https://dev-lf68rvae2qj3j5a0.us.auth0.com/api/v2/',
    }),
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
getToken();
