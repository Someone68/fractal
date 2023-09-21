const express = require("express");
const app = express();
app.all("/", (req, res) => {
	res.send("Yo!");
});
app.listen(process.env.PORT || 3000);
