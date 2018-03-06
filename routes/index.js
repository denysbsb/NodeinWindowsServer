var express = require('express'), router = express.Router();

//Controllers
var BootFechaGrupos = require('../controllers/BootFechaGrupos');

router.get('/bootfechagrupos', BootFechaGrupos.showProfile);

module.exports = router;
