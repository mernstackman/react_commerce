import env from "./env";

const envr = env.NODE_ENV || "development";

const secretKey =
  env.JWT_SECRET || "099093b9390d697a5935d212b889b8bf580dd7e8efa58dec59140a740f2da6b7";
const PORT = env.PORT || 3000;
const CLIENT_ORIGIN = envr === "production" ? envr : "http://localhost:3000";
const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const mailRegex = /.+\@.+\..+/;
const passRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
const userRegex = /[$&+,:;=\\\\?@#|/\'\"\`\~<>.^*()%!-\s]/;

export default {
  secretKey,
  PORT,
  CLIENT_ORIGIN,
  emailRegex,
  passRegex,
  userRegex
};
