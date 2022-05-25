module.exports = ({ env }) => {
  return {
    auth: {
      secret: env(
        "ADMIN_JWT_SECRET",
        "N1IAuilmzi9/e0nz6V5QM2/mPUnNzGWOa3GcE9fDqRU="
      ),
    },
    apiToken: {
      salt: env(
        "API_TOKEN_SALT",
        "g54k0KZjEcVLaoDRa5yl8S0JJEUHnFIxTHb3b0nq30I="
      ),
    },
  };
};
