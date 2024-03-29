import React from 'react';
import './EditProfile.css';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import {
  useFetchUser,
  updateUser,
  sendAvatar,
} from '../../../services/useAuth0Api';
import { useAuth0 } from '@auth0/auth0-react';
import { ToastContainer, toast } from 'react-toastify';

type EditProfilePageProps = {
  preloadData: any;
  avatarData: any;
};
type InitialValues = {
  name: string;
  nickname: string;
  family_name: string;
  given_name: string;
  username: string;
};
type FormValues = {
  name: string;
  nickname: string;
  family_name: string;
  given_name: string;
  username: string;
  initialValue: InitialValues;
};

const EditProfilePage = ({ preloadData, avatarData }: EditProfilePageProps) => {
  const { user } = useAuth0();
  const userID = preloadData.user_id;

  const initialValue: {} = {
    name: user?.name,
    nickname: preloadData.nickname,
    family_name: user?.family_name,
    given_name: user?.given_name,
    username: user?.preferred_username,
  };

  const { refetch } = useFetchUser(userID);

  const form = useForm<FormValues>({
    defaultValues: initialValue,
  });
  const { register, control, handleSubmit, reset, formState } = form;
  const onSubmit = (data: any) => {
    updateUser(userID, data);
    sendAvatar(userID, avatarData);
  };

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      notifySubmit();
      refetch();
      reset({ initialValue });
    }
  }, [formState, reset]);

  const notifySubmit = () => {
    toast.success('You have sucessfully updated profile', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  return (
    <>
      <form className="profile-info" onSubmit={handleSubmit(onSubmit)}>
        <div className="info">
          <div className="info-1">
            <div className="flexColumn">
              <label htmlFor="name">*Name</label>
              <input
                className="input"
                type="text"
                id="name"
                {...register('name')}
              />
            </div>

            <div className="flexColumn">
              <label htmlFor="nickname">*Nick name</label>
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
              <label htmlFor="nickname">*Given Name</label>
              <input
                className="input"
                type="text"
                id="given_name"
                {...register('given_name')}
              />
            </div>
            <div className="flexColumn">
              <label htmlFor="family_name">*Family Name</label>
              <input
                className="input"
                type="text"
                id="family_name"
                {...register('family_name')}
              />
            </div>
          </div>
        </div>
        <button className="update-btn">*Update Profile</button>
        <ToastContainer />
      </form>
      <DevTool control={control} />
    </>
  );
};

export default EditProfilePage;
