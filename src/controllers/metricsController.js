const Metrics = require("../models/metricsModel");
const logger = require('../utils/logger');

class MetricsController {
  /**
   * @description 
   * @return {object} 
   **/
  dnaResults = async (req, res) => {
    logger.info('GET: /metrics');
    let response = await Metrics.getDefaultMetrics();
    return res.status(response.status).json(response.result);
  };
}

module.exports = new MetricsController();