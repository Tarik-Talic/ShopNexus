import React from 'react';
import './ProfilePage.css';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { updateUser } from '../../hooks/useAuth0Api';
import { useAuth0 } from '@auth0/auth0-react';

const EditProfilePage = ({ preloadData }) => {
  const { user } = useAuth0();
  const userID = preloadData.user_id;

  const initialValue = {
    name: user.name,
    nickname: user.nickname,
    family_name: user.family_name,
    given_name: user.given_name,
    username: user.preferred_username,
  };

  const form = useForm({
    defaultValues: initialValue,
  });
  const { register, control, handleSubmit, reset, formState } = form;

  const onSubmit = (data) => {
    updateUser(userID, data);
  };
  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ initialValue });
    }
  }, [formState, reset]);
  return (
    <>
      <form className="profile-info" onSubmit={handleSubmit(onSubmit)}>
        <div className="info">
          <div className="info-1">
            <div className="flexColumn">
              <label htmlFor="name">Name</label>
              <input
                className="input"
                type="text"
                id="name"
                {...register('name')}
              />
            </div>

            <div className="flexColumn">
              <label htmlFor="nickname">Nick name</label>
              <input
                className="input"
                type="text"
                id="nickname"
                {...register('nickname')}
              />
            </div>
          </div>
          <div className="info-2">
            <div className="flexColumn">
              <label htmlFor="nickname">Given Name</label>
              <input
                className="input"
                type="text"
                id="given_name"
                {...register('given_name')}
              />
            </div>
            <div className="flexColumn">
              <label htmlFor="family_name">Family Name</label>
              <input
                className="input"
                type="text"
                id="family_name"
                {...register('family_name')}
              />
            </div>
          </div>
        </div>
        <button className="update-btn">Update Profile</button>
      </form>
      <DevTool control={control} />{' '}
    </>
  );
};

export default EditProfilePage;
