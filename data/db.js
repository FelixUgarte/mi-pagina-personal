const fs = require("fs");
const path = require("path");

const commentsFilePath = path.join(__dirname, "./database.json");

module.exports = {
  getComments: function () {
    return JSON.parse(fs.readFileSync(commentsFilePath, "utf-8"));
  },
  saveComments: function (comments) {
    const fileTxt = JSON.stringify(comments, null, 4);

    fs.writeFileSync(commentsFilePath, fileTxt);
  },
};
