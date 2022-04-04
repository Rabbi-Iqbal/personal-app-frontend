import axiosClient from "./config";

const signIn = (data) => {
  return axiosClient.post('/user/login', data);
};

export { signIn };
