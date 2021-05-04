
let express = require('express');
const router = express.Router();
const MetricsController = require("../controllers/metricsController");


router.get('/metrics', MetricsController.getDefaultMetrics);

module.exports = router;