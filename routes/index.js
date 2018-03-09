var express = require('express'), router = express.Router();

//Controllers
var Auth = require('../controllers/Auth');
var BootFechaGrupos = require('../controllers/BootFechaGrupos');


router.get('/testeget', Auth.getToken);
router.post('/auth', Auth.getToken);
router.get('/bootfechagrupos', BootFechaGrupos.showProfile);

module.exports = router;
