const express = require("express");
const app = express();
// const fs = require("fs");
// const path = require("path");
const addWorkflow = require('web-workflow');
// const _ = require("lodash");

// const session = require("express-session");
const cookieParser = require("cookie-parser");
app.use(express.static("dist"));
// middleware
app.use(cookieParser());
addWorkflow(app, ['/transport-bh'], '../../workflow');
app.listen(3001, () => console.log("Listening on port 3001!"));
