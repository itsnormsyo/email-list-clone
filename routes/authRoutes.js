const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google/",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};

// this initiates the passport to authenticate using this route.. using google (there is mini code in GoogleStrategy that uses the 'google' string)

// scope specifies to google servers what access we want to have in the users profile information google has internal list of scopes
