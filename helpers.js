const handleAuthentication = (req, res, next) => {
  const authorizeHeader = req.headers["authorization"];

  const token = authorizeHeader && authorizeHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  const payload = jwt.verify(token, "our secret");

  User.findById(payload.sub).then((user) => {
    if (!user) return console.log("no matched user");
    req.user = user;
    next();
  });
};

module.exports.handleAuthentication = handleAuthentication;

// get your token

// we will assume that authorize header is in that shape "authorization:Bearer AToken"
// now check if there is a token or not
// verfiy it and get your payload
// this verify function verify that the hashed header and the hashed body matches their hashed signature

// authenticate the user
