const express = require("express");
const app = express();
app.all("/", (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`Server listening on port ${process.env.PORT || 3000}`);
});
