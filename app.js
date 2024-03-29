const path = require("path");
const express = require("express");
const livereload = require("livereload");
const connect = require("connect-livereload");
const server = livereload.createServer();

server.watch(path.join(__dirname, "phrases"));
server.watch(path.join(__dirname, "flashcards"));
server.watch(path.join(__dirname, "public"));

const app = express();
app.use(connect());
app.use("/", express.static("public"));
app.use("/phrases", express.static("phrases/public"));
app.use("/flashcards", express.static("flashcards"));

app.listen(8081, () => console.log("Express is listening.."));
