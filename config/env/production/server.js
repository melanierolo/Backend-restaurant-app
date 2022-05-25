module.exports = ({ env }) => ({
  proxy: true,
  url: env("HEROKU_URL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
  admin: {
    auth: {
      secret: env(
        "ADMIN_JWT_SECRET",
        "q1nk3TmLFDuj/T3WwksWb3bDjHL7Pv/dDKDiBJBbORo="
      ),
    },
  },
});
