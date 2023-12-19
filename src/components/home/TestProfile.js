import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
const TestProfile = () => {
  const { user, isAuthenticated } = useAuth0();
  return isAuthenticated && <div className='test'>{JSON.stringify(user)}</div>;
};

export default TestProfile;
