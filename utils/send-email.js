
const sender = require('./sender');
const CONFIG = require('../config');

function sendEmail(to, templateId, data, subject) {
  const msg = {
    from: { ...CONFIG.sendgrid.from },
    to,
    templateId,
    subject,
    dynamic_template_data: {
      ...data,
    },
  };
  return sender
    .send(msg)
    .then((info) => console.info(`Notification sent to: ${to}`, { info }))
    .catch((error) => console.error(`Notification failed to: ${to}`, { message: error.toString() }));
}

module.exports = sendEmail;
