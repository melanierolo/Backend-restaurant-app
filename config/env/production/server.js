module.exports = ({ env }) => ({
  proxy: true,
  url: env("MY_HEROKU_URL"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS"),
  },
});
