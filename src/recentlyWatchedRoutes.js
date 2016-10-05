const recentlyWatchedCtrl = require("./recentlyWatchedCtrl");

module.exports = app => {
  app.route("/api/recently-watched")
    .get(recentlyWatchedCtrl.getRecentVids)
    .post(recentlyWatchedCtrl.postRecentVids);

  app.put("/api/videos/:id", favoritesCtrl.addVideoToRecents);
}
