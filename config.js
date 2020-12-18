const CONFIG = {
  sendgrid: {
    from: {
      name: process.env.SENDGRID_FROM_NAME || 'Sahiba',
      email: process.env.SENDGRID_FROM_EMAIL || 'mg.sahiba@gmail.com',
    },
    templateId_confirmation: process.env.SENDGRID_CONFIRMATION_TEMPLATE_ID || 'd-2f79cff8ac0a4697a479e24522adb10f ',
    apiKey: process.env.SENDGRID_API_KEY || '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',
  },
  mongo: {
    server: process.env.MONGO_SERVER || '',
    database: process.env.MONGO_DATABASE || '',
  },
  host: process.env.HOST || 'https://serene-citadel-52952.herokuapp.com/',
};

module.exports = CONFIG;
