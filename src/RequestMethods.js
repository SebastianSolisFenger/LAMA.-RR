import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTkzZGI1YTc3NGY3NWM0Mjc3ODViNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTY1MDEwNSwiZXhwIjoxNjU5OTA5MzA1fQ.XPTfgRf314qN2L2-7Z-UrUjTuEdwdISIPgh41vPD-nU';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});

// import axios from 'axios';

// const BASE_URL = 'http://localhost:5000/api/';
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser
//     .accessToken || '';

// export const publicRequest = axios.create({
//   baseURL: BASE_URL,
// });

// export const userRequest = axios.create({
//   baseURL: BASE_URL,
//   header: { token: `Bearer ${TOKEN}` },
// });
