
let express = require('express');
const router = express.Router();
const TimeController = require("../controllers/timeController");

router.get('/time', TimeController.getServerTime);

module.exports = router;