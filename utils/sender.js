const sendgrid = require('@sendgrid/mail');
const CONFIG = require('../config');

function createSender() {
  sendgrid.setApiKey(CONFIG.sendgrid.apiKey);
  return sendgrid;
}

module.exports = createSender();
