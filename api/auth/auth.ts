// login(): POST {username, password} & save JWT to Local Storage
// logout(): remove JWT from Local Storage
// register(): POST {username, email, password} 

import axiosClient from "../axiosClient"; 
const FormData = require("form-data");
export const login = async (params) => {
  try {
    const formData = new FormData();

    formData.append("username", params.username);
    formData.append("password", params.password);

    const res = await axiosClient.post("/api/Account/Login", formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
 
    return res;
  } catch (error) {
    console.log("login error", error);
    return Promise.reject(error);
  }
};

export const registerAPI = async (params: {
  username: String;
  email: String;
  password: String;
  roles: Array<String>;
}) => {
  try {
    const res = await axiosClient.post("/auth/signup", params);
    return res;
  } catch (error) {
    console.log("register error", error);
    return Promise.reject(error);
  }
};
