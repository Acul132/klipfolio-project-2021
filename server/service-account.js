if (process.env.NODE_ENV === 'production'){
  //Private information is provided through env variables in heroku when in production mode
  module.exports = serviceAccount = {
      "type": "service_account",
      "project_id": "klipfolio-project-2021",
      "private_key_id": process.env.private_key_id,
      "private_key": process.env.private_key.replace(/\\n/g, '\n'),
      "client_email": process.env.client_email,
      "client_id": process.env.client_id,
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-lp8fw%40klipfolio-project-2021.iam.gserviceaccount.com"
    }
} else {
  module.exports = serviceAccount = require('./firebase-creds.json');
}
