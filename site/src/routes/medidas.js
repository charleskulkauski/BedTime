var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/homensAcordam", function (req, res) {
    medidaController.homensAcordam(req, res);
});

router.get("/mulheresAcordam", function (req, res) {
    medidaController.mulheresAcordam(req, res);
});

router.get("/homensDormem", function (req, res) {
    medidaController.homensDormem(req, res);
});

router.get("/mulheresDormem", function (req, res) {
    medidaController.mulheresDormem(req, res);
});


module.exports = router; 