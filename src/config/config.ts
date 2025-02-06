import { config as conf } from "dotenv";
conf();

const _config = {
  port: process.env.PORT,
  db_port: process.env.DB_PORT,
  db_password: process.env.DB_PASSWORD,
  db_username: process.env.DB_USERNAME,
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
};

export const config = Object.freeze(_config);
