const CONFIG = {
  sendgrid: {
    from: {
      name: process.env.SENDGRID_FROM_NAME || 'Test sender',
      email: process.env.SENDGRID_FROM_EMAIL || 'jacob.ramirez@inallmedia.com',
    },
    templateId_confirmation: process.env.SENDGRID_CONFIRMATION_TEMPLATE_ID || 'd-2f79cff8ac0a4697a479e24522adb10f',
    templateId_invoice: process.env.SENDGRID_INVOICE_TEMPLATE_ID || 'd-4c8b24c9517d4e0bad1e3a56c4ae07c7',
    apiKey: process.env.SENDGRID_API_KEY || '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',
  },
  mongo: {
    server: process.env.MONGO_SERVER || '',
    database: process.env.MONGO_DATABASE || '',
  },
  host: process.env.HOST || 'https://serene-citadel-52952.herokuapp.com/',
};

module.exports = CONFIG;
