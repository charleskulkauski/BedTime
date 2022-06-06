var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idAquario", function (req, res) {
    medidaController.homensAcordam(req, res);
});

<<<<<<< HEAD
router.get("/pegar/cliqueMulheres", function (req, res) {
    medidaController.cliqueMulheres(req, res);
});

=======
router.get("/ultimas/:idAquario", function (req, res) {
    medidaController.mulheresAcordam(req, res);
});

router.get("/ultimas/:idAquario", function (req, res) {
    medidaController.homensDormem(req, res);
});

router.get("/ultimas/:idAquario", function (req, res) {
    medidaController.mulheresDormem(req, res);
});



>>>>>>> c4825e64107ddfdc550cb5a43f8f54e929347ebc
router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router; 