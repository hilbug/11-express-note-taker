// DEPENDENCIES
// Path package to get the correct file path for html
const path = require("path");
// Routing
const express = require("express");
const htmlRouter = express.Router();

// HTML GET Requests - handles when users "visit" a page - user is shown an HTML page of content

htmlRouter.get("/index", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

htmlRouter.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// If no matching route is found default to index
htmlRouter.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = htmlRouter;

// References
// https://expressjs.com/en/guide/routing.html