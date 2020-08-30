// set-up express server

const express = require("express");

const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//run 'npm start' to start the server
//https://medium.com/@ralph1786/how-to-setup-an-express-server-5fd9cd9ae073