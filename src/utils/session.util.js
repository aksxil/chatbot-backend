const { v4: uuid } = require("uuid");

function getSessionId(existing) {
  return existing || uuid();
}

module.exports = { getSessionId };
