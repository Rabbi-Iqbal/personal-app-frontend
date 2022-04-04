import jwt_decode from "jwt-decode";

export const accessToken = () => {
  if (typeof window === undefined) return "";
  return window.localStorage.getItem("accessToken");
};

export const user = jwt_decode(accessToken() || "");
