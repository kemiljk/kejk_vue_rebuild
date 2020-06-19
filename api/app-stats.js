const https = require("https");

module.exports = (req, res) => {
  const url = "https://api.appstoreconnect.apple.com/v1/salesReports";
  https.get(url, (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      const pluginInfo = JSON.parse(data).meta.plugin;
      pluginInfo.versions = null;
      
      res.json(pluginInfo);
    });
  });
}



/*
https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsImtpZCI6IlZSQko2VFM2WjgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiI2OWE2ZGU3Yi0zZjYwLTQ3ZTMtZTA1My01YjhjN2MxMWE0ZDEiLCJleHAiOjE1OTI1MDAzODAsImF1ZCI6ImFwcHN0b3JlY29ubmVjdC12MSJ9.sYoU8ioXVdHkVopwdHeU-gKpdgwPTT9WwbKRf_Nx5_g */