module.exports = ({ env }) => ({
  proxy: true,
  url: env("MY_HEROKU_URL"),
  app: {
    keys: env.array("APP_KEYS", [
      "fK4Qgs/xJrbEtvHR53AyLv359ehhoW20YxIDqw6QOoU=",
      "teHVLC8dqRa1TdYAxJHmJjItylltGAND5Zw6uQ3ohsY=",
    ]),
  },
});
