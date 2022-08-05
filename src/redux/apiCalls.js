// import { loginFailure, loginStart, loginSuccess } from './userRedux';
// import { publicRequest } from '../RequestMethods';

// export const login = async (dispatch, user) => {
//   dispatch(loginStart());

//   try {
//     const res = await publicRequest.post('auth/login', user);
//     dispatch(loginSuccess(res.data));
//   } catch (err) {
//     dispatch(loginFailure());
//   }

//   // try {
//   //     const response = await fetch('/api/login', {
//   //     method: 'POST',
//   //     body: JSON.stringify(user),
//   //     });
//   //     const data = await response.json();
//   //     if (data.error) {
//   //     dispatch(loginFailure(data.error));
//   //     } else {
//   //     dispatch(loginSuccess(data));
//   //     }
//   // } catch (error) {
//   //     dispatch(loginFailure(error));
//   // }
// };

import { loginFailure, loginStart, loginSuccess } from './userRedux';
import { publicRequest } from '../RequestMethods';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure(err.response.data));
  }
};
