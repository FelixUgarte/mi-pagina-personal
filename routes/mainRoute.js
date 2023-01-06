const express = require("express");
const mainController = require("../controllers/mainController");
const router = express.Router();

router.get("/", mainController.home);

router.get("/contacto", mainController.contacto);
router.post("/", mainController.storecoment);

router.get("/portfolio", mainController.portfolio);

router.post("/", mainController.storecoment);

module.exports = router;
