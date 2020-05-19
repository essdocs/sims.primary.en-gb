"use strict";

const fs = require("fs");

const d = {
  "last-update":new Date().toJSON()
};

const data = JSON.stringify(d);
fs.writeFileSync("./_broadcast/whats-new-flag.json", data);