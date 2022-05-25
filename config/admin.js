module.exports = ({ env }) => ({
  auth: {
    secret:
      process.env.ADMIN_JWT_SECRET ||
      env("ADMIN_JWT_SECRET", "000000000000000000000"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
});
