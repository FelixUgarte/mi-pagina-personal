const path = require("path");
const db = require("../data/db");
const comments = db.getComments();

const mainController = {
  home: (req, res) => {
    res.render("home");
  },
  contacto: function (req, res) {
    const comments = db.getComments();
    res.render("contacto");
  },

  storecoment: function (req, res) {
    const comments = db.getComments();
    const newComent = req.body;

    console.log(req.body);

    if (comments.length) {
      newComent.id = comments[comments.length - 1].id + 1;
    } else {
      newComent.id = 1;
    }
    comments.push(newComent);
    db.saveComments(comments);

    res.redirect("contacto");
  },
  portfolio: (req, res) => {
    res.render("portfolio");
  },
};

module.exports = mainController;
