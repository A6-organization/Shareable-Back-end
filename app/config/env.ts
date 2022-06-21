import dotenv from "dotenv";

export const Environment = {
  Local: "local",
  Development: "development",
  Production: "production",
};

dotenv.config({
  path: ".env",
});

export default {
  portLocal: process.env.PORT_LOCAL,
  environment: process.env.NODE_ENV,
  port: process.env.PORT,

  database: {
    username: process.env.DB_USERNAME || "username",
    password: process.env.DB_PASSWORD || "password", // if blank then set null
    database: process.env.DB_NAME || "database",
    resource: process.env.DB_RESOURCE || "resource",
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    logging: process.env.NODE_ENV === Environment.Local,
    port: parseInt(String(process.env.DB_PORT)) || 1433,
  },
};
