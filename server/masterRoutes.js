const recentlyWatchedRoutes = require("../src/recentlyWatchedRoutes");
const favoritesRoutes = require("../src/favoritesRoutes");

module.exports = app => {
  recentlyWatchedRoutes(app);
  favoritesRoutes(app);
};
