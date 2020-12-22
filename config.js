const CONFIG = {
  sendgrid: {
    from: {
      name: process.env.SENDGRID_FROM_NAME || 'PARTIE EVENTS',
      email: process.env.SENDGRID_FROM_EMAIL || 'mg.sahiba@gmail.com',
    },
    templateId_confirmation: process.env.SENDGRID_CONFIRMATION_TEMPLATE_ID || 'd-2f79cff8ac0a4697a479e24522adb10f',
    templateId_invoice: process.env.SENDGRID_INVOICE_TEMPLATE_ID || 'd-2e968d0567704f1b810644d69a609d71',
    apiKey: process.env.SENDGRID_API_KEY || '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',
  },
  mongo: {
    server: process.env.MONGO_SERVER || '',
    database: process.env.MONGO_DATABASE || '',
  },
  host: process.env.HOST || 'https://powerful-fortress-17827.herokuapp.com/',
};

module.exports = CONFIG;

