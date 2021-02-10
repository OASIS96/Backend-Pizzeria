import dotenv from "dotenv";

dotenv.config();

export const variables = {
  PORT: process.env.PORT,
  SECRET_JWT: process.env.SECRET_JWT,
};
