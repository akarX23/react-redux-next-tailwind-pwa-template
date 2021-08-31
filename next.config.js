const withPWA = require("next-pwa");

// Just make register true for enabling service worker
module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});
