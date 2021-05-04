const logger = require("../utils/logger");

class TimeModel {
  constructor() {
    super(Model);
    this.time = {
      properties: {
        epoch: {
          description: "The current server time, in epoch seconds, at time of processing the request.",
          type: "number"
        }
      },
      required: ["epoch"],
      type: "object"
     }
     
  }
  
  getServerTime = async () => {

    return null;
  }
}

module.exports = new TimeModel();