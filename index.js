const express = require("express");
const app = express();
const path = require("path");
const { auth } = require("express-openid-connect");

app.use(express.static(path.join(__dirname, "./public")));

app.all("/", (req, res) => {
	res.sendStatus(200);
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`Server listening on port ${process.env.PORT || 3000}`);
});

const config = {
	authRequired: false,
	auth0Logout: true,
	secret: process.env["AUTH0_SECRET"],
	baseURL: "https://fractal.cyclic.cloud",
	clientID: "BpiMKH9fCvrTZVZ6DnPXetcK9Ypu55Ur",
	issuerBaseURL: "https://dev-d6wbypv4bcbr56bq.us.auth0.com",
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
	res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});
