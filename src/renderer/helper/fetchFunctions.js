import { getMyOrganizations, getUserInfo } from '../redux/reducers/userReducer';
import { store } from '../redux/store';


// Fetch all organizations of the user
export const fetchMyOrganizations = () => {
  const userToken = store.getState().user.userToken;
  const organizations = store.getState().user.organizations;
  const dispatch = store.dispatch;

  if (organizations) return null;

  fetch('https://end.mapilio.com/api/function/organizations/organization/myOrganizations',{
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + userToken,
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .then(res => {
        if (res.data){
          dispatch(
            getMyOrganizations({
              organizations: res.data,
            })
          );
        }
      }
    )
}

// fetch user details and set to redux
export const getUserDetails = () => {
  const userToken = store.getState().user.userToken;
  const dispatch = store.dispatch;

  fetch('https://end.mapilio.com/api/function/user_profile/profile/getProfile',{
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + userToken,
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .then(res => {
      if (res.data){
        dispatch(
          getUserInfo({
            avatar: res.data[0].user_profile_photo,
            username: res.data[0].username,
          })
        );
      }
    })
}



