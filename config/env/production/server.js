module.exports = ({ env }) => ({
  proxy: true,
  url: env("MY_HEROKU_URL"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", [
      "o9AKK1rh+BobPtmnSM3620gk1+0i5NhdTIZfgCjxhbM=",
      "ZJr59ZIkRbKUsDGTzScQX8VttB5c4EK7hsUU4WWGInQ=",
    ]),
  },
});
